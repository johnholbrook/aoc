const utils = require("../utils.js");
let input = utils.read_file("day6_ex.in").split('\n');
let [rows, operations] = [
    input.slice(0, input.length-1).map(utils.get_numbers), 
    input[input.length-1].split("").filter(c => c != ' ')
];

let part1 = utils.sum_list(rows[0].map((_, i) => {
    let col = rows.map(r => r[i]);
    let op = operations[i];
    if (op == "+") return utils.sum_list(col);
    else return col.reduce((t, v) => t*v, 1);
}));
console.log("Part 1:", part1);

let t = utils.transpose(input.map(r => r.split("")));
console.log(t);