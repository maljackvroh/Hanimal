import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user_model.js';
import Doctor from '../models/doctor_model.js';

const router = express.Router();

// Route untuk menampilkan form login
// router.get('/login', (req, res) => {
//     res.render('login');
// });

// Route untuk memproses login
router.post('/login_user', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username: username } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        req.session.user = user;
        res.redirect('home');
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/logout_user', (req, res) => {
    req.session.user.destroy(err => {
        if (err) {
            return res.redirect('/');
        }
        res.clearCookie('connect.sid');
        res.redirect('/');
    });
});

// Route untuk memproses login
router.post('/login_doctor', async (req, res) => {
    const { username, password } = req.body;
    try {
        const doctor = await Doctor.findOne({ where: { username: username } });

        if (!doctor) {
            return res.status(401).json({ message: 'Username not found' });
        }
          
        const match = await bcrypt.compare(password, doctor.password);
        if (!match) {
            return res.status(401).json({ message: 'Incorrect password' });
        }
        
         // Simpan informasi dokter dalam sesi
        req.session.doctor = {
            id: doctor.id,
            username: doctor.username,
            ttl: doctor.ttl,
            alamat: doctor.alamat,
            klinik: doctor.klinik,
            spesialis: doctor.spesialis,
            pendidikan: doctor.pendidikan,
            keanggotaan: doctor.keanggotaan,
            afiliasi: doctor.afiliasi,
            bahasaint: doctor.bahasaint,
            bahasa: doctor.bahasa,
            perkenalan: doctor.perkenalan,
        };
             
        res.redirect('dashboard_doctor');
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/logout_doctor', (req, res) => {
    req.session.doctor.destroy(err => {
        if (err) {
            return res.redirect('/');
        }
        res.clearCookie('connect.sid');
        res.redirect('/');
    });
});

export default router;
