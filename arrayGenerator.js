//function should accept two numbers and generate an array between them

function nums(x,y){
    let result = [] //should be an array
    let lowest = Math.min (x,y);
    let highest =Math.max (x,y);
    // using the for loop function
    for (let i = lowest; i <= highest; i++){
        result.push(i)
    }return result;
    

}
console.log(nums(-4,7))