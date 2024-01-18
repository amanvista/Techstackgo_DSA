// The idea is to simply apply the partition process of quicksort. 
// Time complexity: O(N) 
// Auxiliary Space: O(1)


// A JavaScript program to put all negative 
// numbers before positive numbers 

function rearrange(arr, n) {
    let j = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] < 0) {
            if (i != j) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            j++;
        }
    }
}

// A utility function to print an array 
function printArray(arr, n) {
    for (let i = 0; i < n; i++)
        document.write(arr[i] + " ");
}

// Driver code 
let arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9];
let n = arr.length;
rearrange(arr, n);
printArray(arr, n);
