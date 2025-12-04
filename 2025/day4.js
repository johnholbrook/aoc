const utils = require("../utils.js");
let input = utils.read_file("day4.in").split('\n').map(r => r.split(""));

function find_accessible_rolls(grid){
    let result = [];
    utils.forEach2d(grid, (val, i, j) => {
        let adj = utils.adj_squares_diag(input, i, j);
        let num_rolls = adj.filter(v => v.value == "@").length;
        if (val == "@" && num_rolls < 4){
            result.push({row:i, col:j});
        }
    });
    return result;
}

let part1 = find_accessible_rolls(input).length;
console.log("Part 1:", part1);

let part2 = 0;
while (true){
    let rolls = find_accessible_rolls(input);
    if (rolls.length == 0) break;
    rolls.forEach(c => {
        input[c.row][c.col] = ".";
    });
    part2 += rolls.length;
}
console.log("Part 2:", part2)