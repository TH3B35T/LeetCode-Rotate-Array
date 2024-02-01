/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    k %= n;
    // Remove the first k elements and store them
    nums.unshift(...nums.splice(-k))
    
};
