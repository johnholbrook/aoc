const utils = require("../utils.js");

let input = utils.read_file("day7.in").split("\n").map(utils.get_numbers);

function evaluate_equation(e, part2 = false){
    if (e.length == 3){
        if (e[1] * e[2] == e[0]) return true;
        else if (e[1] + e[2] == e[0]) return true;
        else if (part2 && `${e[1]}${e[2]}` == `${e[0]}`) return true
        else return false
    }
    else {
        if (part2){
            return (
                evaluate_equation([e[0], e[1]*e[2], ...e.slice(3)], true) || 
                evaluate_equation([e[0], e[1]+e[2], ...e.slice(3)], true) ||
                evaluate_equation([e[0], Number(`${e[1]}${e[2]}`), ...e.slice(3)], true)
            );  
        }
        else{
            return (
                evaluate_equation([e[0], e[1]*e[2], ...e.slice(3)]) || 
                evaluate_equation([e[0], e[1]+e[2], ...e.slice(3)]) 
            );    
        }
    }
};

let part1 = utils.sum_list(input.map(e => evaluate_equation(e, false) ? e[0] : 0));
console.log("Part 1:", part1);

let part2 = utils.sum_list(input.map(e => evaluate_equation(e, true) ? e[0] : 0));
console.log("Part 2:", part2);