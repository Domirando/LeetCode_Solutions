let result = [];
let two_numbers = function(nums, target){ for(let i = 0; i <= nums.length; i++){
for(let j = i+1; j <= nums.length; j++){
 if(nums[i]+nums[j]==target){
   return [i, j]; 
}  }
}
}
console.log(two_numbers([22, 7, 11, 2], 9))
