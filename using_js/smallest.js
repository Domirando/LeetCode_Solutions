function smallest_fn(arr){
    let sorted = [];
    let min = 0;
    for(let i=1; i<=arr.length-1; i++){
        if (arr[min]>arr[i]){
            min = i
        }
    }
    return arr[min]
}
console.log("min:"+smallest_fn([-1, -2, 1, 4, 8, 7, 3, 1, 2]))
