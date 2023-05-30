import { Yelp } from "../models/Yelp";
import { User } from "../models/User";
import { Reservation } from "../models/Reservation";

export function createEmptyUser() {
  let user:User = {
      userId: 0,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userType: "",
      phoneNumber: ""
  }
  return user;
}

export function createEmptyYelp() {
  let yelp:Yelp = {
      name:"",
      image_url: "",
      catagoeries:{},
      coordinates:{},
      transactions:[],
      price: "",
      location: {
        display_address: []
      },
      display_phone: ""
    }
    return yelp
}

export function createEmptyReservation() {
  let reservation:Reservation = {
    reservationId: 0,
    customer: 0,
    partySize: 0,
    reservationTime: 0,
    restaurantName: "",
    restaurantAddress: "",
    restaurantPhoneNumber: "",
    reservationStatus: ""
  }
  return reservation
}