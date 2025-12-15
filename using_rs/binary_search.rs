fn binarySearch(list: &[u64], guess: u64) -> Option<String>{
    let mut max = list.len()-1;
    let mut min = 0;
    let mut res = 0;
    let mut mid = 0;
    let mut times = 0;
    while min <= max {
        mid = (min+max)/2;
        res = list[mid];
        if guess == res {
            return Some(times.to_string())
        } else {
            times = times+1
        }

        if guess < res && mid!=0 {
            max = mid - 1;
        } else {
            min = mid + 1;
        }


    }
    return None
}

fn main(){
    let a = [1, 2, 3, 4, 6];
    match binarySearch(&a, 7) {
        Some(t) => {
            println!("took O(log2 = {}) times", t);
        }
        None => {
            println!("Not in the array");
        }
    }
}