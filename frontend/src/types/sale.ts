import { Seller } from "./seller"

export type Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: String;
    seller: Seller;
    }

export type SalePage = {
    content?: Sale[];
    last: boolean;
    totalElements: number;
    totalPage: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;

}


export type SaleSum = {
    sellerName: String;
    sum: number;
}

export type SaleSucess = {
    sellerName: String;
    visited: number;
    deals: number;
}
