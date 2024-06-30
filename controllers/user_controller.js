import User from "../models/user_model.js";

export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll();
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

export const getUsersById = async(req, res) =>{
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch(error){
        console.log(error.message);
    }
}

export const createUser = async(req, res) =>{
    try {
        const { nama, email, password, gender } = req.body;
        await User.create(req.body);
        res.redirect('/users');
    } catch(error){
        console.log(error.message);
    }
}

export const updateUser = async(req, res) =>{
    try {
        const { editName, editEmail, editGender } = req.body;
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch(error){
        console.log(error.message);
    }
}

export const deleteUser = async(req, res) =>{
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch(error){
        console.log(error.message);
    }
}