 function MaxSum(nums) {
    nums.sort((a,b) => a-b)
    var sum = 0
    

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0){
         sum += nums[i]
        }
    }

    return sum
};
MaxSum([1,4,3,2])