export interface IReservation {
    reservationId?: number;
    customer?: number;
    partySize: number;
    reservationTime: number;
    restaurantName: string;
    restaurantAddress?: string;
<<<<<<< HEAD
    restaurantPhoneNumber?: string;
=======
    restaurantPhone?: string;
    reservationStatus: string;
>>>>>>> 381d2d6ebc16762056df05f563214015c449e15e
}