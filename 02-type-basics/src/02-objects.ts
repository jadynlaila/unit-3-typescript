enum Role { 
    'ADMIN',
    "READ_ONLY",
    "AUTHOR",
}


const person: {
    name: string,
    age: number,
    hobbies: string[];
    role: Role;
}= {
    name: 'timmy',
    age: 50,
    hobbies: ['soccer', 'cooking'],
    role: Role.ADMIN
}

const product: {
    name: string,
    age: number,
    hobbies: string[];
    description: [number, string];
}= {
    name: 'timmy',
    age: 50,
    hobbies: ['soccer', 'cooking'],
    description: [1234, 'soccer ball']
}

product.description[0] = 2345;
// product.description[1] = 2345; breaks because you can't assign a number to what is supposed to be a string
/////////////////////////////////////////////////////////////
//pushing to tuples dkips the length and type checking
// product.description.push('testing')


console.log(person);
