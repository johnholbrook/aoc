// let input = [[6,6,1,7,1,1,3,5,8,4], [6,5,4,4,2,1,8,6,3,8], [5,4,5,7,3,3,1,4,8,8], [1,1,3,5,6,7,5,5,8,7], [1,2,2,1,3,5,3,2,1,6], [1,8,1,1,1,2,4,3,7,8], [1,3,8,7,8,6,4,3,6,8], [4,4,2,7,6,3,7,2,6,2], [6,7,7,8,6,4,5,4,8,6], [3,6,8,2,1,4,6,7,4,5]];

// sample
// let input = [[5,4,8,3,1,4,3,2,2,3], [2,7,4,5,8,5,4,7,1,1], [5,2,6,4,5,5,6,1,7,3], [6,1,4,1,3,3,6,1,4,6], [6,3,5,7,3,8,5,4,7,8], [4,1,6,7,5,2,4,6,4,5], [2,1,7,6,8,4,1,7,2,1], [6,8,8,2,8,8,1,1,3,4], [4,8,4,6,8,4,8,5,5,4], [5,2,8,3,7,5,1,5,2,6]];

// smaller sample
let input = [[1,1,1,1,1], [1,9,9,9,1], [1,9,1,9,1], [1,9,9,9,1], [1,1,1,1,1]];

function step(board){
    // increment each cell by 1
    board = board.map(row => row.map(n => n+1));

    // for each cell
    for (let i=0; i<board.length; i++){
        for (let j=0; j<board[i].length; j++){
            if (board[i][j] > 9){
                // if the new value is >9, flash the cell
                let result = flash(board, i, j);
                board = result.board;
            }
        }
    }

    return board;
};

// merge two or more arrays, removing duplicate entries
function mergeNoDuplicates(...arrays) {
    let mergedArray = [];

    arrays.forEach(array => {
        mergedArray = [...mergedArray, ...array]
    });

    return [...new Set([...mergedArray])];
}

function flash(board, i, j, blocklist=[]){
    console.log(`Called flash at`, i, j);

    // build a list of all the adjacent cells, checking to see if we're at one of the edges
    let cellsToIncrement = [];
    if (i>0) {
        cellsToIncrement = cellsToIncrement.concat([[i-1, j]]);
        if (j>0) cellsToIncrement = cellsToIncrement.concat([[i-1, j-1]]);
    }
    if (i<board.length-1){
        cellsToIncrement = cellsToIncrement.concat([[i+1, j]]);
        if (j<board[i].length-1) cellsToIncrement = cellsToIncrement.concat([[i+1, j+1]]);
    }
    if (j>0){
        cellsToIncrement = cellsToIncrement.concat([[i, j-1]]);
        if (i<board.length-1) cellsToIncrement = cellsToIncrement.concat([[i+1, j-1]]);
    }
    if (j<board[i].length-1){
        cellsToIncrement = cellsToIncrement.concat([[i, j+1]]);
        if (i>0) cellsToIncrement = cellsToIncrement.concat([[i-1, j+1]]);
    }

    // console.log(cellsToIncrement)

    // for each adjacent cell, increment it by 1, and check to see if it now needs to flash
    let newCellsToFlash = [];
    cellsToIncrement.forEach(([i1, j1]) => {
        board[i1][j1] += 1;
        if (board[i1][j1] > 9){
            newCellsToFlash.push([i1, j1]);
        }
    });

    console.log("newCellsToFlash", newCellsToFlash);

    // flash any cells that just got pushed above 9
    // blocklist.push([i,j]);
    // while (newCellsToFlash.length > 0){
    //     let cell = newCellsToFlash.pop();
    //     if (!blocklist.includes(cell)){
    //         let tmp = flash(board, cell[0], cell[1], blocklist);
    //         board = tmp.board;
    //         blocklist = mergeNoDuplicates(blocklist, tmp.visited);
    //     }
    // }

    console.log(blocklist);
    // set all cells that flashed this step to 0
    blocklist.forEach(([i1,j1]) => {
        board[i1][j1] = 0;
    });

    // return the new board, and a list of the adjacent cells that need to flash
    return {
        board: board,
        visited: blocklist
    }
}

let tmp = step(input);
console.log(tmp);