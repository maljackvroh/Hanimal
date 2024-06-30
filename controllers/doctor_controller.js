import multer from "multer";
import path from "path";
import Doctor from "../models/doctor_model.js";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    // Hanya terima file dengan ekstensi .pdf
    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(new Error('File harus dalam format PDF'), false);
    }
};

const upload = multer({storage, fileFilter});

export const uploadFile = upload.single('file');


// Route untuk mengunggah file
export const uploadPdf = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'File PDF diperlukan' });
        }
        const filePath = req.file.path;
        // Simpan path file ke dalam database
        await Doctor.update({ file_path: filePath }, {
            where: { id: req.body.doctorId }
        });
        res.status(200).json({ message: 'File PDF uploaded successfully' });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getDoctors = async(req, res) =>{
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch(error){
        console.log(error.message);
    }
}

export const getDoctorsById = async(req, res) =>{
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch(error){
        console.log(error.message);
    }
}

export const createDoctors = async(req, res) =>{
    try {
        await User.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch(error){
        console.log(error.message);
    }
}

export const updateDoctors = async(req, res) =>{
    try {
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch(error){
        console.log(error.message);
    }
}

export const deleteDoctors = async(req, res) =>{
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch(error){
        console.log(error.message);
    }
}