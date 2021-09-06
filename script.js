// THE GOAL OF THIS FUNCTION
// Function accepts sorted array of integers and a number
// Returns the index of a value from array that matches the number
// Divide and Conquer approach is suggested when dealing with larger set of data
// If you are given a large set of array, what you can do is find the middle number in the array
// Then separate it into a set. Compare the last value the from the set, then check if it's greater or equal to the number
// If its greater, then you can discard from the search the entire set since it a sorted array, the preceding numbers are
// expected to be lower, then do the same process.

// 1st Solution - Time complexity O(N) - Linear Search
// function search(arr, val){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === val){
//             return i;
//         }
//     }
//     return -1;
// }


// 2nd Solution - Time complexity Log(N) - Binary Search!
function search(arr, val){

    let min = 0; // 
    let max = arr.length - 1; 

    while (min <= max) { 
        let middle = Math.floor((min + max) / 2); 
        let currentElement = arr[middle]; 

        if (currentElement < val) {                     
            min = middle + 1;             
        }
        else if (currentElement > val){ 
            max = middle - 1;  
        }
        else {
            return middle;
        }
    }
    return -1;
}
console.log(search([1,2,3,4,5,6], 6));
