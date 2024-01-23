class Solution {
    findMinDiff(arr, n, m) {
        //code here
        arr.sort((a, b) => a - b)
        let start = 0
        let end = m - 1
        let minDiff = Number.MAX_SAFE_INTEGER
        while (end < n) {
            let diff = arr[end] - arr[start]
            minDiff = Math.min(diff, minDiff)
            start++
            end++
        }
        return minDiff
    }
}
//Complexity- O(nlogn)