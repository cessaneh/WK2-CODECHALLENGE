let nums = [1,2,3,4,5,6,7,8,9,10];
function numPrime(numbers){
    if (numbers <= 1){
        return false;
    }
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