
import { createNewItem, deleteItem, editItem, findItem, showAll, deleteItem } from "../services/itemServices";
export const addItem = function (req, res, next) {
    return createNewItem(req, res, next)
};
export const find = function (req, res, next) {
    return showAll(req, res, next)
};
export const findById = function (req, res, next) {
    return findItem(req, res, next)
};
export const edit = function (req, res, next) {
    return editItem(req, res, next)
}
export const deletebyid = function (req, res, next){
    return deleteItem(req, res, next)
}