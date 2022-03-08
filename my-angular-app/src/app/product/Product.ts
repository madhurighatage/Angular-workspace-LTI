export class Product{
    //    prodId,prodName,prodCost
        prodId:number=0;
        prodName:string="";
        prodCost:number=0;
    
    constructor(prodId:number,prodName:string,prodCost:number){
        this.prodId=prodId;
        this.prodName=prodName;
        this.prodCost=prodCost;
    }
    
    }