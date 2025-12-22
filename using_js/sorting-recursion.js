function smallest_fn(arr){
    let min = 0;
    for(let i=1; i<=arr.length-1; i++){
        if (arr[min]>arr[i]){
            min = i
        }
    }
    return min
}

function sorting_fn(arr, sorted = []){
    if (!arr.length) return sorted

    let smallest = smallest_fn(arr)
    sorted.push(arr[smallest])
    arr.splice(smallest, 1)

    return sorting_fn(arr, sorted)
}

console.log(sorting_fn([-1, -2, -3, 1, 4, 8, 9, 7, 3, 9, 8, 1, 2]))
