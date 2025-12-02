const utils = require("../utils.js");
let input = utils.read_file("day2.in").split(',').map(l => l.split("-").map(Number))

let invalid1 = input.map(r => {
    return utils.range(r[0], r[1]+1).filter(v => {
        let s = String(v);
        return s.substring(0, s.length/2) == s.substring(s.length/2);
    });
});
let part1 = utils.sum_list(invalid1.map(utils.sum_list));
console.log("Part 1:", part1);

let invalid2 = input.map(r => {
    return utils.range(r[0], r[1]+1).filter(v => {
        let s = String(v);
        for (let sl=1; sl<=s.length/2; sl++){
            if (s.substring(0, sl).repeat(s.length/sl) == s) return true;
        }
    });
});
let part2 = utils.sum_list(invalid2.map(utils.sum_list));
console.log("Part 2:", part2);