const cart = [
    { title: 'bob', price: 200.35, amount: 2},
    { title: 'Shihan', price: 300.55, amount: 3},
    { title: 'peril', price: 400.00, amount: 5},
    { title: 'jen', price: 500.15, amount: 1},
];

let total = cart.reduce((total, cartItems) => {
   // console.log(cartItems);
    //destruct array objects.
    const {amount, price} = cartItems;
    //count total cart items
    total.totalItems += amount;
    //count total price
    total.cartTotal += price * amount;

    return total
},{
    totalItems: 0,
    cartTotal: 0
});

total.cartTotal = parseFloat(total.cartTotal.toFixed(2));

console.log(total.cartTotal, total.totalItems);

//
const example = (a, b) => (c, d) => (e, f) =>(a * c * e + b * d * f)
console.log(example(1,2)(2,3)(3,4))