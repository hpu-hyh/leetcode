/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * NO.215（堆排序）
 */
var findKthLargest = function (nums, k) {
  function heapSort(nums) {
    buildMaxHeap(nums);
    for (let i = nums.length - 1; i > 0; i--) {
      swap(nums, i, 0);
      adjusMaxHeap(nums, i, 0);
    }

    return nums[nums.length - k];
  }
  function buildMaxHeap(nums) {
    let iParent = Math.floor(nums.length / 2) - 1;
    for (let i = iParent; i >= 0; i--) {
      adjusMaxHeap(nums, nums.length, i);
    }
  }
  function adjusMaxHeap(nums, maxSize, index) {
    let max, left, right;
    while (true) {
      max = index;
      left = index * 2 + 1;
      right = index * 2 + 2;
      if (left < maxSize && nums[left] > nums[max]) max = left;
      if (right < maxSize && nums[right] > nums[max]) max = right;
      if (index !== max) {
        swap(nums, max, index);
        index = max;
      } else break;
    }
  }

  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return heapSort(nums);
};
