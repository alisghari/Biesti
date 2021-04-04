import express from 'express'
import { addItem, edit, find, findById,deletebyid } from '../controllers/itemControllers';

const router = express.Router()
 
router.post("/add", addItem);
router.get("/showitems", find);
router.get("/findItembyid/:id",findById);
router.patch("/update/:id",edit);
router.delete("/delete/:id", deletebyid);



  export default router

  