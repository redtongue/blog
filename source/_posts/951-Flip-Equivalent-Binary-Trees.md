---
title: 951.Flip Equivalent Binary Trees(翻转等价二叉树)
date: 2018-12-02 21:28:21
tags: [code, Tree]
categories: leetcode
---
## Description

For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.

A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.

Write a function that determines whether two binary trees are flip equivalent.  The trees are given by root nodes `root1` and `root2`.

---

我们可以为二叉树 T 定义一个翻转操作，如下所示：选择任意节点，然后交换它的左子树和右子树。

只要经过一定次数的翻转操作后，能使 X 等于 Y，我们就称二叉树 X 翻转等价于二叉树 Y。

编写一个判断两个二叉树是否是翻转等价的函数。这些树由根节点 `root1` 和 `root2` 给出。

题目链接：[https://leetcode.com/problems/flip-equivalent-binary-trees/](https://leetcode.com/problems/flip-equivalent-binary-trees/ "https://leetcode.com/problems/flip-equivalent-binary-trees/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
	Output: true
	Explanation: We flipped at nodes with values 1, 3, and 5.

![flipTree](flipTree.png)

### Note:

- Each tree will have at most 100 nodes.
- Each value in each tree will be a unique integer in the range [0, 99].

## 分析

- 递归对比检测每个节点，每次递归过程分为如下三种可能：
- 1：当前节点都为None，返回True；2：当前节点都不为None，此时若两个节点的值不相等，返回False，反之，递归到下一层，比较左右子结点，分为两种情况（左节点对左节点，右节点对右节点或者左节点对右节点，右节点对左节点），一种情况为True，就返回True；3：也就是一个为None，一个不为None，返回False。
- 递归实现过程如下。

## 参考代码

    Definition for a binary tree node.
    class TreeNode:
    def __init__(self, x):
         self.val = x
         self.left = None
         self.right = None

	class Solution:
    def flipEquiv(self, root1, root2):
        if(root1==None and root2==None):
            return True
        elif(root1!=None and root2!=None):
            if(root1.val!=root2.val):
                return False
            else:
                return (self.flipEquiv(root1.left,root2.left) and self.flipEquiv(root1.right,root2.right)) or (self.flipEquiv(root1.left,root2.right) and self.flipEquiv(root1.right,root2.left))
        else:
            return False
        