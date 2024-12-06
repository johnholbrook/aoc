const utils = require("../utils.js");

let input = utils.read_file("day6.in").split("\n").map(l =>l.split(""));

let start = {}
for (let i=0; i<input.length; i++){
    for (let j=0; j<input[i].length; j++){
        let c = input[i][j];
        if (c == "^") start = {row:i, col:j, dir:"up"}
        else if (c == ">") start = {row:i, col:j, dir:"right"}
        else if (c == "<") start = {row:i, col:j, dir:"left"}
        else if (c == "v") start = {row:i, col:j, dir:"down"}
    }
}

function in_bounds(pos, map){
    return (pos.row >=0 && pos.row < map.length && pos.col >= 0 && pos.col < map[0].length);
}

function step(pos, map){
    [ni, nj] = [-1, -1]
    if (pos.dir == "up") [ni, nj] = [pos.row-1, pos.col];
    else if (pos.dir == "down") [ni, nj] = [pos.row+1, pos.col];
    else if (pos.dir == "left") [ni, nj] = [pos.row, pos.col-1];
    else if (pos.dir == "right") [ni, nj] = [pos.row, pos.col+1];
    
    if (!in_bounds({row:ni, col:nj, dir:pos.dir}, map)) return {row:ni, col:nj, dir:pos.dir}

    const next_dir = {"up":"right", "right":"down", "down":"left", "left":"up"}
    if (map[ni][nj] == "#") return step({row:pos.row, col:pos.col, dir:next_dir[pos.dir]}, map)
    else return {row:ni, col:nj, dir:pos.dir}
}

let curr_pos = utils.copy(start);
let visited = new Set();
while (in_bounds(curr_pos, input)){
    visited.add(`[${curr_pos.row}, ${curr_pos.col}]`);
    curr_pos = step(curr_pos, input);
}
console.log("Part 1:", visited.size)

let cycles_found = 0;
input.forEach((row, i) => {
    row.forEach((cell, j) => {
        if (cell == "."){ // skip the initial position and existing obstacles
            let this_map = utils.copy(input);
            this_map[i][j] = "#"; // add an obstacle in this location

            let this_curr_pos = utils.copy(start);
            let this_visited = new Set();
            while (in_bounds(this_curr_pos, this_map)){
                if (this_visited.has(`[${this_curr_pos.row}, ${this_curr_pos.col}, ${this_curr_pos.dir}]`)){ // found a cycle
                    cycles_found += 1;
                    break;
                }
                this_visited.add(`[${this_curr_pos.row}, ${this_curr_pos.col}, ${this_curr_pos.dir}]`);
                this_curr_pos = step(this_curr_pos, this_map);
            }
        }
    });
});
console.log("Part 2:", cycles_found);