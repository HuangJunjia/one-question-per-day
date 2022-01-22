/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let index = nums.length, left = 0, right = index - 1
    while (left <= right) {
        const middle = left + Math.floor((right - left) >> 1)
        if (target > nums[middle]) {
            left = middle + 1
        } else {
            index = middle
            right = middle - 1
        }
    }
    return index
}