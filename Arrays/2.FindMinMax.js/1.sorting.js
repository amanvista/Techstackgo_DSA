// Function to find the minimum and maximum elements in an array
function getMinMax(arr) {
    // Create an object to store the minimum and maximum values
    const minmax = {};
 
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
 
    // Store the minimum element as the first element of the sorted array
    minmax.min = arr[0];
    // Store the maximum element as the last element of the sorted array
    minmax.max = arr[arr.length - 1];
 
    // Return the object containing the minimum and maximum values
    return minmax;
}
 