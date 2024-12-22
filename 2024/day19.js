const utils = require("../utils.js");

let [towels, designs] = utils.read_file("day19.in").split("\n\n");
towels = towels.split(", ");
designs = designs.split("\n");

let exp_str = towels.reduce((t,v,i) => t + (i>0 ? "|" : "") + v, "")
let exp = new RegExp(`^(${exp_str})+$`);
let matches = designs.map(d => d.match(exp)!=null);
console.log("Part 1:", utils.sum_list(matches));