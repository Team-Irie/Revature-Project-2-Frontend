import { ILocation } from './ILocation';
import { ICoordinates } from './ICoordinates';
import { ICatagories } from './ICatagories';
export interface IYelp {
    id?:string;
    alias?:string;
    name?:string;
    image_url?:string;
    is_closed?:boolean;
    url?:string;
    review_count?:number;
    catagoeries: ICatagories;
    rating?:number;
    coordinates: ICoordinates;
    transactions: string[];
    price?:string;
    location: ILocation;
    phone?:string;
    display_phone?:string;
    distance?:number;
}