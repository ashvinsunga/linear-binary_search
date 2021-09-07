// THE GOAL OF THIS FUNCTION
// Function accepts sorted array and a number
// Returns the index of a value from array that matches the number

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
// Pseudocode
// - This function accepts a sorted array and a value
// - Create a left pointer at the start of the array, and a
//  right pointer at the end of the array
// - While the left pointer comes before the right pointer;
//      - Create pointer in the middle
//      - If you find the value you want, return the index
//      - if the value is too small, move the left pointer up
//      - if the value is too large, move the right pointer down
// - If you never find the value, return -1

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
