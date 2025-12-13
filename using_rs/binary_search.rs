// fn conditionals(){
//     let age: u16 = 18;
//     let cond: bool = false;
//     if age >= 18 && cond {
//         println!("You can get drive a car")
//     } else if age >= 16 {
//         println!("you can get an ID card")
//     } else {
//         println!("you are still a kid")
//     }
//
//     let res = if cond {"yeah"} else {"no"};
//     println!("{res}");
// }
fn binarySearch(list: &[u64], guess: u64) -> u64{
    let mut max = list.len()-1;
    let mut min = 0;
    let mut res = 0;
    let mut mid = 0;
    while min <= max {
        mid = (min+max)/2;
        res = list[mid];
        if guess == res {
            return res
        }

        if guess < res && mid!=0 {
            max = mid - 1;
        } else {
            min = mid + 1;
        }


    }
    return 0
}

fn main(){
    let a = [1, 2, 3, 4, 6];

    println!("{}", binarySearch(&a, 0));
}