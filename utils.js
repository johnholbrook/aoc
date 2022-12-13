module.exports = {
    /**
     * Return the sum of all numbers in the given array
     * @param {Number[]} list 
     * @returns sum of items in array
     */
    sum_list: function(list){
        return list.reduce((t,v) => t+v, 0);
    },

    /**
     * Given a 2D array of items, and a location on the array, return the adjacent items (not including diagonals)
     * @param {any[][]} grid 
     * @param {Number} row 
     * @param {Number} col 
     */
     adj_squares: function(grid, row, col){
        let result = [];

        // up
        if (row>0) result.push({row:row-1, col:col, value:grid[row-1][col]});

        // left
        if (col>0) result.push({row:row, col:col-1, value:grid[row][col-1]});

        // right
        if (col<grid[row].length-1) result.push({row:row, col:col+1, value:grid[row][col+1]});

        // down
        if (row<grid.length-1) result.push({row:row+1, col:col, value:grid[row+1][col]});

        return result;
    },

    /**
     * Given a 2D array of items, and a location on the array, return the adjacent items (including diagonals)
     * @param {any[][]} grid 
     * @param {Number} row 
     * @param {Number} col 
     */
    adj_squares_diag: function(grid, row, col){
        let result = [];

        // top left
        if (row>0 && col>0) result.push({row:row-1, col:col-1, value:grid[row-1][col-1]});

        // top middle
        if (row>0) result.push({row:row-1, col:col, value:grid[row-1][col]});

        // top right
        if (row>0 && col<grid[row].length-1) result.push({row:row-1, col:col+1, value:grid[row-1][col+1]});

        // left
        if (col>0) result.push({row:row, col:col-1, value:grid[row][col-1]});

        // right
        if (col<grid[row].length-1) result.push({row:row, col:col+1, value:grid[row][col+1]});

        // bottom left
        if (row<grid.length-1 && col>0) result.push({row:row+1, col:col-1, value:grid[row+1][col-1]});

        // bottom middle
        if (row<grid.length-1) result.push({row:row+1, col:col, value:grid[row+1][col]});

        // bottom right
        if (row<grid.length-1 && col<grid[row].length-1) result.push({row:row+1, col:col+1, value:grid[row+1][col+1]});

        return result;
    },

    /**
     * Return a copy of the given object or array
     * @param {any} thing
     */
    copy: function(thing){
        return JSON.parse(JSON.stringify(thing))
    }
}