import Payment from "../models/invoice.js";
import { v4 as uuidv4 } from 'uuid';

// Create a new payment
export const createPayment = async (req, res) => {
    try {
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
            travel_cost,
            total_amount
        } = req.body;

        // Membuat objek Invoice baru
        const newInvoice = new Invoice({
            name,
            animal_type,
            address,
            age,
            gender,
            phone,
            medicine_cost,
            admin_cost,
            service_cost,
            travel_cost,
            total_amount,
            created_at: new Date()
        });

        await newInvoice.save();

        res.render('resi', {
            name,
            animalType: animal_type,
            address,
            age,
            gender,
            phone,
            medicineCost: medicine_cost,
            adminCost: admin_cost,
            serviceCost: service_cost,
            travelCost: travel_cost,
            totalAmount: total_amount
        });
    } catch (err) {
        console.error('Error creating payment:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get all payments
export const getPayments = async (req, res) => {
    try {
        const response = await Payment.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Error retrieving payments" });
    }
};

// Get payment by ID
export const getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findOne({ where: { payment_id: req.params.id } });
        if (!payment) {
            return res.status(404).json({ msg: "Payment not found" });
        }
        res.status(200).json(payment);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Error retrieving payment" });
    }
};

// Update a payment
export const updatePayment = async (req, res) => {
    try {
        const updatedPayment = req.body;
        await Payment.update(updatedPayment, { where: { payment_id: req.params.id } });
        res.status(200).json({ msg: "Payment Updated" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Error updating payment" });
    }
};

// Delete a payment
export const deletePayment = async (req, res) => {
    try {
        await Payment.destroy({ where: { payment_id: req.params.id } });
        res.status(200).json({ msg: "Payment Deleted" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Error deleting payment" });
    }
};
