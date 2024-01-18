// Time Complexity: O(n*log(n)), Where n is the length of the given array.
// Auxiliary Space: O(1)


// JavaScript Code for the same approach 

function move(arr) {
    arr.sort();
}

// driver code 

let arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9];
move(arr);
for (let e of arr)
    document.write(e, " "); 