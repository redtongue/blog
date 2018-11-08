---
title: '[nowcoder]重建二叉树'
date: 2018-07-28 21:16:09
tags: [剑指Offer,code,二叉树]
categories: nowcoder
---

## 题目描述

输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

题目链接： [https://www.nowcoder.com/practice/8a19cbe657394eeaac2f6ea9b0f6fcf6](https://www.nowcoder.com/practice/8a19cbe657394eeaac2f6ea9b0f6fcf6 "https://www.nowcoder.com/practice/8a19cbe657394eeaac2f6ea9b0f6fcf6")

<!-- more -->

## 分析

1. 如题目中所给的例子，前序：{1,2,4,7,3,5,6,8}，中序：{4,7,2,1,5,3,8,6}；
2. 前序是“根左右”，中序是“左根右”，所以{1}是根节点，左子树的前序是{2,4,7}，左子树的中序是{4,7,2}，右子树的前序{3,5,6,8}，右子树的中序是{5,3,8,6}，这是一次迭代过程；
3. 以此类推，返回根节点。

## 参考代码

	class TreeNode:
    def __init__(self, x):
         self.val = x
         self.left = None
         self.right = None

	class Solution:
    # 返回构造的TreeNode根节点
    def reConstructBinaryTree(self, pre, tin):
        root=None
        if(len(pre) != 0 and len(tin)!=0):
            root=TreeNode(pre[0])
            index=tin.index(pre[0])
            root.left=self.reConstructBinaryTree(pre[1:index+1],tin[:index])
            root.right=self.reConstructBinaryTree(pre[index+1:],tin[index+1:])
        return root

	运行时间： 45ms
	占用内存： 5856k