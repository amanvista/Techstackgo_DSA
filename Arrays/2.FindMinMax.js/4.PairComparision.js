// The idea is that when n is odd then initialize min and max as the first element.
// If n is even then initialize min and max as minimum and maximum of the first
// two elements respectively. For the rest of the elements, pick them in pairs and
// compare their maximum and minimum with max and min respectively. 

// Time Complexity: O(n)
// Auxiliary Space: O(1) as no extra space was needed.

// If n is odd: 3*(n-1)/2
// If n is even: 1 + 3*(n-2)/2 = 3n/2-2, 1 comparison for initializing min and max,
// and 3(n-2)/2 comparisons for rest of the elements


// JavaScript program of above implementation 
function getMinMax(arr) {

    let n = arr.length
    let mx, mn, i

    // If array has even number of elements then 
    // initialize the first two elements as minimum 
    // and maximum 
    if (n % 2 == 0) {
        mx = Math.max(arr[0], arr[1])
        mn = Math.min(arr[0], arr[1])

        // set the starting index for loop 
        i = 2
    }

    // If array has odd number of elements then 
    // initialize the first element as minimum 
    // and maximum 
    else {
        mx = mn = arr[0]

        // set the starting index for loop 
        i = 1
    }

    // In the while loop, pick elements in pair and 
    // compare the pair with max and min so far 
    while (i < n - 1) {
        if (arr[i] < arr[i + 1]) {
            mx = Math.max(mx, arr[i + 1])
            mn = Math.min(mn, arr[i])
        }
        else {
            mx = Math.max(mx, arr[i])
            mn = Math.min(mn, arr[i + 1])
        }

        // Increment the index by 2 as two 
        // elements are processed in loop 
        i += 2
    }

    return [mx, mn]
}