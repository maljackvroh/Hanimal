import express from "express";
import {
    getDoctors,
    getDoctorsById,
    createDoctors,
    updateDoctors,
    deleteDoctors,
    uploadFile,
    uploadPdf
} from "../controllers/doctor_controller.js";

const router = express.Router();

router.get('/doctor', getDoctors);
router.get('/doctor/:id', getDoctorsById);
router.post('/doctor', createDoctors);
router.patch('/doctor/:id', updateDoctors);
router.delete('/doctor/:id', deleteDoctors);
router.post('/doctor/upload', uploadFile, uploadPdf)

export default router;