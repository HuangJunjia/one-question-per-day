/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function (nums, target) {
//   // 头索引
//   let head = 0;
//   // 尾索引
//   let tail = nums.length - 1;
//   // 要插入的下标，或者是被找到的下标
//   let idx = 0;
//   while (true) {
//     // 三种特殊情况
//     if (head === nums.length - 1) {
//       target > nums[head] ? (idx = head + 1) : (idx = head);
//       return idx;
//     }
//     if (tail === 0) {
//       target < nums[tail] ? (idx = 0) : (idx = tail + 1);
//       return idx;
//     }
//     if (head === tail) {
//       return head;
//     }
//     idx = Math.floor((head + tail) / 2);
//     let val = nums[idx];
//     if (target === val) {
//       return idx;
//     } else if (target > val) {
//       head = idx + 1;
//     } else if (target < val) {
//       tail = idx;
//     }
//   }
// };
