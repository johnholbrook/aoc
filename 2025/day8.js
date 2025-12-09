const utils = require("../utils.js");
let input = utils.read_file("day8.in")
                 .split('\n')
                 .map(utils.get_numbers)
                 .map((d, i) => {return{x:d[0], y:d[1], z:d[2], c: i+1, id:i+1}});
let part1_connections = 1000;

// calculate distance between two points
function dist(a,b){
    return Math.sqrt(Math.pow(a.x-b.x, 2) + Math.pow(a.y-b.y, 2) + Math.pow(a.z-b.z, 2));
}

// connect two points
function connect(id1, id2){
    // find the two points
    let p1 = input.find(p => p.id == id1);
    let p2 = input.find(p => p.id == id2);
    // lower circuit ID will survive
    let [c_new, c_old] = [p1.c, p2.c].sort()
    for (let q=0; q<input.length; q++){
        if (input[q].c == c_old) input[q].c = c_new
    }
}

// get list of unique circuits
function unique_circuits(points){
    let s = new Set();
    points.forEach(p => s.add(p.c));
    return Array.from(s);
}

// calculate the dists between every pair of points and sort them from shortest to longest
let distances = [];
input.forEach((p1, i) => {
    input.slice(i+1).forEach(p2 => {
        distances.push({points:[p1, p2], dist: dist(p1, p2)});
    });
});
distances.sort((a,b) => a.dist - b.dist);

// make the first 1000 conns
distances.slice(0,part1_connections).forEach(d => {
    connect(d.points[0].id, d.points[1].id);
});

// get number of boxes on each circuit
let circuit_counts = unique_circuits(input).map(c => {
    return {
        c: c,
        count: input.filter(p => p.c == c).length
    };
}).sort((a,b) => b.count - a.count);

// calculate part 1 answer
let part1 = utils.mult_list(circuit_counts.slice(0, 3).map(c => c.count));
console.log("Part 1:", part1);

// continue making conns until all boxes are in one circuit
let i = part1_connections;
while (true){
    let [a,b] = distances[i].points;
    connect(a.id, b.id);
    if (unique_circuits(input).length == 1){
        console.log("Part 2:", a.x * b.x);
        break;
    }
    i += 1;
}