export interface IReservation {
    userId?: number;
    partySize: number;
    reservationTime: number;
    restaurantName: string;
    restaurantAddress?: string;
    restaurantPhoneNumber?: string;
}