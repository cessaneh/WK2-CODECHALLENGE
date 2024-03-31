//function should accept string as input
//output should be "tHE qUICK bROWN fOX"

function charSwap (character){
    let result = "";// should be a string
    //using the for loop.
    for (let i = 0; i < character.length; i++){ //using the if statements.
        if (character[i] === character[i].toUpperCase()){
            result += character[i].toLowerCase()
        }else{
            result += character[i].toUpperCase()

        }
    }
    return result;
}
let character ="The Quick Brown Fox"
console.log(charSwap(character))

