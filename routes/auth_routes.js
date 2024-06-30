import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user_model.js';
import { getUsers } from '../controllers/user_controller.js';

const router = express.Router();

// Route untuk menampilkan form login
router.get('/login', (req, res) => {
    res.render('login');
});

// Route untuk memproses login
router.post('/login', async (req, res) => {
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

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
