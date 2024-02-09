import mongoose from "mongoose";

export enum AccountType {
    SAVINGS = 'savings',
    CARD = 'card',
    CASH = 'cash'
}

export default interface accounts {
    [x: string]: any;
    accountType: AccountType;
    transactions: mongoose.Types.ObjectId[];
    users: mongoose.Types.ObjectId[];
    createdAt: Date;
    initialAmount?: number;
}
