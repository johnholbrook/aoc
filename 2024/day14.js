const utils = require("../utils.js");

let robots = utils.read_file("day14.in").split("\n").map(utils.get_numbers).map(g => {
    return {x: g[0], y: g[1], vx: g[2], vy: g[3]}
});
// let [width, height] = [11, 7];
let [width, height] = [101, 103];

function tick(){
    robots.forEach(r => {
        r.x = (r.x + r.vx) % width
        if (r.x < 0) r.x += width
        r.y = (r.y + r.vy) % height
        if (r.y < 0) r.y += height
    });
}

utils.range(0, 100).forEach(tick)

function build_map(robots){
    let map = []
    utils.range(0, height).forEach(i => {
        let line = ""
        utils.range(0, width).forEach(j => {
            let count = robots.filter(r => r.x == j && r.y == i).length
            line += count;
        })
        map.push(line);
    })
    return map;
}

let map = build_map(robots);

let quadrants = [map.slice(0, map.length / 2), map.slice((map.length / 2) +1)].map(half => [
    half.map(row => row.split("").slice(0, row.length/2)),
    half.map(row => row.split("").slice((row.length/2)+1))
]).flat();

let part1 = quadrants.map(q => q.flat()).map(q => q.map(Number)).map(utils.sum_list).reduce((t,v) => t*v, 1);
console.log("Part 1:", part1);

let i = 100;
while(true){
    i += 1;
    if (i % 100 == 0) console.log(i);
    tick();
    map = build_map(robots);
    if ((map.reduce((t,v) => t.concat(v), "").search(/[2-9]/)) == -1){
        // match!
        console.log(map);
        console.log("Part 2:", i);
        break;
    }
}