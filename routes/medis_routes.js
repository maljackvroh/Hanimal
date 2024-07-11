import express from "express";
import {
    getMedis,
    getMedisById,
    createMedis,
    updateMedis,
    deleteMedis
} from "../controllers/medis_controller.js";

const router = express.Router();

router.get('/users', getMedis);
router.get('/users/:id', getMedisById);
router.post('/users', createMedis);
router.patch('/users/:id', updateMedis);
router.delete('/users/:id', deleteMedis);


export default router;