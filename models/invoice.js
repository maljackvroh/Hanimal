import { Sequelize } from "sequelize";
import db from "../config/database.js";
import { v4 as uuidv4 } from 'uuid';

const { DataTypes } = Sequelize;

const Payment = db.define('payments', {
    payment_id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    umur: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    jenis_hewan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jenis_kelamin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    alamat: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomortelp: {
        type: DataTypes.STRING,
        allowNull: false
    },
    biaya_obat: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    biaya_administrasi: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    biaya_pelayanan: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    biaya_perjalanan: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total_tagihan: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    verification_status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending'
    },
    payment_method: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Payment;
