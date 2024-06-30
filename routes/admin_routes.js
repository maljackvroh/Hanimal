import express from 'express';
import {
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/user_controller.js";

const router = express.Router();

// router.get('/api/admins', getAdmin);
// router.get('/api/users/:id', getAdminById);
// router.post('/api/users', createUser);
// router.patch('/api/users/:id', updateUser);
// router.delete('/api/users/:id', deleteUser);

// Route untuk menampilkan halaman login admin
// router.get('/admin_login', aynsc (req, res) => {
//     try {
//         const users = await getUsers(req, res);
//         res.render('users', { users });
//     } catch (error) {
//         res.status(500).send('Internal Server Error');
//     }
// });

// Route untuk memproses login admin
router.post('/admin_login', (req, res) => {
    // Proses autentikasi admin
    const { username, password } = req.body;
    // Implementasi autentikasi dan logika login di sini

    // Contoh sederhana hanya untuk redirect
    res.redirect('/admin/dashboard'); // Ganti dengan path yang sesuai setelah login berhasil
});

export default router;
