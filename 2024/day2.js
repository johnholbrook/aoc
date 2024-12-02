const utils = require("../utils.js");

let input = utils.read_file("day2.in").split('\n').map(utils.get_numbers);

function isSafe(line){
    let increasing = (line[1] - line[0]) > 0;
    for (let i=0; i<line.length-1; i++){
        let diff = increasing ? line[i+1] - line[i] : line[i] - line[i+1];
        if (diff < 1 || diff > 3) return false;
    }
    return true;
}

let safety = input.map(isSafe);
let part1 = utils.sum_list(safety)
console.log("Part 1:", part1);

let part2 = utils.sum_list(input.map((v, i) => {
    if (safety[i]) return true;
    else{
        for (let j=0; j<v.length; j++){
            if (isSafe(v.slice(0, j).concat(v.slice(j+1)))) return true;
        }
        return false;
    }
}));
console.log("Part 2:", part2)