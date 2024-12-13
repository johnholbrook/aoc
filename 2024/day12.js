const utils = require("../utils.js");

let map = utils.read_file("day12.in").split("\n").map(l => l.split(""));

function cells_in_region(map, row, col, visited = []){
    visited.push(`${row},${col}`);
    adj_cells = utils.adj_squares(map, row, col);
    adj_cells.forEach(a => {
        if (a.value == map[row][col] && !visited.includes(`${a.row},${a.col}`)){
            cells_in_region(map, a.row, a.col, visited)
        }
    });
    return visited;
}

let region_map = map.map(row => row.map(_ => -1));
let curr_id = 0;
utils.forEach2d(region_map, (cell, i, j) => {
    if (cell == -1){
        let this_region = cells_in_region(map, i, j);
        utils.forEach2d(region_map, (_, i2, j2) => {
            if (this_region.includes(`${i2},${j2}`)) region_map[i2][j2] = curr_id
        });
        curr_id += 1;
    }
});

// each cell in a region contributes 1 area
let areas = utils.range(0, curr_id).map(region => region_map.flat().filter(c => c == region).length);

let perimeters = utils.range(0, curr_id).map(_ => 0); // arr of as many 0s as there are regions
// for each cell in a region, each adjacent cell in a different region (or off the edge) adds 1 to that region's perimeter
utils.forEach2d(region_map, (cell, i, j, row) => {
    perimeters[cell] += utils.adj_squares(region_map, i, j).filter(c => c.value != cell).length;
    if (!(i>0 && i<region_map.length-1)) perimeters[cell] += 1 // cell on top or bottom edge
    if (!(j>0 && j<row.length-1)) perimeters[cell] += 1 // cell on left or right edge
});

// multiply area by perimeter and sum the list
console.log("Part 1:", utils.sum_list(areas.map((a, i) => a * perimeters[i])));

let perimeters2 = utils.range(0, curr_id).map(rid => {
    let result = 0;
    region_map.forEach((row, i) => {
        let up = row.map((val, j) => val == rid && (i==0 || region_map[i-1][j] != rid))
        up.forEach((c, i2) => result += (c && (i2==0 || !up[i2-1])) ? 1 : 0)
        let down = row.map((val, j) => val == rid && (i==region_map.length-1 || region_map[i+1][j] != rid))
        down.forEach((c, i2) => result += (c && (i2==0 || !down[i2-1])) ? 1 : 0)
    });

    utils.range(0, region_map[0].length).forEach(j => {
        let col = region_map.map(r => r[j]);
        let left = col.map((val, i) => val == rid && (j==0 || region_map[i][j-1] != rid))
        left.forEach((c, j2) => result += (c && (j2==0 || !left[j2-1])) ? 1 : 0);
        let right = col.map((val, i) => val == rid && (j==col.length-1 || region_map[i][j+1] != rid))
        right.forEach((c, j2) => result += (c && (j2==0 || !right[j2-1])) ? 1 : 0);
    });
    return result
});
console.log("Part 2:", utils.sum_list(areas.map((a, i) => a * perimeters2[i])));