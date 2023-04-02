export class User {
    name:string;
    email:string;
    menu:string;
    price:number;
   

    constructor (name:string, email:string,price:number, menu:string) {
        this.name=name;
        this.email=email;
        this.menu = menu;
        this.price = price;
        
    }
}