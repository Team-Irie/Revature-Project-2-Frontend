export interface IReservation {
    userId?: number;
    partySize: number;
    requestedDate: number;
    storeName: string;
    storeAddress?: string;
    storePhone?: string;
}