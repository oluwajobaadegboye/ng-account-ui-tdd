export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

export interface Account {
    id: number;
    name: string;
    email: string;
    phone: string;
    industry: string;
    website: string;
    description: string;
    createdBy: string;
    createdAt: Date;
    isActive: boolean;
}

export interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    account: number;
    status: string;
    source: string;
    email: string;
    phone;
    address;
    description;
    createdBy: string;
    createdAt: Date;
    isActive: boolean;
}

export interface Activity {
    id: number;
    description: string;
    createdAt: string;
    contact: number;
    status: number;
}

export interface Contactsource {
    id: number;
    source: string;

}

export interface Contactstatuse {
    id: number;
    status: string;
}

export interface Activitystatuse {
    id: number;
    status: string;
}
