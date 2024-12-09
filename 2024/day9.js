const utils = require("../utils.js");

let input = utils.read_file("day9.in").split("").map(Number);

// build the disks from the map (one per part)
let disk1 = [];
let disk2 = [];
let curr_id = 0;
input.forEach((size, i) => {
    if (i%2 == 0){
        utils.range(0, size).forEach(_ => disk1.push(curr_id));
        disk2.push({id: curr_id, size: size})
        curr_id += 1;
    }
    else{
        utils.range(0, size).forEach(_ => disk1.push("."));
        if (size>0) disk2.push({id: ".", size: size})
    }
});

// move blocks from end to beginning free space
while (true){
    // find position of last file block and first free space
    let lastBlock = disk1.findLastIndex(v => !isNaN(v));
    let firstFreeSpace = disk1.findIndex(isNaN);

    // if first free space is after the last file block, we're done
    if (firstFreeSpace > lastBlock) break;

    // swap the two
    disk1 = disk1.slice(0, firstFreeSpace)
                 .concat(disk1[lastBlock])
                 .concat(disk1.slice(firstFreeSpace+1, lastBlock))
                 .concat(disk1.slice(lastBlock+1))
                 .concat(".");
}

let part1 = utils.sum_list(disk1.map((v, i) => isNaN(v) ? 0 : v*i));
console.log("Part 1:", part1);

// for each file ID in reverse order...
utils.range(0, curr_id).reverse().forEach(id => {
    // find the location file with that ID
    let fileLoc = disk2.findIndex(v => v.id == id);

    // find the first free space big enough for that file
    let freeSpaceLoc = disk2.findIndex((v, i) => isNaN(v.id) && v.size >= disk2[fileLoc].size && i < fileLoc);
    if (freeSpaceLoc > -1){
        remainingFreeSpace = disk2[freeSpaceLoc].size - disk2[fileLoc].size;
        disk2 = disk2.slice(0, freeSpaceLoc) // disk up to free space
                     .concat(disk2[fileLoc]) // this file
                     .concat(remainingFreeSpace ? {id: ".", size: remainingFreeSpace} : []) // remaining space in this block (if any)
                     .concat(disk2.slice(freeSpaceLoc + 1, fileLoc)) // disk bt free space and this file
                     .concat({id: ".", size: disk2[fileLoc].size}) // free space where file used to be
                     .concat(disk2.slice(fileLoc + 1)); // rest of disk
    } 
});

let disk2_expanded = disk2.reduce((t, v) => t.concat(utils.range(0, v.size).map(_ => v.id)), []);
console.log("Part 2:", utils.sum_list(disk2_expanded.map((v, i) => isNaN(v) ? 0 : v*i)));