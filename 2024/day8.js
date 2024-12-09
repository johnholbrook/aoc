const utils = require("../utils.js");

let input = utils.read_file("day8.in").split("\n").map(l => l.split(""));

let frequencies = {};
input.forEach((line, i) => {
    line.forEach((cell, j) => {
        if (cell != "."){
            if (frequencies[cell] == undefined) frequencies[cell] = []
            frequencies[cell].push({row: i, col: j})
        }
    });
});

function in_bounds(pos, map){
    return (pos.row >=0 && pos.row < map.length && pos.col >= 0 && pos.col < map[0].length);
}

let antinodes = new Set();
Object.keys(frequencies).forEach(f => {
    let antennas = frequencies[f]
    antennas.forEach((a1, i) => {
        antennas.slice(i+1).forEach(a2 => {
            let [drow, dcol] = [a2.row - a1.row, a2.col - a1.col]
            let an1 = {row: a1.row - drow, col: a1.col - dcol}
            let an2 = {row: a2.row + drow, col: a2.col + dcol}
            if (in_bounds(an1, input)) antinodes.add(JSON.stringify(an1))
            if (in_bounds(an2, input)) antinodes.add(JSON.stringify(an2))
        });
    });
});
console.log("Part 1:", antinodes.size)

let part2_antinodes = new Set();
Object.keys(frequencies).forEach(f => {
    let antennas = frequencies[f]
    antennas.forEach((a1, i) => {
        antennas.slice(i+1).forEach(a2 => {
            let [drow, dcol] = [a2.row - a1.row, a2.col - a1.col];
            let gcd = utils.gcd(drow, dcol);
            [drow, dcol] = [drow/gcd, dcol/gcd];
            let tmp = utils.copy(a1);
            while (true){ // go in one direction
                if (in_bounds(tmp, input)) part2_antinodes.add(JSON.stringify(tmp))
                else break;
                tmp = {row: tmp.row - drow, col: tmp.col - dcol};
            }
            tmp = utils.copy(a1);
            while (true){ // go in opposite direction
                if (in_bounds(tmp, input)) part2_antinodes.add(JSON.stringify(tmp))
                else break;
                tmp = {row: tmp.row + drow, col: tmp.col + dcol};
            }
        });
    });
});
console.log("Part 2: ", part2_antinodes.size)