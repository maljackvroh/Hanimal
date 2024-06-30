import { Sequelize } from "sequelize";
import db from "../config/database.js";
import bcrypt from "bcrypt";
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
    freezeTableName:true,
    hooks: {
        beforeCreate: async (doctor) => {
            const salt = await bcrypt.genSalt(10);
            doctor.password = await bcrypt.hash(doctor.password, salt);
        },
        beforeUpdate: async (doctor) => {
            if (doctor.changed('password')) {
                const salt = await bcrypt.genSalt(10);
                doctor.password = await bcrypt.hash(doctor.password, salt);
            }
        }
    }
})


export default Doctor;

(async()=>{
    try {
        await db.sync();
        console.log("DB Sync");
    } catch (error) {
        console.error("Error sync: "+error);
    }
})();