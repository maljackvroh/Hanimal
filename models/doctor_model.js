import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Doctor = db.define('doctors', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    no_hp:  {
        type: DataTypes.STRING,
        allowNull: false
    },
    kabupaten:  {
        type: DataTypes.STRING,
        allowNull: false
    },
    klinik:  {
        type: DataTypes.STRING,
        allowNull: false
    },
    alamat:  {
        type: DataTypes.STRING,
        allowNull: false
    },
    info:  {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    sip:  {
        type: DataTypes.STRING,
        allowNull: false
    },
    strv:  {
        type: DataTypes.STRING,
        allowNull: false
    },

    // Non Optional Data
    ttl:  {
        type: DataTypes.STRING,
        allowNull: true
    },

    spesialis:  {
        type: DataTypes.STRING,
        allowNull: true
    },

    pendidikan:  {
        type: DataTypes.STRING,
        allowNull: true
    },

    keanggotaan:  {
        type: DataTypes.STRING,
        allowNull: true
    },

    afiliasi:  {
        type: DataTypes.STRING,
        allowNull: true
    },

    bahasaint:  {
        type: DataTypes.STRING,
        allowNull: true
    },

    bahasa:  {
        type: DataTypes.STRING,
        allowNull: true
    },

    perkenalan:  {
        type: DataTypes.STRING,
        allowNull: true
    },
},{
    freezeTableName:true
})


export default Doctor;

(async()=>{
    await db.sync();
})();