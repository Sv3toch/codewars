/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
 */

/*
Test:
    howMuchILoveYou(7),"I love you"
    howMuchILoveYou(3),"a lot"
    howMuchILoveYou(6),"not at all"
 */

//Submit

function howMuchILoveYou(nbPetals) {
    let row =["I love you","a little","a lot","passionately","madly","not at all"]
    return row[((nbPetals-1)%6)]
}


console.log(howMuchILoveYou(7))