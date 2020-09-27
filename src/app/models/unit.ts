export interface Dues {
    month: string;
    isPaid: boolean;
}

export interface Unit {
    id: string;
    apartmentNumber: string;
    floorNumber: number;
    name: string;
    paidForMonth: boolean;
    inhabitantsCount: number;
    hasPets: boolean;
    history: Dues[];
    toPay: number;
    phoneNumber: string;
    email: string;
}