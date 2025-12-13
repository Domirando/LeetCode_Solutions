function binarySearch(searchTerms, guess) {
    let max = searchTerms.length-1
    let min = 0

    while(min <= max){
        let times = 1

        let mid = Math.trunc((min+max)/2)
        let res = searchTerms[mid]
        if (guess === res){
            console.log("times: " + times)
            return res
        } else {
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

console.log(binarySearch([1, 3, 5, 7, 9, 11, 15], 15))