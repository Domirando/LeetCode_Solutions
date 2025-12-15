function binarySearch(searchTerms, guess) {
    let max = searchTerms.length-1
    let min = 0
    let times = 0

    while(min <= max){
        let mid = Math.trunc((min+max)/2)
        let res = searchTerms[mid]
        if (guess === res){
            return times
        }else{
            times++
        }

        if (guess < res && mid !== 0) {
            max = mid - 1
        } else {
            min = mid + 1
        }
    }
    return undefined;
}

let t = binarySearch([1, 3, 5, 7, 9, 11, 15], 15)
if (t !== undefined) {
    console.log("took O(log2 =", t, ") times")
}else{
    console.log("Not in the array")
}