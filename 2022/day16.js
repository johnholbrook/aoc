const utils = require("../utils.js");

let map = utils.read_file("day16_ex.in").split("\n").reduce((t, v) => {
    t[v.slice(6,8)] = {
        flow: utils.get_numbers(v)[0],
        tunnels: v.split(/valves?\s/)[1].split(", ")
    }
    return t;
}, {});

let state = {
    location: "AA",
    flow_achieved: 0,
    mins_remaining: 30,
    open_valves: Object.keys(map).reduce((t, v) => {
        t[v] = false;
        return t;
    }, {})
}

// console.log(state);
function score(state){
    // console.log(map[state.location])
    console.log(state);
    // console.log(state.open_valves[state.location])
    
    // if we're out of time, return the answer
    if (state.mins_remaining <= 0) return state.flow_achieved;

    if (!(state.open_valves[state.location])){ 
        // if valve closed, open valve
        state.mins_remaining -= 1;
        state.open_valves[state.location] = true;
        state.flow_achieved += map[state.location].flow * state.mins_remaining;
    }
    // return state;
    

    // else, try all the places we can go
    return Math.max(...map[state.location].tunnels.forEach(v => score({
        location: v, 
        flow_achieved: state.flow_achieved, 
        mins_remaining: state.mins_remaining - 1,
        open_valves: state.open_valves
    })));
}

console.log(score(state));