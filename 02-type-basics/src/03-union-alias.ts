let Unknown: unknown;

Unknown = "test";
const add2 = (n1: number) => {
  console.log(n1);
};

if (typeof Unknown === "number") {
  add2(Unknown);
}

type Combinable = number | string;
type Conversion = "as-num" | "as-str";

let combine = (
  input1: Combinable,
  input2: Combinable,
  convert: Conversion
): Combinable => {
  let result: Combinable;
  if (convert == "as-num") {
    result = +input1 + +input2;
    return result;
  }
  if (convert == "as-str") {
    result = input1 + "" + input2;
    return result;
  } else {
    return "not a valid convert";
  }
};

enum Title {
  "NEW",
  "EXPERIENCED",
  "VET",
}

type Item = [string, number, number];
type Hero = {
  name: string;
  health: number;
  stats: {
    strength: string;
    dexterity: string;
    intelligence: string;
  };
  title: Title;
  inventory: [
    // items: {
    //     name: string,
    //     quanity: number,
    //     price: number
    // }
    Item[]
  ];
};

// enum Role {
//     'ADMIN',
//     "READ_ONLY",
//     "AUTHOR",
// }

// const person: {
//     name: string,
//     age: number,
//     hobbies: string[];
//     role: Role;
// }= {
//     name: 'timmy',
//     age: 50,
//     hobbies: ['soccer', 'cooking'],
//     role: Role.ADMIN
// }

function errorThrow (message: string, code: number):never  {
    throw new Error(message + ' ' + code)
    //any code here is unreachable
}
//this is where you could use never, when the code never finishes (because it's an error)