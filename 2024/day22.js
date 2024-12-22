const utils = require("../utils.js");

let input = utils.get_numbers(utils.read_file("day22.in"));

let mix = (a, b) => a ^ b;
let prune = a => a%16777216;

function iterate(n){
    let tmp = prune(mix(n, n*64))
    tmp = prune(mix(tmp, tmp/32))
    tmp = prune(mix(tmp, tmp*2048))
    return tmp<0 ? 16777216+tmp : tmp;
}

let this_it = input;
utils.range(0, 2000).forEach(i => {
    this_it = this_it.map(iterate);
});
console.log("Part 1:", utils.sum_list(this_it));