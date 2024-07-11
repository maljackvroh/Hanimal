import jwt from 'jsonwebtoken';

export const authenticateDoctor = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ msg: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, 'secretKey'); // Pastikan untuk mengganti 'secretKey' dengan kunci rahasia Anda
        req.doctorId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({ msg: "Unauthorized" });
    }
};
