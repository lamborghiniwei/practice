/*
* 数据结构之树
* 2019-09-20
* 试写
* */
 function BinarySearchTree () {
     let Node = function (key) {
        this.key = key;
        this.left = null
        this.right = null
     };
     let root = null
     // first
     this.insert = function (key) {
         let newNode = new Node(key)
         if (root === null) {
             root = newNode //  根节点
         } else {
             insertNode(root, newNode)
         }
     }
     // 非根节点
     let insertNode = function (node, newNode) {
         if (newNode.key < node.key) {
             if (node.left === null) {
                 node.left = newNode
             } else {
                 insertNode(node.left, newNode)
             }
         } else {
             if (node.right === null) {
                 node.right = newNode
             } else {
                 insertNode(node.right, newNode)
             }
         }
     }
 }
