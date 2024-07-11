import express from "express";
import {
    getDoctors,
    createDoctors,
    deleteDoctors,
    updateDoctorProfile,
    uploadFiles,
} from "../controllers/doctor_controller.js";
import Doctor from "../models/doctor_model.js";

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

// router.post('/update_doctor', async (req, res) => {
//     const doctorData = req.body;
//     try {
//         await updateDoctorProfile(doctorData);
//         res.redirect('/dashboard_doctor');
//     } catch (error) {
//         res.status(500).send('(Internal Server Error(dr_update))');
//     }
// });

router.get('/edit/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findByPk(req.params.id);
        if (!doctor) {
            return res.status(404).json({ message: 'Dokter tidak ditemukan' });
        }
        res.render('dashboard_doctor', { doctor });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Terjadi kesalahan saat memuat dokter' });
    }
});

router.post('/edit/:id', async (req, res) => {
    const { username, ttl, alamat, klinik, spesialis, pendidikan, keanggotaan, afiliasi, bahasaint, bahasa, perkenalan } = req.body;
    try {
        const [updated] = await Doctor.update({
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
        }, {
            where: { id: req.params.id }
        });


        if (!updated) {
            return res.status(404).json({ message: 'Dokter tidak ditemukan' });
        }

        const updatedDoctor = await Doctor.findByPk(req.params.id);
        
        req.session.doctor = updatedDoctor;

        res.json(updatedDoctor);        
        // res.redirect('/dashboard_doctor');

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Terjadi kesalahan saat mengupdate dokter' });
    }
});

export default router;