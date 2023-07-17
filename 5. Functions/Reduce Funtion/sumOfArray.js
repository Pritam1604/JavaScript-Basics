// to use reduce method to sum the elements present in the array 


function sum(arr){
    return arr.reduce((sum,num) => sum+num)
}

// 2. A function that uses the reduce method to find the product of the numbers in an array.


function product(arr){
    return arr.reduce((perviousProduct,num) => perviousProduct*num)
}

// 3. Function to find the maximum value in an array.

function max(arr){
    if(arr.length===0) return "There is no value in the Array."
    return arr.reduce((max,num)=>{
        if(max>num) return max
        else return num
    })
}

// 4. Find the minimum value in an array.

function min(arr){
    if (arr.length===0) return "The array doesn't contain any values"
    return arr.reduce((min,num)=>{
        if(min<num) return min
        else return num
    })
}

// 5. Find the average of an array of numbers.

function average(arr){
    if(arr.length===0) return "The array doesn't contain any values"
    return arr.reduce((sum,currentNum)=>(sum+currentNum),0)/arr.length;
}


// 6. **Find the first occurrence of a value in an array.**



// 7. **Find the last occurrence of a value in an array.**








