import jwt from 'jsonwebtoken';

const payload = {
    id: "1234567890",
    isAdmin: true,
};

const secret = "tu_clave_secreta"; // Asegúrate de que coincida con process.env.JWT
const token = jwt.sign(payload, secret, { expiresIn: '1h' });

console.log("Token JWT estático:", token);