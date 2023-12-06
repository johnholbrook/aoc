const utils = require("../utils.js");

const input = [["seeds: 79 14 55 13"], ["seed-to-soil map:", "50 98 2", "52 50 48"], ["soil-to-fertilizer map:", "0 15 37", "37 52 2", "39 0 15"], ["fertilizer-to-water map:", "49 53 8", "0 11 42", "42 0 7", "57 7 4"], ["water-to-light map:", "88 18 7", "18 25 70"], ["light-to-temperature map:", "45 77 23", "81 45 19", "68 64 13"], ["temperature-to-humidity map:", "0 69 1", "1 0 69"], ["humidity-to-location map:", "60 56 37", "56 93 4"]]

// build an initial list of al the ranges of seeds
let seeds_line = input[0][0].split(":")[1];
let pairs = utils.multi_match(seeds_line, /\d+\s\d+/g).map(m => utils.get_numbers(m[0]));
let seed_ranges = pairs.map(pair => {
    let numbers = utils.get_numbers(pair);
    return {
        seed: {
            start: numbers[0],
            end: numbers[0] + numbers[1]
        }
    }
});
// console.log(ranges);

function eval_map(map, state){
    let name = map[0].split(" ")[0];
    let source = name.split("-to-")[0];
    let dest = name.split("-to-")[1];

    let ranges = map.slice(1);
    ranges.forEach(r => {
        
        let n = utils.get_numbers(r);
        let source_start = n[1];      //a
        let source_end = n[1] + n[2]; //b
        let dest_start = n[0];        //c
        let dest_end = n[0] + n[2];   //d

        if (source_start < dest_start){
            if (source_end < dest_end){
                if (source_end < dest_start){
                    // no match, source range is entirely below dest range
                }
                else{
                    // match, source range starts below dest range but continues into it
                }
            }
            else{
                // match, dest range is entirely within source range
            }
        }
        else{
            if (source_end < dest_end){
                // match, source range is entirely within dest range
            }
            else{
                if (dest_end < source_start){
                    // no match, source range is entirely above dest range
                }
                else{
                    // match, source range starts in dest range and continues above it
                }
            }
        }
    });

    // update the destination valus of any seed ranges that weren't covered by any range in this map
    
    return state;
}

seed_ranges = eval_map(input[1], seed_ranges);
console.log(seed_ranges);