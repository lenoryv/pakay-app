export interface Payment{
    id?: string,    
    price?: number,
}

export interface PaymentId extends Payment{id:string}