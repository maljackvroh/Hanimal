import multer from "multer";
import path from "path";
import Doctor from "../models/doctor_model.js";

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(__dirname, '../public/uploads'));
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     }
// });

// const fileFilter = (req, file, cb) => {
//     // Hanya terima file dengan ekstensi yang sesuai
//     if (file.mimetype === 'application/pdf' || file.mimetype === 'application/msword' || file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
//         cb(null, true);
//     } else {
//         cb(new Error('File harus dalam format PDF atau DOC'), false);
//     }
// };

// const upload = multer({ storage, fileFilter });

// export const uploadFiles = upload.fields([
//     { name: 'sip', maxCount: 1 },
//     { name: 'strv', maxCount: 1 }
// ]);

export const getDoctors = async (req, res) => {
    try {
        const response = await Doctor.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getDoctorsById = async (req, res) => {
    try {
        const response = await Doctor.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createDoctors = async (req, res) => {
    try {
        const { username, password, email, no_hp, kabupaten, klinik, alamat, info } = req.body;
        // const sip = req.files['sip'][0].path;
        // const strv = req.files['strv'][0].path;

        await Doctor.create(req.body);
        res.redirect('/login_doctor');
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: "Error creating doctor" });
    }
};

export const updateDoctors = async (req, res) => {
    try {
        await Doctor.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Doctor Updated" });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteDoctors = async (req, res) => {
    try {
        await Doctor.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Doctor Deleted" });
    } catch (error) {
        console.log(error.message);
    }
};
