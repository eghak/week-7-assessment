function addToZero(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i] === 0) {
      return true;
    } else {
      return false;
    }
  }
}

//runtime: O(n)
