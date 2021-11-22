class Node {
  constructor(element, parent = null) {
    this.element = element
    this.parent = parent
    this.left = null
    this.right = null
  }
}

class Bst {
  constructor() {
    this.root = null
  }

  add(element) {
    if (this.root === null) {
      const node = new Node(element)
      this.root = node
      return
    }

    let current = this.root,
      diffVal,
      preNode
    while (current) {
      preNode = current
      diffVal = current.element - element
      current = diffVal < 0 ? current.left : current.right
    }

    const node = new Node(element, preNode)
    preNode[diffVal < 0 ? 'left' : 'right'] = node
  }

  // 前序遍历
  preTraversal(cb) {
    function traversal(node) {
      if (node === null) return
      cb(node)
      traversal(node.left)
      traversal(node.right)
    }
    traversal(this.root)
  }

  // 中序遍历
  innerTraversal(cb) {
    function traversal(node) {
      if (node === null) return

      traversal(node.left)
      cb(node)
      traversal(node.right)
    }
    traversal(this.root)
  }

  // 后序遍历
  postTraversal(cb) {
    function traversal(node) {
      if (node === null) return

      traversal(node.left)
      traversal(node.right)
      cb(node)
    }

    traversal(this.root)
  }

  layerTraversal(cb) {
    let stack = [this.root],
      curr = null
    while ((curr = stack.shift())) {
      if (curr.left) stack.push(curr.left)
      if (curr.right) stack.push(curr.right)

      cb(curr)
    }
  }
}

const ll = new Bst()
;[10, 8, 24, 14, 20, 6, 3, 9].forEach((item) => {
  ll.add(item)
})
ll.innerTraversal((node) => {
  console.log(node.element)
})
