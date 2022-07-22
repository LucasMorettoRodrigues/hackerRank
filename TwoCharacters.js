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
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
    
function getRepeated(sArr) {
    let lettersToRemove = []
    
    for (let i in sArr) {
        if(sArr[i] === sArr[Number(i)+1]) {
            if(!lettersToRemove.find((item) => item === sArr[i])) {
                lettersToRemove.push(sArr[i])
            }
        }
    }
    
    return lettersToRemove
}

function alternate(s) {
    const letters = [... new Set(s)]
    let sArr = [...s]
    let lettersToRemove = getRepeated(sArr)
    
    if(lettersToRemove.length == 1) {
        sArr = sArr.filter((item) => item !== lettersToRemove[0])
        lettersToRemove = getRepeated(sArr)
        
        if(lettersToRemove.length >= 2) return 0
        
        if(lettersToRemove.length == 1) {
            sArr = sArr.filter((item) => item !== lettersToRemove[0])
            lettersToRemove = getRepeated(sArr)
                        
            if(lettersToRemove.length >= 1) return 0
            
            return sArr.length 
        }
    }
    
    if(lettersToRemove.length == 2) {
        sArr = sArr.filter(letter => !lettersToRemove.includes(letter))
        lettersToRemove = getRepeated(sArr)
        
        if(lettersToRemove.length >= 1) return 0
        
        return sArr.length 
    }
    
    if(lettersToRemove.length >= 3) return 0
    
    for(let i of new Set([...sArr])) {
        
        if(new Set([...sArr]).size === 2) {
            return sArr.length
        }
        
        const auxSArr = sArr.filter(letter => letter !== i)
        lettersToRemove = getRepeated(auxSArr)
        if(lettersToRemove.length === 0) {
            sArr = auxSArr
        }
    }
    
    return sArr.length
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const s = readLine();

    const result = alternate(s);

    ws.write(result + '\n');

    ws.end();
}
