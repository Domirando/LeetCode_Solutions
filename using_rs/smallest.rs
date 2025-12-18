fn smallest_fn(arr: &[i64]) -> i64{
    let mut min = arr[0];
    for &i in arr.iter() {
        if i<min{
            min = i;
        }
    }
    min
}

fn main(){
    let arr = [-1, -2, 1, 4, 8, 7, 3, 1, 2];
    println!("{} is min", smallest_fn(&arr));
}