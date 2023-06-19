var search = function(nums, target) {
   if(nums.includes(target) == true){
       return nums.indexOf(target)
   }
   else{
       return -1
   }
};