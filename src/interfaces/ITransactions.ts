import mongoose, { ObjectId } from "mongoose"
import { categoryType } from "./ICategory";
export default interface transaction {
    _id: ObjectId;
    amount: number
    type: categoryType
    account: mongoose.Types.ObjectId
    category: mongoose.Types.ObjectId
    notes: string
    date: Date
    user: mongoose.Types.ObjectId
}