//Learning and practicing Filter and Find.
//We can fetch  array objects with condition, that mean we can manipulate the size of array objects.(unlike map)

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



