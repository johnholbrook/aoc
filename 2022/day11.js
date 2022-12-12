// real input
let monkeys = [
    {
        id: 0,
        items: [76, 88, 96, 97, 58, 61, 67],
        operation: old => old*19,
        divisor: 3,
        d_true: 2,
        d_false: 3
    },
    {
        id: 1,
        items: [93, 71, 79, 83, 69, 70, 94, 98],
        operation: old => old+8,
        divisor: 11,
        d_true: 5,
        d_false: 6
    },
    {
        id: 2,
        items: [50, 74, 67, 92, 61, 76],
        operation: old => old*13,
        divisor: 19,
        d_true: 3,
        d_false: 1
    },
    {
        id: 3,
        items: [76, 92],
        operation: old => old+6,
        divisor: 5,
        d_true: 1,
        d_false: 6
    },
    {
        id: 4,
        items: [74, 94, 55, 87, 62],
        operation: old => old+5,
        divisor: 2,
        d_true: 2,
        d_false: 0
    },
    {
        id: 5,
        items: [59, 62, 53, 62],
        operation: old => old*old,
        divisor: 7,
        d_true: 4,
        d_false: 7
    },
    {
        id: 6,
        items: [62],
        operation: old => old+2,
        divisor: 17,
        d_true: 5,
        d_false: 7
    },
    {
        id: 7,
        items: [85, 54, 53],
        operation: old => old+3,
        divisor: 13,
        d_true: 4,
        d_false: 0
    },
];

// sample input
// let monkeys = [
//     {
//         id: 0,
//         items: [79, 98],
//         operation: old => old*19,
//         test: v => v%23 ==0,
//         divisor: 23,
//         d_true: 2,
//         d_false: 3
//     },
//     {
//         id: 1,
//         items: [54, 65, 75, 74],
//         operation: old => old+6,
//         test: v => v%19 ==0,
//         divisor: 19,
//         d_true: 2,
//         d_false: 0
//     },
//     {
//         id: 2,
//         items: [79, 60, 97],
//         operation: old => old*old,
//         test: v => v%13 ==0,
//         divisor: 13,
//         d_true: 1,
//         d_false: 3
//     },
//     {
//         id: 3,
//         items: [74],
//         operation: old => old+3,
//         test: v => v%17 ==0,
//         divisor: 17,
//         d_true: 0,
//         d_false: 1
//     },
// ]

// aaaaaargh
let cycle_length = monkeys.reduce((t, m) => t *= m.divisor, 1);

// this is where I got lazy and didn't want to totally refactor the program, so just run it twice depending on the part
// let part = 1;
let part = 2;

function update_score(old_score, op){
    if (part == 1) return Math.floor(op(old_score)/3);
    else return op(old_score) % cycle_length;
}

// pass a given item to the given target (add to end of target queue)
function throw_item(target, item){
    if (target < 0 || target >= monkeys.length) console.error("Invalid target:", target);
    else monkeys[target].items.push(item);
}

// initialize array to keep track of how many times each monkey has inspected something
let counts = [];
monkeys.forEach(m => counts.push(0));

// simulate one round of keepaway
function round(){
    monkeys.forEach(m => {
        m.items.forEach(i => {
            counts[m.id] += 1;
            let new_score = update_score(i, m.operation);
            throw_item(new_score%m.divisor==0? m.d_true : m.d_false, new_score);
        });
        m.items = [];
    });
}

// part 1
[...Array(part==1 ? 20 : 10000).keys()].forEach(i => {
    round();
});

let sorted = counts.sort((a,b) => a-b).reverse();
// console.log(sorted);
console.log(`Part ${part}:`, sorted[0]*sorted[1]);