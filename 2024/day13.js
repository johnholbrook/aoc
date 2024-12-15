const utils = require("../utils.js");

let machines = utils.read_file("day13.in").split("\n\n").map(utils.get_numbers).map(m => {
    return{ax: m[0], ay: m[1], bx: m[2], by: m[3], px: m[4], py: m[5]}
});

function evalMachine(m){
    let b = ((m.ax * m.py) - (m.ay * m.px)) / ((m.ax * m.by) - (m.ay * m.bx));
    let a = (m.px - (m.bx * b)) / m.ax;
    if (Number.isInteger(a) && Number.isInteger(b)) return 3*a + b;
    else return 0; // if a machine isn't possible to solve, we'll spend 0 coins there
}

let part1 = utils.sum_list(machines.map(evalMachine));
console.log("Part 1:", part1);

machines2 = machines.map(m => {
    m.px += 10000000000000;
    m.py += 10000000000000;
    return m;
});
let part2 = utils.sum_list(machines2.map(evalMachine));
console.log("Part 2:", part2);