// The owner of a certain chatbox app has came under fire recently for a drama regarding the age old debate of pancakes or waffles. Because of this, he came to you in order to hide any words regarding pancakes.
//
//     The following words are the words that he is looking to censor by replacing it with an equal amount of astricks (*):
//
// pancakes, flapjacks, slapjacks, hotcakes
// In conjunction to that, the following words shall be highlighted with a double astricks (**):
//
// waffles, crepes, blintzes
// Finally, as long as there is no mention of a waffle relating word in the sentence, also censor the following word unless, there is a waffle relating word then highlight it:
//
//     syrup, honey, jam, butter, chocolate, margarine
// Examples:
//
//     print(censor("I like waffles with chocolate")) --> "I like **waffles** with **chocolate**"
//
// print(censor("I like pancakes with syrup" --> "I like ******* with *****"
//
// print(censor("The debate between pancakes and waffles is as sweet as honey" --> "The debate between ******** and **waffles** is as sweet as **ho


function censor(sentence) {
    const pancake = ['pancakes', 'flapjacks', 'slapjacks', 'hotcakes']
    const waf = ['waffles', 'crepes', 'blintzes']
    const toping = ['syrup', 'honey', 'jam', 'butter', 'chocolate', 'margarine']

    sentence = sentence.split(' ')
    const trueWaf = Boolean(sentence.filter(n => waf.includes(n)).length)
    console.log(trueWaf)
    return sentence.map(n => {
        if (pancake.includes(n.toLowerCase())) return '*'.repeat(n.length)
        if (waf.includes(n.toLowerCase())) return `**${n}**`
        if (!trueWaf && toping.includes(n.toLowerCase())) return '*'.repeat(n.length)
        if (trueWaf && toping.includes(n.toLowerCase()))return `**${n}**`
        return n
    }).join(' ')
}


console.log(censor('pancakes flapjacks slapjacks hotcakes'))
console.log(censor('waffles crepes blintzes'))
console.log(censor('syrup honey jam chocolate butter margarine'))
console.log(censor('I like pancakes'))
console.log(censor('I like waffles with chocolate'))