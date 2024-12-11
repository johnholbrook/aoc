const utils = require("../utils.js");

let input = utils.get_numbers(utils.read_file("day11.in").split("\n"));

let map = input.reduce((t,v) => {
    let result = {};
    result[v] = 1;
    return Object.assign(result, t);
}, {});

function step_stone(n){
    if (n == 0) return [1]
    else if (String(n).length % 2 == 0){
        let s = String(n);
        return [Number(s.slice(0, s.length/2)), Number(s.slice(s.length/2))]
    }
    else return [n*2024]
}

function step_list(l){
    return Object.keys(l).reduce((t, v) => {
        let children = step_stone(v);
        let result = utils.copy(t);
        children.forEach(c => {
            if (Object.hasOwn(result, c)) result[c] += l[v]
            else result[c] = l[v]
        });
        return result;
    }, {});
}

utils.range(0, 75).forEach(i => {
    // console.log(i);
    map = step_list(map);
    if (i == 24) console.log("Part 1:", utils.sum_list(Object.values(map)));
});
console.log("Part 2:", utils.sum_list(Object.values(map)));