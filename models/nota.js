import mongoose from "mongoose";
const Schema = mongoose.Schema;

const notaSchema = new Schema({
  nombre: { type: String, required: [true, "El nombre es necesario"] },
  descripcion: String,
  usuarioId: String,
  date: { type: Date, default: Date.now },
  activo: Boolean
});

// Convertir a modelo
const Nota = mongoose.model("Nota", notaSchema);

export default Nota;