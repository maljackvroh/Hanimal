import express from "express";
import {
    getDoctors,
    getDoctorsById,
    createDoctors,
    updateDoctors,
    deleteDoctors,
    // uploadFiles
} from "../controllers/doctor_controller.js";

const router = express.Router();

router.get('/doctor', getDoctors);
router.get('/doctor/:id', getDoctorsById);
router.post('/doctor', createDoctors);
// router.patch('/doctor/:id', uploadFiles, updateDoctors);
router.delete('/doctor/:id', deleteDoctors);

// Route untuk halaman pengguna
router.get('/doctors', async (req, res) => {
    try {
        const doctors = await getDoctors(req, res);
        res.render('doctors', { doctors });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

router.post('/doctors/add', createDoctors, (req, res) => {
    res.redirect('/doctors');
});

export default router;