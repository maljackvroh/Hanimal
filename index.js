import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import UserRoute from "./routes/user_routes.js";
import DoctorRoute from "./routes/doctor_routes.js";
import AuthRoute from "./routes/auth_routes.js";
import SequelizeStore from 'connect-session-sequelize';
import session  from "express-session";
import { fileURLToPath } from "url";
import db from './config/database.js';
import Doctor from "./models/doctor_model.js";

const app = express();
const PORT = 3000;

const SequelizeStoreInstance = SequelizeStore(session.Store);
const store = new SequelizeStoreInstance({ db });

app.use(session({
    secret:'this is my key',
    store: store,
    saveUninitialized: false, 
    resave: false,
    cookie: {
        secure: false,
        maxAge: 360 * 60 * 1000
    }
}));

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



// mengatur direktori public 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// Mengatur view engine EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Atur route
app.use(DoctorRoute);
app.use(UserRoute);
app.use(AuthRoute);


app.get('/aboutus', (req, res) => {
    res.render('aboutus'); 
});

app.get('/signup', (req, res) => {
    res.render('add_doctors');
});

app.get('/login_portal', (req, res) => {
    res.render('login_portal');
});

app.get('/login_doctor', (req, res) => {
    res.render('login_doctor');
});

app.get('/admin_login', (req, res) => {
    res.render('admin_login');
});

app.get('/login_user', (req, res) => {
    res.render('login_user');
});

app.get('/cara_bayar', (req, res) => {
    res.render('cara_bayar');
});

app.get('/dashboard_admin', (req, res) => {
    const admin = req.session.admin;
    res.render('dashboard_admin');
});

app.get('/dashboard_doctor', (req, res) => {
    const doctor = req.session.doctor;
    if(!doctor){
        return res.redirect('login_doctor');
    }
    res.render('dashboard_doctor', {doctor});
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

app.get('/pelayanan', (req, res) => {
    res.render('pelayanan');
});

app.get('/pembayaran', (req, res) => {
    res.render('pembayaran');
});

app.get('/pesan', (req, res) => {
    res.render('pesan');
});

app.get('/profile', (req, res) => {
    res.render('profile');
});

app.get('/upload', (req, res) => {
    res.render('upload');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/resi', (req, res) => {
    const data = {
        name: req.query.name,
        animalType: req.query.animal_type,
        address: req.query.address,
        age: req.query.age,
        gender: req.query.gender,
        phone: req.query.phone,
        medicineCost: req.query.medicine_cost,
        adminCost: req.query.admin_cost,
        serviceCost: req.query.service_cost,
        totalAmount: parseInt(req.query.medicine_cost) + parseInt(req.query.admin_cost) + parseInt(req.query.service_cost)
    };
    res.render('resi', data);
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/', (req, res) => {
    res.render('homepage');
});

app.listen(PORT, ()=> console.log(`server running on port ${PORT}...`));