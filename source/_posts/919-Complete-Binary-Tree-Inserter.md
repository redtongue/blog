---
title: 919.Complete Binary Tree Inserter
date: 2018-10-08 10:58:04
tags: [code]
categories: leetcode
---
## Description

A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.

Write a data structure CBTInserter that is initialized with a complete binary tree and supports the following operations:

- CBTInserter(TreeNode root) initializes the data structure on a given tree with head node root;
- CBTInserter.insert(int v) will insert a TreeNode into the tree with value node.val = v so that the tree remains complete, and returns the value of the parent of the inserted TreeNode;
- CBTInserter.get_root() will return the head node of the tree.

题目链接：[https://leetcode.com/problems/complete-binary-tree-inserter/](https://leetcode.com/problems/complete-binary-tree-inserter/ "https://leetcode.com/problems/complete-binary-tree-inserter/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: inputs = ["CBTInserter","insert","get_root"], inputs = [[[1]],[2],[]]
	Output: [null,1,[1,2]]

### Example 2:

	Input: inputs = ["CBTInserter","insert","insert","get_root"], inputs = [[[1,2,3,4,5,6]],[7],[8],[]]
	Output: [null,3,4,[1,2,3,4,5,6,7,8]]


### Note:

- The initial given tree is complete and contains between 1 and 1000 nodes.
- CBTInserter.insert is called at most 10000 times per test case.
- Every value of a given or inserted node is between 0 and 5000.

## 分析

1. updating

## 参考代码

	class CBTInserter(object):
    def __init__(self, root):
        self.deque = collections.deque()
        self.root = root
        q = collections.deque([root])
        while q:
            node = q.popleft()
            if not node.left or not node.right:
                self.deque.append(node)
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)

    def insert(self, v):
        node = self.deque[0]
        self.deque.append(TreeNode(v))
        if not node.left:
            node.left = self.deque[-1]
        else:
            node.right = self.deque[-1]
            self.deque.popleft()
        return node.val

    def get_root(self):
        return self.root