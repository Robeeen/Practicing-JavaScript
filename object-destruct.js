// most faster way to access /unpack variables from objects.
//useful in React.

const bio = {
    first: 'Bob',
    last: 'Marley',
    city: 'Dhaka',
    siblings: {
        sister: 'Bunny',
    },
};

//Normal way to access:

const first_name = bio.first;
const second_name = bio.last;
const sibling_name = bio.siblings.sister;

//but we can do it more effectively.

const {first, last, city} = bio
console.log(first, last, city);
