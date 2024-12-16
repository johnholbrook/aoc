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

let map2 = {
    map: map.map.map(row => row.map(c => c == "@" ? ["@", "."] : c == "O" ? ["[", "]"] : [c,c]).flat()),
    row: map.row,
    col: map.col*2
}

function print_map(map){
    console.log(map.row, map.col)
    map.map.forEach(row => {
        console.log(row.reduce((t, v) => t+v), "");
    });
}

function move_is_possible(map, row, col, dir, box_half = false){
    return attempt_move(utils.copy(map), row, col, dir, box_half);
}

// move the object at the given location in the given direction, if possible, modifying the map.
// return true if the move was made or false if the move was impossible.
function attempt_move(map, row, col, dir, box_half = false){
    let this_loc = map.map[row][col];
    let is_wide_box = ["^", "v"].includes(dir) && ["[", "]"].includes(this_loc) && !box_half;
    let other_half_col = is_wide_box ? (this_loc == "[" ? col + 1 : col -1) : "!";

    const dirs = {"<": [0, -1], ">": [0, 1], "^": [-1, 0], "v": [1, 0]}
    let [nrow, ncol] = [row + dirs[dir][0], col + dirs[dir][1]]
    let nspace = map.map[nrow][ncol];

    if (nspace == "#") return false; // hit a wall
    else {
        // if we're moving one side of a 2-wide box up or down, the other side needs to come along
        if (is_wide_box && !move_is_possible(map, row, other_half_col, dir, true)) return false;
        if (nspace == "."){ // move into empty space
            map.map[row][col] = ".";
            map.map[nrow][ncol] = this_loc;
            map.row = nrow;
            map.col = ncol;

            if (is_wide_box) attempt_move(map, row, other_half_col, dir, true);
            return true;
        }
        else { // box in the way, try to push it
            if (attempt_move(map, nrow, ncol, dir)){
                // box moved, freeing up space to move this item
                map.map[row][col] = ".";
                map.map[nrow][ncol] = this_loc;
                map.row = nrow;
                map.col = ncol;

                if (is_wide_box) attempt_move(map, row, other_half_col, dir, true);
                return true;
            }
            else return false; // box couldn't move due to a wall in the way
        }
    }
}

moves.forEach(m => attempt_move(map, map.row, map.col, m));
let part1 = 0;
utils.forEach2d(map.map, (val, i, j) => {
    if (val == "O") part1 += (100*i) + j;
});
console.log("Part 1:", part1);

moves.forEach(m => attempt_move(map2, map2.row, map2.col, m));
let part2 = 0;
utils.forEach2d(map2.map, (val, i, j) => {
    if (val == "[") part2 += (100*i) + j;
});
console.log("Part 2:", part2);