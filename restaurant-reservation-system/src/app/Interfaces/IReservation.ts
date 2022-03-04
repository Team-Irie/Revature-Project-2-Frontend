export interface IReservation {
    reservationId?: number;
    customer?: number;
    partySize: number;
    reservationTime: number;
    restaurantName: string;
    restaurantAddress?: string;
    restaurantPhone?: string;
    reservationStatus: string;
}