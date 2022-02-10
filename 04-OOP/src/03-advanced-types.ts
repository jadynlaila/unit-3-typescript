//type casting

const button1 = document.querySelector('button');
const button2 = document.querySelector('#input') as HTMLInputElement;
const button3 = <HTMLInputElement>document.querySelector('#input');
const button4: HTMLInputElement = document.querySelector('#input')!

button2.value;

let names: string[];
let lames: Array<string>;

const promise: Promise<string> = new Promise ((resolve: any, reject: any) => {
    setTimeout(() => {
        resolve('10');
    }, 2000);

    reject();
});

promise.then((data) => {
    data.split(' ');
})


//generics

function merge <T extends object,U extends object>(objA: T, objB: U){
    return Object.assign(objA, objB);
}

const mergeObj = merge({name: 'himmy'}, {age: 30})

interface HasLength {
    length: number
}

function countAndDescribe<T extends HasLength>(value: T): [T, string]{
    let descText = 'got no value';
    if(value.length == 1){
        descText = 'got one value'
    }
    else if(value.length > 1){
        descText = `got ${value.length} values`
    }
    return [value, descText]
}
