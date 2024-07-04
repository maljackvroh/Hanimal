import express from "express";
import { createPayment, getPayments, getPaymentById, updatePayment, deletePayment } from "../controllers/invoice_controller.js";

const router = express.Router();

router.post('/resi', createPayment);
router.get('/payments', getPayments);
router.get('/payments/:id', getPaymentById);
router.put('/payments/:id', updatePayment);
router.delete('/payments/:id', deletePayment);

router.post('/createPayment', (req, res) => {
    const {
        name,
        animal_type,
        address,
        age,
        gender,
        phone,
        medicine_cost,
        admin_cost,
        service_cost,
        travel_cost
      } = req.body;
    
      const totalAmount = parseInt(medicine_cost) + parseInt(admin_cost) + parseInt(service_cost) + parseInt(travel_cost);
    
      const data = {
        name,
        animalType: animal_type,
        address,
        age,
        gender,
        phone,
        medicineCost: parseInt(medicine_cost),
        adminCost: parseInt(admin_cost),
        serviceCost: parseInt(service_cost),
        travelCost: parseInt(travel_cost),
        totalAmount
      };
    
      // Render halaman resi dengan menggunakan template resi.ejs
      res.render('resi', data);
});


export default router;
