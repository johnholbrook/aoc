const utils = require("../utils.js");

let [map, moves] = utils.read_file("day15.in").split("\n\n");
map = {map: map.split("\n").map(l => l.split(""))}
moves = moves.split("").filter(c => c != '\n');

utils.forEach2d(map.map, (val, i, j) => {
    if (val == "@"){
        map.row = i;
        map.col = j;
    }
});

// move the object at the given location in the given direction, if possible, modifying the map.
// return true if the move was made or false if the move was impossible.
function attempt_move(map, row, col, dir){
    let this_loc = map.map[row][col];

    const dirs = {"<": [0, -1], ">": [0, 1], "^": [-1, 0], "v": [1, 0]}
    let [nrow, ncol] = [row + dirs[dir][0], col + dirs[dir][1]]
    let nspace = map.map[nrow][ncol];

    if (nspace == "#") return false; // hit a wall
    else if (nspace == "."){ // move into empty space
        map.map[row][col] = ".";
        map.map[nrow][ncol] = this_loc;
        map.row = nrow;
        map.col = ncol;
        return true;
    }
    else { // box in the way, try to push it
        if (attempt_move(map, nrow, ncol, dir)){
            // box moved, freeing up space to move this item
            map.map[row][col] = ".";
            map.map[nrow][ncol] = this_loc;
            map.row = nrow;
            map.col = ncol;
            return true;
        }
        else return false; // box couldn't move due to a wall in the way
    }
}

moves.forEach(m => attempt_move(map, map.row, map.col, m));
let part1 = 0;
utils.forEach2d(map.map, (val, i, j) => {
    if (val == "O") part1 += (100*i) + j;
});
console.log("Part 1:", part1);