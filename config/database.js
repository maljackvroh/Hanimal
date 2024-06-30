import { Sequelize } from "sequelize";

const db = new Sequelize('hanimal_db','root','',{
    host: 'localhost',
    dialect:'mysql'
});

export default db;

(async()=>{
    await db.sync();
})();