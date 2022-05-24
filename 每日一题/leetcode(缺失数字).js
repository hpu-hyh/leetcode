//面试题17.04
var missingNumber = function(nums) {
    for (i = 0; i <= nums.length; i++) {
        if (nums.indexOf(i) == -1) {
            return i
        }
    }
};