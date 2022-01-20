/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 请必须使用时间复杂度为 O(log n) 的算法。
 * @param {number[]} nums 无重复元素的升序排列数组；-10`4` <= nums[i] <= 10`4`
 * @param {number} target -104 <= target <= 104
 * @return {number}
 */

// 二分查找
// let searchInsert = function (nums, target) {
//   const n = nums.length;
//   let left = 0,
//     right = n - 1,
//     ans = n;
//   while (left <= right) {
//     let mid = ((right - left) >> 1) + left;
//     if (target <= nums[mid]) {
//       ans = mid;
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return ans;
// };
// // 我的二分查找
// function searchInsert0(nums, target) {
//   const length = nums.length;
//   let top = 0;
//   let end = length - 1;
//   let mid = length;
//   while (top <= end) {
//     // fixme 这里用除号会有余数
//     mid = ((end - top) >> 1) + top; // 求出中间数后，top作为第0位开始数mid个数，所以+上top
//     if (target === nums[mid]) return mid;
//     if (target < nums[mid]) end = mid - 1;
//     if (target > nums[mid]) top = mid + 1;
//   }
//   return end + 1;
// }
//
// /**
//  * 这道题目的前提是数组是有序数组，这也是使用二分查找的基础条件。
//  * 以后大家只要看到面试题里给出的数组是有序数组，都可以想一想是否可以使用二分法。
//  **/
//
// // 暴力破解
// function searchInsert1(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) return i;
//   }
//   return nums.length;
// }
// // 我的暴力破解
// let searchInsert2 = function (nums, target) {
//   const index = nums.findIndex((num) => num === target);
//   if (index >= 0) return index;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[0] > target) return 0;
//     if (nums[nums.length - 1] < target) return nums.length;
//     if (nums[i] < target && nums[i + 1] > target) return i + 1;
//   }
// };
// const num = [1, 3, 5, 6];
// const target = 2;
// const res = searchInsert(num, target);
// const res0 = searchInsert0(num, target);
// const res1 = searchInsert1(num, target);
// const res2 = searchInsert2(num, target);
// console.log('二分法', res);
// console.log('我的二分法', res0);
// console.log('暴力破解', res1);
// console.log('我的暴力破解', res2);
//
// // 关于((end - top) >> 1) + top 和 (end + top) >> 1
// function why() {
//   const end = 10;
//   const top = 0;
//   for (let end of num) {
//     const mid = ((end - top) >> 1) + top;
//     const mid2 = (end + top) >> 1;
//     console.log(mid);
//     console.log(mid2);
//   }
// }
