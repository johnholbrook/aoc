const utils = require("../utils.js");
let [ranges, ids] = utils.read_file("day5_ex.in").split('\n\n').map(x => x.split("\n"));
ids = utils.get_numbers(ids);
ranges = ranges.map(r => r.split("-").map(Number));

let part1 = ids.filter(candidate => {
    for (let i=0; i<ranges.length; i++){
        let [a, b] = [ranges[i][0], ranges[i][1]];
        if (candidate >= a && candidate <= b) return true;
    }
    return false;
}).length;
console.log("Part 1:", part1);

let part2 = ranges.reduce((t, v, i) => {
    let [a, b] = [v[0], v[1]];
    let previous_ranges = ranges.slice(0, i);
    let result = -1;
    for (let i=0; i<previous_ranges.length; i++){
        let [pa, pb] = [previous_ranges[i][0], previous_ranges[i][1]];
        if (pa >= a && pa <= b) {
            result = pa - a;
            break;
        }
        if (pb >= a && pb <= b){
            result = b - pb;
            break;
        }
    }
    if (result == -1) result = b - a + 1;
    // let result = v[1] - v[0] + 1
    console.log(t, v, result)
    return t+result;
}, 0);
console.log("Part 2:", part2);