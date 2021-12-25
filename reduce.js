//Reduce iterate the array, use call back function.
//Reduce an array to a single value - that can be number, array, object.
//Reduce needs an initual value like 0.
//Reduce use two parameters in call back functions.
//Parameter one: accumulator, paramenter two: current value. (acc, cur)

const people = [
    { name: 'bob', age: 20, salary: 100},
    { name: 'Shihan', age: 30, salary: 300},
    { name: 'peril', age: 40, salary: 400},
    { name: 'jen', age: 50, salary: 35},
];

const totalSalary = people.reduce((total, item) => {
    //sum total salary, should show 835.
    total += item.salary;
    return total;
},0);

console.log(totalSalary);