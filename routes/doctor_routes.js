import express from "express";
import {
    getDoctors,
    getDoctorsById,
    createDoctors,
    deleteDoctors,
    getDoctorProfile,
    updateDoctorProfile
    // uploadFiles
} from "../controllers/doctor_controller.js";

const router = express.Router();

router.get('/doctor', getDoctors);
router.get('/doctor/:id', getDoctorsById);
router.post('/doctor', createDoctors);
router.delete('/doctor/:id', deleteDoctors);
router.get('/doctor/:id', getDoctorProfile);
router.post('/doctor/update', updateDoctorProfile);

// Route untuk halaman pengguna
router.get('/doctors', async (req, res) => {
    try {
        const doctors = await getDoctors(req, res);
        res.render('doctors', { doctors });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

router.post('/signup', createDoctors, (req, res) => {
    res.redirect('/doctors');
}); 

export default router;