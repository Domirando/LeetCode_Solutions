let twoSum = function(numbers, target) {
    let indices = new Map();
    for(let i = 0; i <= numbers.length; i++){
        let r = target - numbers[i];
    if(indices.has(r)){
       return [indices.get(r)+1, i+1];
    }
       indices.set(numbers[i], i);
}
};
console.log(twoSum([2,7,11,15], 9))
