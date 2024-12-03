const utils = require("../utils.js");

let input = utils.read_file("day3.in").split("\n");

let re = new RegExp(/mul\(\d{1,3},\d{1,3}\)/, "g");
let part1 = utils.multi_match(input, re)            // get all valid instructions
            .map(m => utils.get_numbers(m[0]))      // extract numbers from instructions
            .reduce((t,v) => t + (v[0] * v[1]), 0); // multiply numbers and add to running total
console.log("Part 1:", part1);

let re2 = new RegExp(/mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/, "g");
let matches = utils.multi_match(input, re2).map(m => m[0]);
let part2 = 0;
let enabled = true;
matches.forEach(match => {
    if (match.slice(0,3) == "mul" && enabled){
        let tmp = utils.get_numbers(match);
        part2 += tmp[0] * tmp[1];
    }
    else if (match == "do()") enabled = true;
    else if (match == "don't()") enabled = false;
});
console.log("Part 2:", part2);