//function should accept two numbers and generate an array between them

function nums(x,y){
    let result = []
    let lowest = Math.min (x,y);
    let highest =Math.max (x,y);
    for (let i = lowest; i <= highest; i++){
        result.push(i)
    }return result;
    

}
console.log(nums(-4,7))