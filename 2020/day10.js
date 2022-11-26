let input = [38, 23, 31, 16, 141, 2, 124, 25, 37, 147, 86, 150, 99, 75, 81, 121, 93, 120, 96, 55, 48, 58, 108, 22, 132, 62, 107, 54, 69, 51, 7, 134, 143, 122, 28, 60, 123, 82, 95, 14, 6, 106, 41, 131, 109, 90, 112, 1, 103, 44, 127, 9, 83, 59, 117, 8, 140, 151, 89, 35, 148, 76, 100, 114, 130, 19, 72, 36, 133, 12, 34, 46, 15, 45, 87, 144, 80, 13, 142, 149, 88, 94, 61, 154, 24, 66, 113, 5, 73, 79, 74, 65, 137, 47];

// let input = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4];

let device_rating = Math.max(...input)+3;
// since we know (from the prompt) there will always be a chain using every adapter, just sort the list to find that chain
// first add the outlet value (always 0) and device rating to the list
input.push(0);
input.push(device_rating)
let order = input.sort((a,b)=>a-b);

// part 1 (and also compute the "gaps" array for part 2)
let ones = 0;
let threes = 0;
let gaps = [];
for (let i=0; i<order.length-1; i++){
    let a = order[i];
    let b = order[i+1];
    let jump = order[i+1] - order[i];
    if (jump == 1){
        ones += 1;
        gaps.push(1)
    }
    else if (jump == 3){
        threes += 1;
        gaps.push(3);
    }
}
console.log("Part 1:", ones*threes);

// part 2 – the idea here is, for each sequence of multiple single-jolt gaps, we can create some number of alternate arrangements
// by skipping one or more adapters. I worked out on paper the following:
// 2 single-jolt gaps = 2 possibilities
// 3 single-jolt gaps = 4 possibilities
// 4 single-jolt gaps = 7 possibilities
// and that's as far as I went because there aren't any longer sequences in my input.
// to get the total number of permutations we need to multiply together the number of possibilities for each sequence
let product = 1;
let i = 0;
while (i < gaps.length){
    // I'm sure this part could be optimized more but  ¯\_(ツ)_/¯
    if (gaps[i] == 3 || (gaps[i] == 1 && gaps[i+1 == 3])) i += 1;
    else if (gaps[i] == 1 && gaps[i+1] == 1 && gaps[i+2] == 3){
        product *= 2;
        i += 2;
    }
    else if (gaps[i] == 1 && gaps[i+1] == 1 && gaps[i+2] == 1 && gaps[i+3] == 3){
        product *= 4;
        i += 3;
    }
    else if (gaps[i] == 1 && gaps[i+1] == 1 && gaps[i+2] == 1 && gaps[i+3] == 1 && gaps[i+4] == 3){
        product *= 7;
        i += 4;
    }
    else i += 1;
}
console.log("Part 2:", product)