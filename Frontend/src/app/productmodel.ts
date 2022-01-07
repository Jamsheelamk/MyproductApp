export class IProduct{
    constructor(
     public productId: number,
     public productName: string,
     public productCode: string,
     public releaseDate: string,
     public description: string,
     public price:number,
     public quantity: number,
     public imageUrl: string){}
 }
 