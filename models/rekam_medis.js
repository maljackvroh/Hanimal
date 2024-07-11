import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes } = Sequelize;

const Medis = db.define('medis', {
    dokter: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tanggal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    keluhan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    diagnosa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tindakan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tindaklanjut: {
        type: DataTypes.STRING,
        allowNull: false
    },
    keterangan: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    freezeTableName: true,
});

export default Medis;

(async () => {
    try {
        await db.sync();
        console.log("DB Sync");
    } catch (error) {
        console.error("Error sync: " + error);
    }
})();
