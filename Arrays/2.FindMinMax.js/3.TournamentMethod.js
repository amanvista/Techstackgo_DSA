// The idea is to divide the array into two parts and compare the maximums and
// minimums of the two parts to get the maximum and
// the minimum of the whole array.

// Time Complexity: O(n)
// Auxiliary Space: O(log n) as the stack space will be filled for
// the maximum height of the tree formed during recursive calls same as a binary tree.


// Thus, the approach does 3n/2 -2 comparisons if 
// n is a power of 2. And it does more than 3n/2 -2 comparisons 
// if n is not a power of 2.


var arr = [1000, 11, 445, 1, 330, 3000];

// Javascript program of above implementation

/* Class Pair is used to return two values from getMinMax() */
class Pair {
    constructor() {
        this.min = -1;
        this.max = 10000000;
    }
}

function getMinMax(arr, low, high) {
    var minmax = new Pair();
    var mml = new Pair();
    var mmr = new Pair();
    var mid;

    // If there is only one element
    if (low == high) {
        minmax.max = arr[low];
        minmax.min = arr[low];
        return minmax;
    }

    /* If there are two elements */
    if (high == low + 1) {
        if (arr[low] > arr[high]) {
            minmax.max = arr[low];
            minmax.min = arr[high];
        } else {
            minmax.max = arr[high];
            minmax.min = arr[low];
        }
        return minmax;
    }

    /* If there are more than 2 elements */
    mid = parseInt((low + high) / 2);
    mml = getMinMax(arr, low, mid);
    mmr = getMinMax(arr, mid + 1, high);

    /* compare minimums of two parts */
    if (mml.min < mmr.min) {
        minmax.min = mml.min;
    } else {
        minmax.min = mmr.min;
    }

    /* compare maximums of two parts */
    if (mml.max > mmr.max) {
        minmax.max = mml.max;
    } else {
        minmax.max = mmr.max;
    }

    return minmax;
}