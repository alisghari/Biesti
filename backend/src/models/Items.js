  
import mongoose from "mongoose"
// import Users from "./Users";


const itemSchema = new mongoose.Schema({
    title: { type:String, required: true },
    image:{ type:String, required: true },  
    description: {type:String} ,
    price: {type:Number, required: true } ,
   // user: {type:Users, required: true } ,
});



const Item = mongoose.model("itemSchema", itemSchema);
export default Item
