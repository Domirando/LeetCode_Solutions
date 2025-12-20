fn smallest_fn(arr: &[i64]) -> usize{
    let mut min = 0;
    for i in 0..arr.len() {
        if arr[i]<arr[min]{
            min = i;
        }
    }
    min
}

fn sorting_fn(arr: &[i64]) -> Vec<i64>{
    let mut sorted = Vec::new();
    let mut smallest = smallest_fn(arr);
    while sorted.len() != arr.len() {
        sorted.push(arr[smallest]);
        arr = arr.iter().filter(|&item| {
            if item!=&arr[smallest]   {
                return item
            }
        }).cloned().collect();
        smallest = smallest_fn(arr);
        arr.into_iter().for_each(|(index, item)| {
            if *item == &arr[smallest] && *index != smallest {
                sorted.push(item);
            }
        });
    }
    sorted
}

fn main(){
    let arr = [-1, -2, 1, 4, 8, 7, 3, 1, 2];
    println!("{:?} is sorted", sorting_fn(&arr));
}