import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import User from '../models/user_model.js';
import Doctor from '../models/doctor_model.js';
import db from '../config/database.js';

AdminJS.registerAdapter(AdminJSSequelize);

const adminJs = new AdminJS({
  databases: [db],
  rootPath: '/admin-general',
  resources: [
    {
      resource: User,
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
    },
    {
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
    }
  ]
});

const adminGeneralRouter = AdminJSExpress.buildRouter(adminJs);

export {adminGeneralRouter};
