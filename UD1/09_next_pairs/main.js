const assert = require('assert').strict;

function nextPairs(value) {
    if (value %2 ==0) {
        return console.log("PAR");
    } else {
        return console.log("IMPAR");
    }
}

//OTRA FORMA
/*function nextPairs(value) {
    if (value %2 ==1) {
        result =[value-1, value+1];
    } else {
       result =[value-2, value+2];
    }
}*/
assert.deepStrictEqual(nextPairs(3), [2,4])
assert.deepStrictEqual(nextPairs(4), [2,6])