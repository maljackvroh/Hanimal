import Medis from "../models/rekam_medis.js";

export const getMedis = async(req, res) =>{
    try {
        const response = await Medis.findAll();
        if (req.path.startsWith('/api')){
            res.status(200).json(response);
        } else {
            return response;
        }
    } catch(error){
        console.log(error.message);
        if (req.path.startsWith('/api')) {
            res.status(500).json({msg: error.message});
        } else {
            throw error;
        }
    }
}

export const getMedisById = async(req, res) =>{
    try {
        const response = await Medis.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch(error){
        console.log(error.message);
    }
}

export const createMedis = async(req, res) =>{
    try {
        const { dokter, tanggal, keluhan, diagnosa, tindakan,tindaklanjut, keterangan } = req.body;
        await Medis.create(req.body);
        res.redirect('/dashboar_admin');
    } catch(error){
        console.log(error.message);
    }
}

export const updateMedis = async(req, res) =>{
    try {
        const { dokter, tanggal, keluhan, diagnosa, tindakan,tindaklanjut, keterangan } = req.body;
        await Medis.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data Updated"});
    } catch(error){
        console.log(error.message);
    }
}

export const deleteMedis = async(req, res) =>{
    try {
        await Medis.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch(error){
        console.log(error.message);
    }
}