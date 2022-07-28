export interface Rooms{
    id?: string,
    description?: string,
    minibar?: boolean,
    numBeds?: number,
    photos?: string,
    price?: number,
    stateCleanliness?: boolean,
    type?: string
}

export interface RoomsId extends Rooms{id:string}