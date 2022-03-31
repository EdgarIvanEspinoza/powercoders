'use strict';

const persons = [
    {
        name: 'Carla',
        age: 27,
    },
    {
        name: 'Pablo',
        age: 43,
    },
    {
        name: 'Raquel',
        age: 19,
    },
    {
        name: 'Sonia',
        age: 57,
    },
];

const result = persons.filter((person) => person.age > 30);

console.log(result);
