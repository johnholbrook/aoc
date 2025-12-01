const utils = require("../utils.js");

let map = utils.read_file("day16_ex.in").split("\n").map(l => l.split(""));

let is_wall = v => v == "#";

let unvisited = new Set();
utils.forEach2d(map, (cell, i, j) => {
    if (!is_wall(cell)){
        unvisited.add({
            row: i,
            col: j,
            score: cell == "S" ? 0 : Infinity,
        }
    );
});
console.log(unvisited);

