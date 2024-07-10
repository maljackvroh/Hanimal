import multer from "multer";
import path from "path";
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
import Doctor from "../models/doctor_model.js";
import { fileURLToPath } from 'url';

// Setup Multer
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/uploads'));
    },
    // filename: (req, file, cb) => {
    //     cb(null, ${Date.now()}-${file.originalname});
    // }
});


const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf' || file.mimetype === 'application/msword' || file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        cb(null, true);
    } else {
        cb(new Error('File harus dalam format PDF atau DOC'), false);
    }
};


const upload = multer({ storage, fileFilter });

export const uploadFiles = upload.fields([
    { name: 'sip', maxCount: 1 },
    { name: 'strv', maxCount: 1 }
]);


export const getDoctors = async (req, res) => {
    try {
        const response = await Doctor.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createDoctors = async (req, res) => {
    try {
        const { username, password, email, no_hp, kabupaten, klinik, alamat, info } = req.body;
        const sip = req.files['sip'][0].path;
        const strv = req.files['strv'][0].path;

        await Doctor.create({
            ...req.body,
            sip,
            strv
        });
        res.redirect('/login_doctor');
    } catch (error) {
        console.error('Error creating doctor:', error);
        return res.status(500).json({ msg: "Error creating doctor" });
    }
};

export const updateDoctor = async (doctorData) => {
    try {
        await Doctor.update(doctorData, {
            where: {
                id: doctorData.id
            }
        });
    } catch (error) {
        throw error;
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

// export const getDoctorProfile = async (req, res) => {
//     try {
//         const doctor = await Doctor.findOne({ where: { id: req.params.id } });
//         res.render('doctor_profile', { doctor });
//     } catch (error) {
//         console.log(error.message);
//     }
// };

export const updateDoctorProfile = async (req, res) => {
    try {
        const { id, username, ttl, alamat, klinik, spesialis, pendidikan, keanggotaan, afiliasi, bahasaint, bahasa, perkenalan } = doctorData;

         // Cari dan update dokter berdasarkan id
         const updatedDoctor = await Doctor.findByPk(id);
         if (!updatedDoctor) {
             throw new Error('Doctor not found');
         }
 
         await updatedDoctor.update({
             username,
             ttl,
             alamat,
             klinik,
             spesialis,
             pendidikan,
             keanggotaan,
             afiliasi,
             bahasaint,
             bahasa,
             perkenalan
         });
 
         return updatedDoctor;
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, error: error.message });
    }
};

