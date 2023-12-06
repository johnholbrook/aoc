const utils = require("../utils.js");

function waysToBeat(time, dist){
    return utils.range(1, time) // options for how long to hold down the button
    .map(b => b * (time-b)) // calculate the distance travelled for each option
    .filter(d => d>dist).length; // count # of results that beat the record
}

// const input1 = {time: [7, 15, 30], distance: [9, 40, 200]};
const input1 = {time: [56, 71, 79, 99], distance: [334, 1135, 1350, 2430]}

let part1 = input1.time.map((time, i) => waysToBeat(time, input1.distance[i])).reduce((t,v) => t*v, 1); // compute product
console.log("Part 1:", part1)

// const input2 = {time: 71530, distance: 940200};
const input2 = {time: 56717999, distance: 334113513502430}
let part2 = waysToBeat(input2.time, input2.distance);
console.log("Part 2:", part2);