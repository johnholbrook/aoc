const utils = require("../utils.js");
let input = utils.read_file("day7.in").split('\n').map(l => l.split(""));
let input2 = utils.copy(input)

let part1 = 0;
utils.range(0, input.length).forEach(i => {
    if (i == input.length-1) return;
    input[i].forEach((cell, j) => {
        if (cell == "S") input[i+1][j] = "|"
        else if (cell == "|"){
            let below = input[i+1][j];
            if (below == ".") input[i+1][j] = "|"
            else if (below == "^"){
                part1 += 1
                input[i+1][j-1] = "|";
                input[i+1][j+1] = "|";
            }
        }
    });
});
console.log("Part 1:", part1);
// input.forEach(row => console.log(row.reduce((t,v) => t.concat(v), "")));

function pathfind(grid, i, j, total_paths){
    if (i == grid.length-1) return total_paths;
    let below = grid[i+1][j];
    if (below == ".") return pathfind(grid, i+1, j, total_paths)
    else if (below == "^"){
        return pathfind(grid, i+1, j-1, total_paths) + pathfind(grid, i+1, j+1, total_paths);
    }
}
let part2 = pathfind(input2, 0, input2[0].findIndex(c => c=="S"), 1);
console.log("Part 2:", part2);