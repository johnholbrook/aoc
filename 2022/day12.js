let input = ["abcccccccccccaaaaacccccccaaaaaaccccccccccccccccccccccccccccccccaaaaaaaaaaaaaacccccccccccccccccccaaaaaacccccccacccccccccaaccaaccccccccccccccccccccccccccccccaaaaaa", "abcccccccccccaaaaaaacccccaaaaaaccccccccaaccccccccccaaaaccccccccaaaaaaaaaaaaaccccccccccccccccccccaaaaaaccccaaaacccccccccaaaaaaccccccccccccccccccccccccccccccccaaaa", "abccccccccccaaaaaaaacccccaaaaaccccccccaaaacccccccccaaaacccccccccccaaaaaaacccccccccccccccccccccccaaaaacccccaaaaaaccccccccaaaaacccccccccccaaaccccccccccccccccccaaaa", "abccccccccccaaaaaaaaccccccaaaaacccccccaaaacccccccccaaaacccccaaaccccaaaaaaccccccccccccccccccccccccaaaaacccccaaaaacccccccaaaaaacccccccccccaaaacccccccccccccccccaaaa", "abccccccccccaaaaaaccccccccaaaaacccccccaaaaccccccccccaaacccccaaaaccaaaaaaaacccccccccccccccccccccccaaaaaccccaaaaacccccccaaaaaaaaccccccccccaaaaccaaccccccccccccaaaaa", "abcccccccccccccaaaccccccccccccccccccccccccccccccccccccccccccaaaaccaaaaaaaaccccccccccccccccccccccccccccccccaccaaccccaaaaaaaaaaacccccccccccaaaaaaccccccccccccccaccc", "abcacccccccccccccaaaccccccccccccccaaacccccccccccccccccccccccaaaccaaaacccaaacccccccccccccccccccccccaacccccccccccccccaaacccaaccccccccccccccaaaalllllccccccccccccccc", "abaacccccccccccccaaaaaacccccccccccaaaccccccccccccccccccccccccccccaaaccccaaaccccccccccccccccccccccaaccccccccccccccccaaaaaaaaccccccccccccccckklllllllccccaaaccccccc", "abaaaaacccccccccaaaaaaacccccccccaaaaaaaacccccaacccccccccccccccccccccccccaaaccccccccaacccccccccaaaaacaacaacaacccccaaaaaaaaccccccccccccaaakkkkllllllllcccaaaccccccc", "abaaaaaccccccccaaaaaaaacccccccccaaaaaaaacccccaaaaaacccccccccccccccccccccaaaccccccaaaacacccccccaaaaaaaacaaaaaccccaaaaaaaaaccccccccckkkkkkkkkklsssslllcccaaaaaacccc", "abaaaccccccccccaaaaaaacccccccccccaaaaacccccccaaaaaaccccccccccccccccccaaaaaaaaccccaaaaaacccccccccaaaaacaaaaacccccaaaaaaaacccaaaccjjkkkkkkkkkssssssslllcccaaaaacccc", "abaaaccccccccccccaaaaaacccccaacccaaaaaaccccaaaaaaaccaaaccccccccccccccaaaaaaaacccccaaaacccccccccaaaaaccaaaaaacccccccaaaaaaccaaaajjjjkkkkkkssssssssslllcddaaaaccccc", "abcaaacccccccccccaaaaaacaaacaacccaaaaaaccccaaaaaaaaaaaaaaccccccccccccccaaaaaccccccaaaaccccaaaaaaacaaacccaaaaaaacccaaaaaaaccaaajjjjrrrrrrssssuuuussqmmddddaaaccccc", "abccaacccccccccccaaccccccaaaaacccaaaccaccccaaaaaaaaaaaaaacccccccccccccaaaaaacccccaacaaccccaaaaacccaaccccacccaaaaaaaaaccaaccaaajjjrrrrrrrrssuuuuuvqqmmmdddaaaccccc", "abccccccccaaccccccccccccccaaaaaacccccccccccccaaaaaaaaaaaccccccccccccccaaaaaacccccccccccccaaaaaaccccccccccccaaaaaaaaaacccccccccjjjrrruuuuuuuuuuuvvqqmmmmddddaccccc", "abaacccccaaaaccccccccccccaaaaaaacccccccccccccaacccccaaaaacccccccccccccaccaaacccccccccccccaaaaaacccccccccccaaaaaaaaccccccccccccjjjrrruuuuuuuuxyyvvqqqmmmddddcccccc", "abaacccccaaaacccccccccccaaaaaaccccccccaaccccccccacccaaaaacccccccccccccccccccccccccccccccccaaaaacccccccccccaaaaaaacccccccccccccjjjrrttuxxxxuxxyyvvqqqqmmmmddddcccc", "abaacccccaaaacccccccccccaacaaacccccaaaaacccaaaaaaaccccccccccccccccccccccccccccccccccccccccaaacccccccccccccccaaaaaaccccccccccccjjjrrtttxxxxxxyyyvvqqqqqmmmmdddcccc", "abacccccccccccccccccccccccccaaccccccaaaaaccaaaaaaaccccccccaaccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaccccccccccccjjjqrrttxxxxxxyyyvvvvqqqqmmmdddcccc", "abccccccccccccccccccccccccccccccccccaaaaaccaaaaaaacccccccaaaccccccccccaaaccccccccccccccccccaaaccccccccccccccaaccccccccccaaccccjjjqqqtttxxxxxyyyyyvvvqqqqmmmeeeccc", "SbaaccccccaccaaacccccccccccccccccccaaaaacccaaaaaaaaccccaaaaaaaacccccccaaacaaccccccccccccccaaaaaaccccccccccccccccccccccaaaaaaccciiiqqqttxxxxEzyyyyyvvvqqqnnneeeccc", "abaaccccccaaaaaaccccccccccccccccccccccaaccaaaaaaaaaacccaaaaaaaacccccaaaaaaaaccccccccccccccaaaaaaccccccccccccccccccccccaaaaaaccciiiqqtttxxxyyyyyyyvvvvqqqnnneeeccc", "abaaaaacccaaaaaaccccccccccccccccccccccccccaaaaaaaaaaccccaaaaaaccccccaaaaaaaaccccccccccccccaaaaaacccccccccccccccccccccccaaaaacciiiqqqttxxyyyyyyywvvvvrrrqnnneeeccc", "abaaaaacccaaaaaaaccccccccaaaccccccccccccccaacaaaccccccccaaaaaaccccccaaaaaaaccccccccccccccccaaaaaccccccccccccccccccccccaaaaaccciiiqqtttxxxyyyyywwwvrrrrrnnneeecccc", "abaaaccccaaaaaaaaccccccccaaaacccccccccccccccccaaccccccccaaaaaaccccccccaaaaaccccccccccccccccaacaaccccccccccccccccccccccaaaaaccciiqqqttxxxwwwwyyywwrrrrnnnnneeecccc", "abaaaccccaaaaaaaaccccccccaaaacccccaaaaacccccccaaccccccccaaccaacccccccaaacaaacccccccccccccccccccccccccccccccccccccccccccccccccciiqqqtttwwwwwwywwwrrrrnnnnneeeccccc", "abcaaaccccccaaaccccccccccaaaccccccaaaaacccccccccccccaaaaccccccccccccccaacccccccccccccccccccccccccccccccaaaacccccccccccccccccciiiqqqtttssssswwwwwrrrnnnneeeecccccc", "abccaaccccccaaaccccccccccccccccccaaaaaacccccccccccccaaaaccccccccccccccccccccccccccccccccccccccccccccccaaaaacccccccccccccccccciiiqqqqtssssssswwwwrronnnfeeeacccccc", "abcccccccccccccccccccccccccccccccaaaaaacccccccccccccaaaaccccccccccccccccccccccccccccccccccccccccccccccaaaaaaccccccccccccccccciiiiqqppssssssswwwwrroonfffeaacccccc", "abcccccccccccccccccccccccccccccccaaaaaacaaaccccccccccaacccccccccccccccccccccccccccccccccaaacccccccccccaaaaaaccccccccccccccccccihhpppppppppsssssrrroonfffaaaaacccc", "abcccccccccccccccccccccccccccccccccaacccaaaaacccccccccccccccccccccccccccccccccccccccccccaaaaaaccccccccaaaaaccccccccccccccccccchhhhppppppppppssssrooofffaaaaaacccc", "abccccccccaaaccccccccccccccccccccccccccaaaaacccccccccccccccccccccccccccccccccccccaccccaaaaaaaaccccccccccaaacccccccccccccccccccchhhhhhhhhpppposssoooofffaaaaaccccc", "abccccccccaaaacccccaaccccccccccccccccccaaaaaccccccccccccccccccccccccaaccccccccccaaccccaaaaaaaacccccccccccccccccccccccccccccccccchhhhhhhhhgppooooooofffaaaaacccccc", "abaaccccccaaaacccccaacaaccccccccccccccccaaaaacccccccccccccccaacaaccaaaaaaccccaaaaacaacaaaaaaacccccccccccccccccccccccccccccccccccccchhhhhhgggooooooffffaaaaaaccccc", "abaaacccccaaaacccccaaaaaccccccccccccccccaaccccccccccccccccccaaaaaccaaaaaaccccaaaaaaaacccaaaaaccccccccccccccccccccccccaaacaacccccccccccccgggggooooffffccccaacccccc", "abaaaccccccccccccaaaaaaccccaaccccccccccccccccccaaacccccccccccaaaaaaaaaaaacaacccaaaaaccccaacaaacccccccccccccccccccccccaaaaaaccccccccccccccaggggggggfffcccccccccccc", "abaaaccccccccccccaaaaaaaacaaaaccccccccaaaccccccaaaacccccccccaaaaaaaaaaaaaaaaccaaaaacccccaaaaaccccccccccccccaaccccccccaaaaaaccccccccccccccaagggggggfccccccccccccca", "abaacccccccccccccaccaaaaacaaaaccccccccaaaccccccaaaacccccccccaaaaccaaaaaaaaaaccaacaaaccccccaaaccccccccccccaaaaaacccccaaaaaaacccccccccccccaaaaccggggcccccccccccccaa", "abaacccccccccccccccaaacaccaaaacccccaaaaaaaaccccaaaccccccccccccaaccaaaaaaaacccccccaacccccaacaaaaacccccccccaaaaaacccccaaaaaaaaccccccccccccaaaccccccccccccccccaaacaa", "abcccccccccccccccccaaccccccccccccccaaaaaaaaccccccccccccccccccccaaaaaaaaaaaccccccccccccccaaaaaaaacccccccccaaaaaacccccaaaaaaaaccccccccccccacaccccccccccccccccaaaaaa", "abccccccccccccccccccccccccccccccccccaaaaaacccccccccccccccccccccaaaaaaaaaaaaccccccccccccccaaaaaaccccccccccaaaaaccccccccaaacccccccccccccccccccccccccccccccccccaaaaa"];

