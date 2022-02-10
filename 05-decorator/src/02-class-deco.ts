
//! property deco - this takes 2 arguments 
//* target which is the constructor 
//* name of the property
function PropLog(target: any, propertyName: string | Symbol){
    console.log('PROPERTY DECO');
    console.log(target, propertyName);
}


//!accessor deco - takes 3 arguments (setter and getter)
//* target 
//* name
//* description of the accessor method
function accLog(target: any, name: string, description:PropertyDescriptor){
    console.log('ACCESS DECO');
    console.log(target, name, description);
    
}


//!method deco - takes 3 arguments (setter and getter)
//* target 
//* name
//* description of the accessor method
function MetLog(target: any, name: string, description:PropertyDescriptor){
    console.log('ACCESS DECO');
    console.log(target, name, description);
    
}


//!parameter deco - takes 3 arguments (setter and getter)
//* target 
//* name
//* description of the accessor method
function ParLog(target: any, name: string, position:number){
    console.log('PARAMETER DECO');
    console.log(target, name, position);
}

class Product {
    title: string;
    @PropLog
    private _price: number;

    @accLog
    set price(value: number){
        if(value > 0 ) {
            this._price = value;
        }
        else{
            throw new Error('invalid price')
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }
    @MetLog
    getPriceWithTax(@ParLog tax: number = 0.12){
        return this._price * (1 + tax);
    }
}