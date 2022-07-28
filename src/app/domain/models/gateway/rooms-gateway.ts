import { Observable } from "rxjs";
import { Rooms } from "../rooms";

export abstract class RoomsGateway {
    abstract getEnableRooms():Observable<Rooms[]>;
    abstract getAllRooms():Observable<Rooms[]>;
    abstract getRoomById(idRoom:string):Observable<Rooms>;
    // abstract getPhotosRooms():Observable<Rooms[]>;
}