// let input = ["Sabqponm", "abcryxxl", "accszExk", "acctuvwj", "abdefghi"];

// let input = ["Sbcdef", "lkjihg", "mnopqr", "xwvuts", "yEaaaa"];

let utils = require("../utils");

// parse the input into a 2D array
input = input.map(r => r.split(""));

function getHeight(l){
    if (l == "S") return "a".charCodeAt(0);
    else if (l == "E") return "z".charCodeAt(0);
    else return l.charCodeAt(0);
}

let d_inf = 999999999;

// parse the input to build the initial graph for Dijkstra's algorithm
let graph = [];
input.forEach((row, ri) => {
    row.forEach((cell, ci) =>{
        let adj = utils.adj_squares(input, ri, ci);
        let this_height = getHeight(cell);
        let this_node = {
            id: `${ri}-${ci}`,
            value: cell,
            connections: [],
            distance: cell == "S" ? 0 : d_inf,
            visited: false
        }
        adj.forEach(s => {
            if (getHeight(s.value) <= this_height+1) this_node.connections.push(`${s.row}-${s.col}`)
        });
        graph.push(this_node);
    });
})

// build a list of possible starting points (height a or S)
let starting_point_ids = graph.filter(n => ["a", "S"].includes(n.value)).map(n => n.id);
// console.log(starting_point_ids);

