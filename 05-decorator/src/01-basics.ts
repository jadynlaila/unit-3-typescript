

//! this breaks, too few arguments
// function Logger() {
//     console.log('logging');    
// }

//!if a decorator is being used on a class, there MUST be one argument
//!that argument is the constructor
// function Logger(constructor: Function) {
//     console.log(constructor);
// }

//!you can change any required param to an underscore to skip it in compiling
// function Logger(_: Function){
//     console.log('this works');
    
// }

//!decorator factory
function Logger(toLog: string) {
    console.log('logger factory');
    return function (constructor: Function) {
        console.log(toLog);
        console.log(constructor)
    }
}


//!this creates a decorator that will add the template string to whatever hook we pass through as long as the id exists
function WithTemplate(template: string, hookID: string) {
    console.log('TEMPLATE FACTORY')
    
    return function(_:Function){ 
        const hookEl = document.getElementById(hookID);
        const p = new Person();
        if(hookEl){
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}


@Logger('CREATING PERSON DECORATOR')
@WithTemplate('<h1>Person Class Placeholder</h1>', 'app')
class Person {
    name = "max"
    constructor() {
        console.log('created person object');
        
    }
}

const max = new Person();
console.log(max);

