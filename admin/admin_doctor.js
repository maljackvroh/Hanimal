import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import Doctor from '../models/doctor_model.js';
import db from '../config/database.js';

AdminJS.registerAdapter(AdminJSSequelize);

const adminJs = new AdminJS({
  databases: [db],
  rootPath: '/admin-doctor',
  resources: [{
    resource: Doctor,
    options: {
      properties: {
        password: {
          isVisible: false,
        },
        encryptedPassword: {
          isVisible: {
            list: false, edit: true, filter: false, show: true
          }
        }
      }
    }
  }]
});

const adminDoctorRouter = AdminJSExpress.buildRouter(adminJs);

export {adminDoctorRouter};
