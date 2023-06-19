var isMonotonic = function(nums) {
  let a = true;
  let b= true;


  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      a = false;
    } else if (nums[i] < nums[i + 1]) {
      b = false;
    }
  }

  
  return a || b;
};