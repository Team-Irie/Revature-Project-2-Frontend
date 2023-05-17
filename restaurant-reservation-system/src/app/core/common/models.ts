import { User } from "../models/User";

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