// real
let input = ["noop", "noop", "addx 5", "addx 29", "addx -28", "addx 5", "addx -1", "noop", "noop", "addx 5", "addx 12", "addx -6", "noop", "addx 4", "addx -1", "addx 1", "addx 5", "addx -31", "addx 32", "addx 4", "addx 1", "noop", "addx -38", "addx 5", "addx 2", "addx 3", "addx -2", "addx 2", "noop", "addx 3", "addx 2", "addx 5", "addx 2", "addx 3", "noop", "addx 2", "addx 3", "noop", "addx 2", "addx -32", "addx 33", "addx -20", "addx 27", "addx -39", "addx 1", "noop", "addx 5", "addx 3", "noop", "addx 2", "addx 5", "noop", "noop", "addx -2", "addx 5", "addx 2", "addx -16", "addx 21", "addx -1", "addx 1", "noop", "addx 3", "addx 5", "addx -22", "addx 26", "addx -39", "noop", "addx 5", "addx -2", "addx 2", "addx 5", "addx 2", "addx 23", "noop", "addx -18", "addx 1", "noop", "noop", "addx 2", "noop", "noop", "addx 7", "addx 3", "noop", "addx 2", "addx -27", "addx 28", "addx 5", "addx -11", "addx -27", "noop", "noop", "addx 3", "addx 2", "addx 5", "addx 2", "addx 27", "addx -26", "addx 2", "addx 5", "addx 2", "addx 4", "addx -3", "addx 2", "addx 5", "addx 2", "addx 3", "addx -2", "addx 2", "noop", "addx -33", "noop", "noop", "noop", "noop", "addx 31", "addx -26", "addx 6", "noop", "noop", "addx -1", "noop", "addx 3", "addx 5", "addx 3", "noop", "addx -1", "addx 5", "addx 1", "addx -12", "addx 17", "addx -1", "addx 5", "noop", "noop", "addx 1", "noop", "noop"];

// sample
// let input = ["addx 15", "addx -11", "addx 6", "addx -3", "addx 5", "addx -1", "addx -8", "addx 13", "addx 4", "noop", "addx -1", "addx 5", "addx -1", "addx 5", "addx -1", "addx 5", "addx -1", "addx 5", "addx -1", "addx -35", "addx 1", "addx 24", "addx -19", "addx 1", "addx 16", "addx -11", "noop", "noop", "addx 21", "addx -15", "noop", "noop", "addx -3", "addx 9", "addx 1", "addx -3", "addx 8", "addx 1", "addx 5", "noop", "noop", "noop", "noop", "noop", "addx -36", "noop", "addx 1", "addx 7", "noop", "noop", "noop", "addx 2", "addx 6", "noop", "noop", "noop", "noop", "noop", "addx 1", "noop", "noop", "addx 7", "addx 1", "noop", "addx -13", "addx 13", "addx 7", "noop", "addx 1", "addx -33", "noop", "noop", "noop", "addx 2", "noop", "noop", "noop", "addx 8", "noop", "addx -1", "addx 2", "addx 1", "noop", "addx 17", "addx -9", "addx 1", "addx 1", "addx -3", "addx 11", "noop", "noop", "addx 1", "noop", "addx 1", "noop", "noop", "addx -13", "addx -19", "addx 1", "addx 3", "addx 26", "addx -30", "addx 12", "addx -1", "addx 3", "addx 1", "noop", "noop", "noop", "addx -9", "addx 18", "addx 1", "addx 2", "noop", "noop", "addx 9", "noop", "noop", "noop", "addx -1", "addx 2", "addx -37", "addx 1", "addx 3", "noop", "addx 15", "addx -21", "addx 22", "addx -6", "addx 1", "noop", "addx 2", "addx 1", "noop", "addx -10", "noop", "noop", "addx 20", "addx 1", "addx 2", "addx 2", "addx -6", "addx -11", "noop", "noop", "noop"];

class cpu{
    constructor(program){
        this.program = program;
        this.x = 1;
        this.cycle = 1;
        this.values = [];
    }

    // increment the cycle count
    inc(){
        this.values.push(this.x);
        this.cycle += 1;
    }

    // execute an instruction
    exec_inst(i){
        let s = i.split(" ");
        if (s[0] == "noop"){
            this.inc();
        }
        else if (s[0] == "addx"){
            this.inc();
            this.inc();
            this.x += Number(s[1]);
        }
    }

    // run the program
    run(){
        for (let i=0; i<this.program.length; i++){
            this.exec_inst(this.program[i]);
        }
    }
}

function draw_screen(values){
    [...Array(6).values()].forEach((_i, row) => {
        let row_output = "";
        [...Array(40).values()].forEach((_j, col) => {
            if ([col-1, col, col+1].includes(values[row*40+col])) row_output += "■";
            else row_output += " ";
        });
        console.log(row_output);
    });
}

// initialize CPU & run program
let cpu1 = new cpu(input);
cpu1.run();
let values = cpu1.values;

// part 1
let part1 = 20*values[19] + 60*values[59] + 100*values[99] + 140*values[139] + 180*values[179] + 220*values[219];
console.log("Part 1:", part1);

// part 2
console.log("Part 2:")
draw_screen(values);