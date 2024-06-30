import express from "express";
import path from "path";
import cors from "cors";
import UserRoute from "./routes/user_routes.js";
import DoctorRoute from "./routes/doctor_routes.js";
import AuthRoute from "./routes/auth_routes.js";

import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// middleware untuk parsing  JSON dan URL-encoded from data
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

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


app.get('/users/add', (req, res) => {
    res.render('add_user'); // Render halaman 'add_user.ejs'
});

app.get('/doctor/add', (req, res) => {
    res.render('add_doctor'); // Render halaman 'add_user.ejs'
});


app.get('/login_portal', (req, res) => {
    res.render('login_portal');
});

app.get('/login_doctor', (req, res) => {
    res.render('login_doctor');
});

app.get('/login_user', (req, res) => {
    res.render('login_user');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/', (req, res) => {
    res.render('homepage');
});

app.listen(PORT, ()=> console.log(`server running on port ${PORT}...`));