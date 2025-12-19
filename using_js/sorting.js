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
    let len = arr.length-1
    let sorted = []
    let smallest = smallest_fn(arr)
    while (sorted.length != len){
        sorted.push(arr[smallest])
        arr = arr.filter( item => item != arr[smallest])
        smallest = smallest_fn(arr)
        arr.forEach((element, i) => {
            if(element==arr[smallest] && i!=smallest){
                sorted.push(element)
            }
        })
    }
    return sorted
}

console.log(sorting_fn([-1, -2, 1, 4, 8, 7, 3, 1, 2]))
