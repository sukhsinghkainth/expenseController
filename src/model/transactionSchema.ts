import mongoose, { Document, Model, Schema } from 'mongoose';
import ITransactions  from "../interfaces/ITransactions";
import { categoryType } from '../interfaces/ICategory';


const TransactionSchema = new Schema<ITransactions>({
    amount: {
        type: Number,
        required: true,
    },
    type : {
        type: String,
        enum : categoryType
        
    }, 
    notes: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    category :
    {
        type : Schema.Types.ObjectId,
        ref : "Category",
        // required : true,
    },
    account :{
            type : Schema.Types.ObjectId,
            ref : "Account",
            // required : true,
    },
    user :
    {
        type : Schema.Types.ObjectId,
        ref : "User",
        // required : true,
    },
    
});

const transactionModel : Model<ITransactions> = mongoose.model<ITransactions>('Transaction', TransactionSchema);

export default transactionModel;
