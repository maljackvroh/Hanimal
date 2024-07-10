import express from "express";
import {
    getDoctors,
    createDoctors,
    deleteDoctors,
    updateDoctorProfile,
    uploadFiles,
} from "../controllers/doctor_controller.js";

const router = express.Router();

router.get('/doctor', getDoctors);
router.post('/doctor', uploadFiles, createDoctors);
router.delete('/doctor/:id', deleteDoctors);
router.post('/doctor/:id', updateDoctorProfile);


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

router.post('/update_doctor', async (req, res) => {
    const doctorData = req.body;
    try {
        await updateDoctorProfile(doctorData);
        res.redirect('/dashboard_doctor');
    } catch (error) {
        res.status(500).send('(Internal Server Error(dr_update))');
    }
});

export default router;