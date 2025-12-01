const utils = require("../utils.js");
let input = utils.read_file("day1.in").split('\n')

let dial_pos = 50;

let part1 = utils.sum_list(input.map(l => {
    let [dir, dist] = [l[0], Number(l.substring(1))%100];
    if (dir == "L"){
        dial_pos = dial_pos - dist;
        if (dial_pos < 0) dial_pos += 100;
    }
    else dial_pos = (dial_pos + dist)%100;
    return (dial_pos == 0);
}));
console.log("Part 1:", part1)

dial_pos = 50;
let part2 = utils.sum_list(input.map(l => {
    let init_pos = dial_pos;
    let past0 = 0;
    let [dir, dist] = [l[0], Number(l.substring(1))];
    if (dir == "L"){
        dial_pos -= dist;
        while (dial_pos < 0){
            past0 += 1;
            dial_pos += 100;
        }
        if (dial_pos == 0) past0 += 1;
        if (init_pos == 0) past0 -= 1;
    }
    else {
        dial_pos += dist;
        while (dial_pos > 99){
            past0 += 1;
            dial_pos -= 100;
        }
    }
    return past0;
}));
console.log("Part 2:", part2);