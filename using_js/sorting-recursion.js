function smallest_fn(arr){
    let min = 0;
    for(let i=1; i<=arr.length-1; i++){
        if (arr[min]>arr[i]){
            min = i
        }
    }
    return min
}

function sorting_fn(arr){
    let sorted = [];
    while(arr.length){
        let smallest = smallest_fn(arr)
        sorted.push(arr[smallest])
        arr = arr.filter(item => item!=arr[smallest])
        sorting_fn(arr)
    }
    return sorted
}

console.log(sorting_fn([-1, -2, -3, 1, 4, 8, 9, 7, 3, 9, 8, 1, 2]))
