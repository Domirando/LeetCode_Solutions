// Macros are called with ! in the end
macro_rules! sorting_fn {
    ($arr: expr, $sorted: expr) => {
        sorting_fn($arr, $sorted);
    };

    ($arr: expr) => {
        sorting_fn($arr, []);
    };
}

fn smallest_fn(arr: &[i64]) -> usize{
    return 0
}

fn sorting_fn(arr: &[i64], sorted: [i64] = []) -> [i64] {

    return
}

fn main(){

}