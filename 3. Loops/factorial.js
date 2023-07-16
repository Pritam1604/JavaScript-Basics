// To find the factorial of number

// 3! = 1*2*3 
// Which means the loop will start at 1 and continue to n that is provided by the user.
// I will be using iteraritive method(loop method)



function fact(toNum){
    num = 1;
    if(toNum===1 || toNum ===0) return 1
    if(toNum<0 || typeof toNum==="string") return undefined
    else{
        for( let i = 2; i<=toNum;i++){
            num = num * i;
        }
    return num
    }
}