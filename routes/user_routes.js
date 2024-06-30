import express from "express";
import {
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/user_controller.js";

const router = express.Router();

router.get('/api/users', getUsers);
router.get('/api/users/:id', getUsersById);
router.post('/api/users', createUser);
router.patch('/api/users/:id', updateUser);
router.delete('/api/users/:id', deleteUser);

// Route untuk halaman pengguna
router.get('/users', async (req, res) => {
    try {
        const users = await getUsers(req, res);
        res.render('users', { users });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

router.post('/users/add', createUser, (req, res) => {
    res.redirect('/users');
});

export default router;