fn smallest_fn(arr: Vec<i64>) -> usize{
    let mut min = 0;
    for i in 0..arr.len() {
        if arr[i]<arr[min] {
            min = i
        }
    }
    return min
}

fn sorting_fn(mut arr: Vec<i64>, mut sorted: Vec<i64>) -> Vec<i64> {
    if arr.is_empty() {
        return sorted;
    }

    let smallest = smallest_fn(arr.clone());
    sorted.push(arr.remove(smallest));

    return sorting_fn(arr, sorted);

}

// Macros are called with ! in the end
macro_rules! sorting_fn {
    ($arr: expr, $sorted: expr) => {
        sorting_fn($arr, $sorted);
    };

    ($arr: expr) => {
        sorting_fn($arr, Vec::new());
    };
}

fn main(){
    let arr = vec![-1, -2, -3, 1, 4, 8, 9, 7, 3, 9, 8, 1, 2];
    println!("{:?}", sorting_fn!(arr));
}