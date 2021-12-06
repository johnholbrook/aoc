const input = [2,4,1,5,1,3,1,1,5,2,2,5,4,2,1,2,5,3,2,4,1,3,5,3,1,3,1,3,5,4,1,1,1,1,5,1,2,5,5,5,2,3,4,1,1,1,2,1,4,1,3,2,1,4,3,1,4,1,5,4,5,1,4,1,2,2,3,1,1,1,2,5,1,1,1,2,1,1,2,2,1,4,3,3,1,1,1,2,1,2,5,4,1,4,3,1,5,5,1,3,1,5,1,5,2,4,5,1,2,1,1,5,4,1,1,4,5,3,1,4,5,1,3,2,2,1,1,1,4,5,2,2,5,1,4,5,2,1,1,5,3,1,1,1,3,1,2,3,3,1,4,3,1,2,3,1,4,2,1,2,5,4,2,5,4,1,1,2,1,2,4,3,3,1,1,5,1,1,1,1,1,3,1,4,1,4,1,2,3,5,1,2,5,4,5,4,1,3,1,4,3,1,2,2,2,1,5,1,1,1,3,2,1,3,5,2,1,1,4,4,3,5,3,5,1,4,3,1,3,5,1,3,4,1,2,5,2,1,5,4,3,4,1,3,3,5,1,1,3,5,3,3,4,3,5,5,1,4,1,1,3,5,5,1,5,4,4,1,3,1,1,1,1,3,2,1,2,3,1,5,1,1,1,4,3,1,1,1,1,1,1,1,1,1,2,1,1,2,5,3];

function range(n){
    return [...Array(n).keys()];
}

// initialize the array of days
let days = [];
let simulation_length = 257; // days
range(simulation_length).forEach(dnum => {
    days.push({
        day: dnum,
        spawns_today: input.filter(n => n==dnum).length
    });
});

// simulate each day
days[0].num_fish = input.length;
days.forEach((day, i) => {
    // for each fish spawning today, it will spawn again in 
    // 7 days, and the fish it spawns will itself spawn in 9 days
    if (i+7 < simulation_length) days[i+7].spawns_today += day.spawns_today;
    if (i+9 < simulation_length) days[i+9].spawns_today += day.spawns_today;

    // set the total number of fish for the next day
    if (i+1 < simulation_length) days[i+1].num_fish = day.num_fish + day.spawns_today;

    if (i == 80) console.log(`Part 1: ${day.num_fish}`);
    if (i == 256) console.log(`Part 2: ${day.num_fish}`);
});