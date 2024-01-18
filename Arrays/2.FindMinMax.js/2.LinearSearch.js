// In this method, the total number of comparisons is 1 + 2*(n-2) in 
// the worst case and 1 + (n-2) in the best case. 

/* Class Pair is used to return two values from getMinMax() */
function getMinMax(arr, n) {
    minmax = new Array();
    var i;
    var min;
    var max;

    /*If there is only one element then return it as min and max both*/
    if (n == 1) {
        minmax.max = arr[0];
        minmax.min = arr[0];
        return minmax;
    }

    /* If there are more than one elements, then initialize min 
and max*/
    if (arr[0] > arr[1]) {
        minmax.max = arr[0];
        minmax.min = arr[1];
    } else {
        minmax.max = arr[1];
        minmax.min = arr[0];
    }

    for (i = 2; i < n; i++) {
        if (arr[i] > minmax.max) {
            minmax.max = arr[i];
        } else if (arr[i] < minmax.min) {
            minmax.min = arr[i];
        }
    }

    return minmax;
}