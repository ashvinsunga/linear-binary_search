// THE GOAL OF THIS FUNCTION
// Function accepts sorted array of integers and a number
// Returns the index of a value from array that matches the number

// 1st Solution - Time complexit O(N)
function search(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}


console.log(search([1,2,3,4,5,6], 4));