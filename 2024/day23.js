let utils = require("../utils.js");

let connections = utils.read_file("day23.in").split("\n").map(l => l.split("-"));

let computers = new Set();
connections.forEach(c => {
    computers.add(c[0]);
    computers.add(c[1]);
})

let found_triples = new Set();
computers.forEach(cmp => {
    if (cmp[0] == 't'){
        let this_conns = connections.filter(conn => conn.includes(cmp));
        this_conns.forEach((conn1, i) => {
            this_conns.forEach((conn2, j) => {
                if (j>i){
                    let cmp2 = conn1[0] != cmp ? conn1[0] : conn1[1];
                    let cmp3 = conn2[0] != cmp ? conn2[0] : conn2[1];
                    if (connections.find(e => e.includes(cmp2) && e.includes(cmp3))){
                        found_triples.add(JSON.stringify([cmp, cmp2, cmp3].sort()));
                    }
                }
            });
        });
    }
});
console.log("Part 1:", found_triples.size);

