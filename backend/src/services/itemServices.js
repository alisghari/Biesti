
import express from "express"

import Item from '../models/Items'


export const createNewItem = (req, res, next) => {
    const newItem = new Item(req.body);
    newItem
        .save()
        .then((Item) => res.json(Item))
        .catch((err) => res.json(err))
}
export const showAll = function (req, res) {
    Item.find()
        .then(Items => res.json(Items))
        .catch(err => res.json(err));
}
 export const findItem = function (req, res) {
     Item.findById(req.params.id)
         .then(Items => res.json(Items))
         .catch(err => res.json(err));
 }
 export const editItem =  async (req, res) => {
     const { id } = req.params;
     var updatedItem = req.body;
     console.log(updatedItem)
     const item = await Item.findOne({ _id: id });
     console.log(item)
     await item.updateOne({updatedItem });
     await item.save();
     res.send(item);
  };
export const deleteItem = function (req, res, next) {
    const { id } = req.params;
  
    Item.findByIdAndRemove({ _id: id }, function (err, data) {
       if (err) return next(err);
    res.json(data);
    });
  };