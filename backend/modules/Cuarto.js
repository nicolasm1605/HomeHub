import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    personasmaximo: {
      type: Number,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    cantidadcuartos: [{ number: Number, fechaOcupado: {type: [Date]}}],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);