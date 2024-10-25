import mongoose from "mongoose";
const {Schema} = mongoose;

const HotelSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    fotos: {
        type: [String]
    },
    descripcion: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    cuartos: {
        type: [String]
    },
    MasBarato: {
        type: Number,
        required: true
    },
    recomendados: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model("Hotel", HotelSchema);