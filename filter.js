//Learning and practicing Filter and Find.
//We can fetch  array objects with condition, that mean we can manipulate the size of array objects.(unlike map)
//If no matches found Filter will give an array. But Find will give undefined. And if matchase result more than 1, Filter will show all the result but find will show only one and the first one.
const people = [
    { name: 'bob', age: 20, position: 'programmer'},
    { name: 'Shihan', age: 30, position: 'teacher'},
    { name: 'peril', age: 40, position: 'engineer'},
    { name: 'jen', age: 50, position: 'learner'},
];

const lowestAge = people.filter((item) => item.age <40 );
console.log(lowestAge);

const newPosition = people.filter((item) => item.position === 'teacher');
console.log(newPosition);

const highestAge = people.find((item) => item.age <40);
console.log(highestAge); //show only one item from people and the first one. but Filter shows all items.

const outPosition = people.find((item) => item.position === 'hello');
console.log(outPosition);//show undefined by find. But by filter it gives []





