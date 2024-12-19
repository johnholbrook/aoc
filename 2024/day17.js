const utils = require("../utils.js");

const input = utils.get_numbers(utils.read_file("day17_ex.in"));
let [regA, regB, regC] = input.slice(0, 3);
let program = input.slice(3)

function evaluate_program(program, rA, rB, rC){
    function combo(op){
        switch(op){
            case 0:
            case 1:
            case 2:
            case 3:
                return op;
            case 4: return regA;
            case 5: return regB;
            case 6: return regC;
        }
    }

    let [regA, regB, regC] = [BigInt(rA), BigInt(rB), BigInt(rC)];
    let ip = 0;
    let output = [];

    while (true){
        if (ip >= program.length) return output;

        instruction = program[ip]
        operand = program[ip+1]
        inc_ip = true;

        switch (instruction){
            case 0: // adv
                regA = regA/BigInt(Math.pow(2, combo(operand)));
                break;
            case 1: // bxl
                regB = regB ^ operand;
                break;
            case 2: // bst
                regB = combo(operand) % BigInt(8);
                break;
            case 3: // jnz
                if (regA != 0){
                    ip = operand;
                    inc_ip = false;
                }
                break;
            case 4: // bxc
                regB = regB ^ regC;
                break;
            case 5: // out
                output.push(combo(operand) % BigInt(8));
                break;
            case 6: // bdv
                regB = regA/Math.pow(2, combo(operand));
                break;
            case 7: // cdv
                regC = regA/Math.pow(2, combo(operand));
                break;
        }

        if (inc_ip) ip += 2;
    }
}

let part1_result = evaluate_program(program, regA, regB, regC).map(Number);
console.log("Part 1:", JSON.stringify(part1_result).replace(/\s|\[|\]/g, ""));