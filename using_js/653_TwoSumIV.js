// Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.
let findTarget = function(root, k) {
    let indices = {};
  for(let i = 0; i<=root.length; i++){
    let r = k - root[i];
indices.set(root[i], i)
  if(indices.has(r)){
    return true;
}else{
    return false;
}
   
} 
};
console.log(findTarget([5,3,6,2,4,null,7], 9))