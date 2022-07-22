'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'abbreviation' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function abbreviation(a, b) {
    console.log(a, b)
    const arrayA = Array.from(a)
    const arrayAUpperCase = Array.from(a.toUpperCase())
    const arrayB = Array.from(b)
    let res = 'YES'
    
    const arrayAOnlyUpperCase = arrayA.filter(i => i.toUpperCase() === i)

    arrayB.forEach(item => {
        if(!arrayAUpperCase.includes(item)) {
            res = 'NO'
        }
    })
    
    arrayAOnlyUpperCase.forEach(item => {
        if(!arrayB.includes(item)) {
            res = 'NO'
        }
    })
    
    if(res === 'NO') return 'NO'

    function removeItem() {
        for (let i = 0; i < arrayAUpperCase.length; i++) {
            if(arrayAUpperCase[i] !== arrayB[i]) {
                console.log('ak', arrayAUpperCase[i], arrayB[i])
                arrayAUpperCase.splice(i, 1)
                return removeItem()
            }
        }
    }
    
    removeItem()
    
    if(arrayAUpperCase.toString() === arrayB.toString()) return 'YES'
    
    return 'NO'
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const a = readLine();

        const b = readLine();

        const result = abbreviation(a, b);

        ws.write(result + '\n');
    }

    ws.end();
}
