const utils = require("../utils.js");
const waysToBeat = (time, dist) => utils.range(1, time).map(b => b * (time-b)).filter(d => d>dist).length;
const input1 = {time: [56, 71, 79, 99], distance: [334, 1135, 1350, 2430]}
console.log("Part 1:", input1.time.map((time, i) => waysToBeat(time, input1.distance[i])).reduce((t,v) => t*v, 1))
const input2 = {time: 56717999, distance: 334113513502430}
console.log("Part 2:", waysToBeat(input2.time, input2.distance));