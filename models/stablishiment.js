import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Model Stablishiment 1
const stablishimentsSchema = new Schema({
  name: { type: String, required: [true, "El nombre es necesario"] },
  slug: String,
  description: String,
  category: String,
  country:String,
  state:String,
  city:String,
  street: String,
  mail:String,
  phone: String,
  date_created: { type: Date, default: Date.now },
  date_update: { type: Date, default: Date.now}
});


// Convertir a modelo
const Stablishiment = mongoose.model("Stablishiment", stablishimentsSchema);


// exportamos modelos
export default Stablishiment;






// const StablishimentStatus = mongoose.model("StablishimentStatus", stablishimentStatusSchema);
// const stablishimentCategory = mongoose.model("StablishimentCategory", stablishimentCategorySchema);
// const stablishimentProduct = mongoose.model("StablishimentProduct", stablishimentProductSchema);
// const StablishimentProductAddons = mongoose.model("StablishimentProductAddons", stablishimentProductAddonsSchema);
// const stablishimentOwner = mongoose.model("StablishimentOwner", stablishimentOwnerSchema);





// export default StablishimentStatus;
// export default stablishimentCategory;
// export default stablishimentProduct;
// export default StablishimentProductAddons;
// export default stablishimentOwner;
// 
// 
// 


// // Model Status 2
// const stablishimentStatusSchema = new Schema({
//   id_stablishiment: { type: String, required: [true, "El id es necesario"] },
//   date_created: { type: Date, default: Date.now },
//   status: Number
// });

// // Model Category 3
// const stablishimentCategorySchema = new Schema({
//   id_stablishiment: { type: String, required: [true, "El id es necesario"] },
//   date_created: { type: Date, default: Date.now },
//   status: Number
// });

// // Model Products 4
// const stablishimentProductSchema = new Schema({
//   id_stablishiment: { type: String, required: [true, "El id es necesario"] },
//   name: String,
//   type: Number,
//   quality: Number,
//   min: Number,
//   addons: Number,
//   time: String,
//   date_created: { type: Date, default: Date.now },
//   date_update: { type: Date, default: ''},
//   status: Number
// });

// // Model Products 5
// const stablishimentProductAddonsSchema = new Schema({
//   id_product: { type: String, required: [true, "El id es necesario"] },
//   name: String,
//   multiple: Boolean,
//   quality_med: Number,
//   quality: Number,
//   min: Number,
//   date_created: { type: Date, default: Date.now },
//   date_update: { type: Date, default: ''},
//   status: Number
// });

// // Model Pers contact 6
// const stablishimentOwnerSchema = new Schema({
//   id_stablishiment: { type: String, required: [true, "El id es necesario"] },
//   name: String, 
//   dni: Number,
//   date_created: { type: Date, default: Date.now },
//   date_update: { type: Date, default: ''},
//   status: Number
// });