import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RoomsGateway } from "../models/gateway/rooms-gateway";
import { Rooms } from "../models/rooms";

@Injectable({
    providedIn: 'root'
})

export class GetRoomstUseCases{
    constructor(private _roomsGateway: RoomsGateway){}
    
    getAllRooms(): Observable <Rooms[]>{
        return this._roomsGateway.getAllRooms();
    }
    getEnableRooms(): Observable <Rooms[]>{
        return this._roomsGateway.getEnableRooms();
    }
    // getPhotosRooms():Observable <Rooms[]>{
    //     return this._roomsGateway.getPhotosRooms();
    // }
}