const OPEN_TAG = '🤜'
const CLOSE_TAG = '🤛'

/**
 * 
 * @param {Array} input - the whole array to look at 
 * @param {number} index - the current index of your opening tag 
 * @returns the index of the closing tag
 */
function findClosingOf(input, index){
    const closeMatch = input.indexOf(CLOSE_TAG, index + 1)
    const openMatch = input.indexOf(OPEN_TAG, index + 1)

    //console.log(closeMatch, openMatch, index)

    if(openMatch < closeMatch && openMatch > 0){
        return input.indexOf(CLOSE_TAG, findClosingOf(input, openMatch) + 1)
        
    }else{
        return closeMatch
    }
    
}

/**
 * 
 * @param {Array} input - the whole array to look at 
 * @param {number} index - the current index of your closing tag 
 * @returns the index of the opening tag
 */
function findOpeningOf(input, index){
    const reverse = input.slice().reverse()
    index = input.length - 1 - index 

    function core(input, index){
        const closeMatch = input.indexOf(CLOSE_TAG, index + 1)
        const openMatch = input.indexOf(OPEN_TAG, index + 1)

        //console.log(closeMatch, openMatch, index)

        if(closeMatch < openMatch && closeMatch > 0){
            return input.indexOf(OPEN_TAG, core(input, closeMatch) + 1) 
            
        }else{
            return openMatch
        }
    }
    //console.log(core(reverse, index))
    return input.length - core(reverse, index) - 1 
    

}


const MAX_VALUE = 255
const MIN_VALUE = 0


function translate(input){
    let output = ''
    let inputIndex = 0
    let memIndex = 0
    const mem = [0]
    const parsedInput = Array.from(input)

    const handDictionary = {
        "👉" : () => {
            memIndex++
            if(!mem[memIndex]){
                mem[memIndex] = MIN_VALUE
            }},
        "👈" : () => {memIndex--},
        "👆" : () => {
            mem[memIndex] = mem[memIndex] + 1 > MAX_VALUE ? MIN_VALUE : mem[memIndex] + 1 
        },
        "👇" : () => {
            mem[memIndex] = mem[memIndex] - 1 < MIN_VALUE ? MAX_VALUE : mem[memIndex] - 1 
        },
        "🤜" : () => {
            if(mem[memIndex] === 0){inputIndex = findClosingOf(parsedInput, inputIndex)}
        },
        "🤛" : () => {
            if(mem[memIndex] !== 0){inputIndex = findOpeningOf(parsedInput, inputIndex)}
        },
        "👊" : () => {output += String.fromCharCode(mem[memIndex])}
    }

    while(inputIndex < parsedInput.length){
        const currentChar = parsedInput[inputIndex]

        handDictionary[currentChar]()
        //console.log(handDictionary[currentChar])
        
        inputIndex++
        //console.log(output, inputIndex, currentChar, memIndex, {mem})
        console.log(output, inputIndex, currentChar, memIndex, mem[memIndex])
        if(output){console.log(`Output: ${output}`)}
    }

    return output
}

module.exports = {translate, findClosingOf, findOpeningOf}

//const t1 = Array.from('🤜🤜🤛🤛')
//console.log(findClosingOf(t1, 0))