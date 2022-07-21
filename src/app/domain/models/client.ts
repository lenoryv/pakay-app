export interface Client{
    uid?: string,
    ci?: string,
    name?: string,
    lastname?: string,
    phone?: string,
    email?: string,
    country?: string
}

export interface ClientId extends Client{id:string}