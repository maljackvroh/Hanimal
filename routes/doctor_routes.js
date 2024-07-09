import express from "express";
import {
    getDoctors,
    // getDoctorsById,
    createDoctors,
    deleteDoctors,
    getDoctorProfile,
    updateDoctorProfile,
    uploadFiles
} from "../controllers/doctor_controller.js";

const router = express.Router();

router.get('/doctor', getDoctors);
// router.get('/doctor/:id', getDoctorsById);
router.post('/doctor', uploadFiles, createDoctors);
router.delete('/doctor/:id', deleteDoctors);
router.get('/doctor/:id', getDoctorProfile);
router.post('/doctor/update', updateDoctorProfile);

// Route untuk halaman pengguna
router.get('/doctors', async (req, res) => {
    try {
        const doctors = await getDoctors(req, res);
        res.render('doctors', { doctors });
    } catch (error) {
        res.status(500).send('Internal Server Error (dr_doctor)');
    }
});

router.post('/signup', createDoctors, (req, res) => {
    res.redirect('/doctors');
}); 

// router.get('/dashboard_doctor', (req, res) => {
//     // const doctorId = req.session.doctorId;
//     // try {
//     //     const doctor = await getDoctorsById(doctorId);
//     //     res.render('dashboard_doctor', {doctor});
//     // } catch (error) {
//     //     res.status(500).send('Internal Server Error');
//     // }
//     res.redirect('/dashboard_doctor')
// });

router.post('/update_doctor', async (req, res) => {
    const doctorData = req.body;
    try {
        await updateDoctor(doctorData);
        res.redirect('/dashboard_doctor');
    } catch (error) {
        res.status(500).send('(Internal Server Error(dr_update))');
    }
});

export default router;