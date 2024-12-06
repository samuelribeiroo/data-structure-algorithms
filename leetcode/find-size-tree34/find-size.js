class Node {
  constructor(n) {
    this.data = n
    this.left = null
    this.right = null
  }
}

function getSize(root) {
  if (root === null) return 0

  let left = getSize(root.left)
  let rigt = getSize(root.right)

  return left + rigt + 1
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);   
root.right.right = new Node(7);  


console.log(getSize(root));