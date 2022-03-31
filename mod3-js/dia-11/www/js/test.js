'use strict';
function order(words) {
    // ...
    if (words !== '') {
        let wordsSplitted = words.split(' ');
        let wordsOrdered = [];
        for (const word of wordsSplitted) {
            for (let i = 1; i < 10; i++) {
                if (word.includes(i)) wordsOrdered.push(word);
            }
        }
        return wordsOrdered;
    } else {
        return '';
    }
}

console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
