const utils = require("../utils.js");

let input = utils.read_file("day5.in").split("\n");
let divider = input.indexOf('');
let rules = input.slice(0, divider).map(utils.get_numbers);
let updates = input.slice(divider+1).map(utils.get_numbers);

function isValidUpdate(u){
    for (let i=0; i<rules.length; i++){
        let [a,b] = [u.indexOf(rules[i][0]), u.indexOf(rules[i][1])];
        if (!(a > -1 && b > -1)) continue; // rule doesn't apply
        if (a > b) return false; // rule is violated
    }
    return true;
}

let valid_updates = updates.filter(isValidUpdate);
let part1 = utils.sum_list(valid_updates.map(u => u[Math.floor(u.length/2)]))
console.log("Part 1:", part1);

let invalid_updates = updates.filter(u => !isValidUpdate(u));
let corrected_updates = invalid_updates.map(u => 
    u.sort((a,b) => {
        for (let i=0; i<rules.length; i++){
            let rule = rules[i];
            if (a == rule[0] && b == rule[1]) return -1;
            else if (a == rule[1] && b == rule[0]) return 1;
        }
    })
);

let part2 = utils.sum_list(corrected_updates.map(u => u[Math.floor(u.length/2)]))
console.log("Part 2:", part2);