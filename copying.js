//Spread operator.
//splits into a single items and copy them.

// splits into a singel items.
const books = 'commercials';
const split_books = [...books];
console.log(split_books);

//with arrays - copy items of three array into one 

const boys = ['ben', 'ray', 'jan'];
const girls = ['alice', 'angela', 'ryna'];

const boysGirls = [...boys, ...girls];
console.log(boysGirls);





//with objects.
const objects = {name: 'bob', age: 23};
const new_objects = {...objects};
//if I want to change the object and add new object.
const change_objects = {...objects, name: 'helen', gender: 'female'};
console.log(new_objects);
console.log(change_objects);
