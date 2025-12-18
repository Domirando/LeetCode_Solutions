fn smallest_fn(arr: &mut [i64]) -> i64{
    let mut min = arr[0];
    for &mut i in arr.iter_mut() {
        if i<min{
            min = i;
        }
    }
    return min
}

fn main(){
    let mut arr = [-1, -2, 1, 4, 8, 7, 3, 1, 2];
    println!("{} is min", smallest_fn(&mut arr));
}