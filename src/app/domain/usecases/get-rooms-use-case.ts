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

    getRoomById(id: string):Observable <Rooms>{
        return this._roomsGateway.getRoomById(id);
    }

    getEnableRooms(): Observable <Rooms[]>{
        return this._roomsGateway.getEnableRooms();
    }
    getRoomById(idRoom:string): Observable<Rooms>{
        return this._roomsGateway.getRoomById(idRoom);
    }
    // getPhotosRooms():Observable <Rooms[]>{
    //     return this._roomsGateway.getPhotosRooms();
    // }
}