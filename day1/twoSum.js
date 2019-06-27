let i = 0;
let number = []
/**
 * @desc twoSum 相邻两数之和等于target并返回下标值
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



// ----- 升级版-----------
/**
 * @desc 数组中任意两个数字之和等于target 并且返回当前下标值
 * @param {number[]} nums 输入值
 * @param {number} target 目标值
 * @return Array { string[] }  返回值
 */
((nums,target) => {
   let number = []
   let aim = []
   nums.map((item,index) => {
       let otherwise = target - nums[index]
       let equal = nums.indexOf(otherwise)
       if(equal > -1 && equal != index) {
           number.push([index,equal])
       }
   })

  // 排序
  number.map((item,index) => {
      return new Set([][index] = item.sort())
  })
  
 console.log(number)
  // 去重
  number.map(item => {
    aim.push(item.toString())
     
 })
    
 return Array.from(new Set(aim))

})([1,2,3,6,4,-41,45,4,,1,65,65,45,543,],4)




