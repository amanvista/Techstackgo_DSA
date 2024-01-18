// Here, we will use the famous Dutch National Flag Algorithm for two “colors”.
// The first color will be for all negative integers and the second color will be
// for all positive integers. We will divide the array into three partitions with
// the help of two pointers, low and high.

// ar[1…low-1] negative integers
// ar[low…high] unknown
// ar[high+1…N] positive integers
// Now, we explore the array with the help of low pointer,
// shrinking the unknown partition, and moving elements to their
// correct partition in the process. We do this until we have explored
// all the elements, and size of the unknown partition shrinks to zero.

// Time complexity: O(N)
// Auxiliary Space: O(1)

// Using Dutch National Flag Algorithm. 
function reArrange(arr, n) {
    let low = 0, high = n - 1
    while (low < high) {
        if (arr[low] < 0)
            low += 1
        else if (arr[high] > 0)
            high -= 1
        else {
            let temp = arr[low]
            arr[low] = arr[high]
            arr[high] = temp
        }
    }
} 