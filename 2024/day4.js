const utils = require("../utils.js");

let input = utils.read_file("day4.in").split("\n");
let a2d = input.map(l => l.split("")); // copy of input as a 2d array rather than an array of strings

function count_xmas(s){
    let count = 0;
    utils.range(0, s.length).forEach(i =>{
        let this_substr = s.slice(i, i+4);
        if (this_substr == "XMAS" || this_substr == "SAMX") count += 1;
    });
    return count;
}

function in_bounds(arr, i, j){
    if (i<0 || i>=arr.length) return false;
    else if (j<0 || j>=arr[0].length) return false;
    else return true;
}

let transposed = utils.transpose(a2d).map(r => r.reduce((t,v) => t.concat(v), ""))

let diagonals = [];
let starting_points = [
    ...utils.range(0, a2d.length).map(i => [i, 0]),
    ...utils.range(1, a2d[0].length).map(j => [0, j]),
    ...utils.range(1, a2d[0].length).map(j => [a2d.length-1, j])
]
starting_points.forEach(p => {
    // go up and right
    let tmp1 = [];
    let [i,j]  = p;
    while (in_bounds(a2d, i,j)){
        tmp1.push(a2d[i][j]);
        i -= 1;
        j += 1
    }

    // go down and right
    let tmp2 = [];
    [i,j] = p;
    while (in_bounds(a2d, i,j)){
        tmp2.push(a2d[i][j]);
        i += 1;
        j += 1
    }
    diagonals.push(tmp1);
    diagonals.push(tmp2);
});
diagonals = diagonals.map(d => d.reduce((t,v) => t.concat(v), "")); // convert back to array of strings

let part1 = utils.sum_list([
    ...input,
    ...transposed,
    ...diagonals
].map(count_xmas));
console.log("Part 1:", part1)

// given the location of an A, check if it's the middle of two MAS in an x shape
function is_mas_x(arr, i, j){
    // console.log(i, j)
    try{
        let [tl, tr, bl, br] = [arr[i-1][j-1], arr[i-1][j+1], arr[i+1][j-1], arr[i+1][j+1]];
        // console.log(tl, tr, bl, br);
        // let d1 = ((tl == "M" && br == "S") || (tl == "S" && br == "M"));
        // let d2 = ((tr == "M" && bl == "S") || (tr == "S" && bl == "M"));
        // console.log(d1, d2);
        // if (d1 && d2) return true;
        if (
            ((tl == "M" && br == "S") || (tl == "S" && br == "M")) &&
            ((tr == "M" && bl == "S") || (tr == "S" && bl == "M"))
        ) return true;
    }
    catch{}
    return false;
}

let part2 = 0;
a2d.forEach((row, i) => {
    row.forEach((letter, j) => {
        if (letter == "A"){
            part2 += is_mas_x(a2d, i, j);
        }
    });
});
console.log("Part 2:", part2);