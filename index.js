import express from "express";
import path from "path";
import cors from "cors";
import UserRoute from "./routes/user_routes.js";
import DoctorRoute from "./routes/doctor_routes.js";
import AuthRoute from "./routes/auth_routes.js";
import invoiceRoute from "./routes/invoice_routes.js";
// import adminDoctorRouter from "./admin/admin_doctor.js";
// import adminGeneralRouter from "./admin/admin_general.js";
import session  from "express-session";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

app.use(session({
    secret:'this is my key',
    saveUninitialized: false, 
    resave: false,
    cookie: {
        secure: false,
        maxAge: 30 * 60 * 1000
    }
}));

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
// app.use(AdminRoute);
app.use(AuthRoute);
app.use(invoiceRoute);


// app.use(adminDoctorRouter);
// app.use(adminGeneralRouter);

app.get('/aboutus', (req, res) => {
    res.render('aboutus'); 
});

app.get('/add_doctor', (req, res) => {
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
    res.render('dashboard_admin');
});

app.get('/dashboard_doctor', (req, res) => {
    res.render('dashboard_doctor');
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

app.get('/createPayment', (req, res) => {
    res.render('resi')
});
  

app.get('/home', (req, res) => {
    res.render('home');
});


app.get('/', (req, res) => {
    res.render('homepage');
});

app.listen(PORT, ()=> console.log(`server running on port ${PORT}...`));