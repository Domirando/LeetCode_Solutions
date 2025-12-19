function smallest_fn(arr){
    let min = 0;
    for(let i=1; i<=arr.length-1; i++){
        if (arr[min]>arr[i]){
            min = i
        }
    }
    return arr[min]
}

function sorting_fn(arr){
    let len = arr.length-1
    let sorted = []
    let smallest = smallest_fn(arr)
    while (sorted.length != len){
        sorted.push(smallest)
        arr = arr.filter( i => i != smallest)
        smallest = smallest_fn(arr)
    }
    return sorted
}

console.log(sorting_fn([-1, -2, 1, 4, 8, 7, 3, 1, 2]))
