let i = 0;
let number = []
/**
 * @desc 相邻两数之和等于target并返回下标值
 * @param nums { Array:number } 输入值
 * @param target { Number } 目标值 
 * @return number[]
 */
const twoSum = function(nums, target) {
    i++;
    if(i > nums.length) {
        return number
    }

   target == nums[i-1]+nums[i] ?number.push([i-1,i]) : console.log(number)
   return arguments.callee(nums,target)
};


// test example :
twoSum([1,2,3,4,5,6,7,8,9,0,2,5,5,96,5,5,6,5,56,6,5,6,5,9,9,4,22,10,2,3,6,8,7,41,2,0,2,,
3,2,46,3,36,6,10,0,669,7,88,1],9)