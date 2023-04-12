export interface Restaurant {
    id: string,
    name: string,
    image_url: string,
    address1: string,
    city: string,
    state: string,
    zip_code: string,
    display_phone: string;
}
    
export interface RestaurantInformation {
    businesses: Restaurant[];
}