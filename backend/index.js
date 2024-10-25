import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import cuartosRoute from "./routes/cuartos.js";
import hotelesRoute from "./routes/hoteles.js";
import usuariosRoute from "./routes/usuarios.js";
dotenv.config();
console.log("MONGODB_URL:", process.env.MONGODB_URL); // Verificar el valor de MONGODB_URL

const app = express();

const conectado = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("conectado a MongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB desconectado")
})

//middlewares
app.use(express.json())
app.use("/auth", authRoute)
app.use("/cuartos", cuartosRoute)
app.use("/hoteles", hotelesRoute)
app.use("/usuarios", usuariosRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.errorMessage || "Algo ocurrio mal"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        messagge: errorMessage,
        stack: err.stack
    })
})
app.listen(3001, () => {
  conectado();
  console.log("conectado al backend");
});
