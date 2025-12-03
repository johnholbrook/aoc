const utils = require("../utils.js");
let banks = utils.read_file("day3.in").split('\n')

function find_largest_sequence(bank, seq_length){
    if (seq_length == 0) return "";
    let s = bank.substring(0, bank.length-seq_length+1);
    const values = "987654321";
    let pos = -1
    for (let i=0; i<9; i++){
        let c = values[i];
        pos = s.search(c)
        if (pos >= 0) break;
    }
    return Number(`${s[pos]}${find_largest_sequence(bank.substring(pos+1), seq_length-1)}`);
}

let part1 = utils.sum_list(banks.map(b => find_largest_sequence(b, 2)));
console.log("Part 1:", part1);

let part2 = utils.sum_list(banks.map(b => find_largest_sequence(b, 12)));
console.log("Part 2:", part2);