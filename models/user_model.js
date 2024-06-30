import { Sequelize } from "sequelize";
import db from "../config/database.js";
import bcrypt from "bcrypt";
const {DataTypes} = Sequelize;

const User = db.define('users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING
},{
    freezeTableName:true,
    hooks: {
        beforeCreate: async (user) => {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        },
        beforeUpdate: async (user) => {
            if (user.changed('password')) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        }
    }
})


export default User;

(async()=>{
    await db.sync();
})();