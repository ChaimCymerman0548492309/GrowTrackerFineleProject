import { Garden } from "../../gardens/interfaces/GardensInterFice";

export interface User {
    _id?: number;
    name?: string;
    isAdmin?: boolean;
    email?: string;
    password?: string;
    userType?: string;
    address?: {
        street?: string;
        city?: string;
    };
    paymentMethod?: {
        type?: string;
        creditCardNumber?: string;
        expirationDate?: string;
        cvv?: string;
    };
    bankAccount?: {
        accountNumber?: string;
        bankName?: string;
        accountHolderName?: string;
    };
    contactPhoneNumber?: string;
    gardens?: Garden[];
    users?: User[];
}
