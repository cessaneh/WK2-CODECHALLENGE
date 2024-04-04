// accept function that takes an array of numbers as input  
//returns a new array containing only the prime numbers from the original array.

let nums = [1,2,3,4,5,6,7,8,9,10];
function numPrime(numbers){
    // use if.
    if (numbers <= 1){
        return false;
    }// using the for loop
    //used Math.sqrt
    for (let i = 2; i <= Math.sqrt(numbers); i++){
        if (numbers % i === 0){
            return false;
        }
    }return true;
}
function filterPrime(values){
    return values.filter(numbers => numPrime(numbers))
}
console.log(filterPrime(nums))