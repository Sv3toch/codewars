// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.
//
//     Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
//
// How I crossed a mountainous desert the smart way.
//     The directions given to the man are, for example, the following (depending on the language):
//
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
//     or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
//     [North, South, South, East, West, North, West]
// You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
//
//     ["WEST"]
// or
// { "WEST" }
// or
//     [West]
// Other examples:
//     In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
//
//     The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).
//
//     In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].
//
//     Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// function dirReduc(arr){
//     arr = arr.map(n=>n.toUpperCase())
//     const maps={
//         'n':arr.filter(n=>n==='NORTH').length,
//         's':arr.filter(n=>n==='SOUTH').length,
//         'e':arr.filter(n=>n==='EAST').length,
//         'w':arr.filter(n=>n==='WEST').length}
//     const ns=maps['n']-maps['s']>0?"NORTH ".repeat(maps['n']-maps['s']):"SOUTH ".repeat(maps['s']-maps['n'])
//     const ew=maps['e']-maps['w']>0?"EAST ".repeat(maps['e']-maps['w']):"WEST ".repeat(maps['w']-maps['e'])
//     return [...ns.split(' '),...ew.split(' ')].filter(n=>n!=='')
// }

function dirReduc(arr){
    arr = arr.map(n=>n.toUpperCase())
    const maps={
        "NORTH":"SOUTH",
        "SOUTH":"NORTH",
        "EAST":"WEST",
        "WEST":"EAST"}

for (let i=0;i<arr.length;i++){
    if (maps[arr[i]]===arr[i+1]){
        arr.splice(i,2)
        i=-1
    }
}

return arr
}



console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
console.log(dirReduc([]))
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEst"]))
console.log(dirReduc(["NORTH","WEST","SOUTH","EAST"]))