// find the shortest path from each possible starting point to the end using dijkstra's algorithm
let distances = [];
console.log("Computing distances from all possible starting points...")
starting_point_ids.forEach((this_starting_point_id, idx) => {
    // console.log(`${idx+1}/${starting_point_ids.length}`);
    
    let this_graph = utils.copy(graph);

    let keep_going = true;
    let current = this_graph.find(n => n.id == this_starting_point_id); // start at the start
    let this_is_part1 = current.value == "S";
    if (!this_is_part1){
        current.distance = 0;
        let s = this_graph.find(n => n.value == "S");
        s.distance = d_inf;
    }
    let destination = this_graph.find(n => n.value == "E") // find destination
    while (keep_going){
        // evaluate all the (unvisited) nodes connected to the current node, updating their distances if necessary
        current.connections.forEach(connected_node_id => {
            let connected_node = this_graph.find(n => n.id == connected_node_id);
            if (!connected_node.visited){
                new_distance = current.distance + 1;
                connected_node.distance = Math.min(connected_node.distance, new_distance);
            }
        });

        // mark the current node as visited
        current.visited = true;

        // if we've visited the destination, or there are no unvisited nodes with finite distances, we're done
        if (destination.visited || this_graph.filter(n => !n.visited).sort((a,b) => a.distance - b.distance)[0].distance == d_inf){
            keep_going = false;
        }
        else{
            // otherwise, set the new current node to the unvisited node with the smallest distance
            current = this_graph.filter(n => !n.visited).sort((a,b) => a.distance - b.distance)[0];
        }
    }

    // if this is the node marked "S", output this distance as the answer to part 1
    if (this_is_part1) console.log("Part 1:", destination.distance);

    distances.push(destination.distance);
});

let part2 = distances.sort((a,b) => a-b)[0];
console.log("Part 2:", part2);