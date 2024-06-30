import express from "express";
import path from "path";
import cors from "cors";
import UserRoute from "./routes/user_routes.js";
import DoctorRoute from "./routes/doctor_routes.js";
import AuthRoute from "./routes/auth_routes.js";
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
app.use(AdminRoute);
app.use(AuthRoute);


app.get('/users/add', (req, res) => {
    res.render('add_user'); 
});

app.get('/doctor/add', (req, res) => {
    res.render('add_doctor');
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

app.get('/home', (req, res) => {
    res.render('home');
});

app.use('/admin',)

app.get('/', (req, res) => {
    // if (req.session.user){
    //     res.render('home');
    // }else {
        res.render('homepage');
    // }
});

app.listen(PORT, ()=> console.log(`server running on port ${PORT}...`));