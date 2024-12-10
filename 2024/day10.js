const utils = require("../utils.js");

let input = utils.read_file("day10.in").split("\n").map(line => line.split("").map(Number));

let trailheads = [];
input.forEach((line, i) => {
    line.forEach((cell, j) =>{
        if (cell == 0) trailheads.push([i,j])
    });
});

function find_routes_from_point(row, col, map){
    let this_height = map[row][col];
    if (this_height == 9) return [[row, col]];
    else{
        let adj = utils.adj_squares(map, row, col);
        return adj.reduce((t, v) => t.concat(v.value == this_height+1 ? find_routes_from_point(v.row, v.col, map) : []), [])
    }
}

let num_unique_summits = trailheads.map(t => new Set(find_routes_from_point(t[0], t[1], input).map(JSON.stringify)).size);
console.log("Part 1:", utils.sum_list(num_unique_summits));

let num_routes = trailheads.map(t => find_routes_from_point(t[0], t[1], input).length);
console.log("Part 2:", utils.sum_list(num_routes));