const utils = require("../utils.js");
let input = utils.read_file("day6.in").split('\n');
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

let part2_nums = utils.transpose(input.map(r => r.split(""))) //transpose grid
                      .map(r => r.slice(0, r.length-1)) //get rid of operations
                      .map(r => r.reduce((t, v) => t.concat(v), "")) //reduce each line to a string
                      .map(utils.get_numbers) //convert to numbers
                      
// separate the transposed numbers into groups to be either added or multiplied                      
let blank_rows = [-1]
part2_nums.forEach((r, i) => {
    if (r.length == 0) blank_rows.push(i)  
});
blank_rows.push(part2_nums.length)
let groups = []
for (let i=1; i<blank_rows.length; i++){
    groups.push(part2_nums.slice(blank_rows[i-1]+1, blank_rows[i]).map(t => t[0]))
}

// do the operations and sum the results
let part2 = utils.sum_list(operations.map((op, i) => {
    if (op == "+") return utils.sum_list(groups[i])
    else return groups[i].reduce((t, v) => t*v, 1)
}));
console.log("Part 2:", part2)