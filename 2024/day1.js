const utils = require("../utils.js");

let input = utils.read_file("day1.in");

let list1 = [];
let list2 = [];

input.split('\n').forEach(line => {
    let nums = utils.get_numbers(line);
    list1.push(nums[0]);
    list2.push(nums[1]);
});

list1.sort((a,b) => a-b);
list2.sort((a,b) => a-b);

let part1 = list1.reduce((t, v, i) => t + Math.abs(v - list2[i]), 0);
console.log("Part 1:", part1);

let part2 = list1.reduce((t, v) => t + (v * utils.count_occurrences_in_array(list2, v)), 0)
console.log("Part 2:", part2);

// let differences = list1.map((v, i) => Math.abs(v - list2[i]));
// console.log("Part 1:", utils.sum_list(differences));

// let similarity_scores = list1.map(v => v * utils.count_occurrences_in_array(list2, v))
// console.log("Part 2:", utils.sum_list(similarity_scores));