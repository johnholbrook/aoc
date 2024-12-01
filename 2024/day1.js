const utils = require("../utils.js");

let input = utils.read_file("day1.in").split('\n').map(utils.get_numbers);

let list1 = input.map(r => r[0]).sort((a,b) => a-b);
let list2 = input.map(r => r[1]).sort((a,b) => a-b);

let part1 = list1.reduce((t, v, i) => t + Math.abs(v - list2[i]), 0);
console.log("Part 1:", part1);

let part2 = list1.reduce((t, v) => t + (v * utils.count_occurrences_in_array(list2, v)), 0)
console.log("Part 2:", part2);