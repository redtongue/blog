---
title: '[nowcoder]二叉搜索树与双向链表'
date: 2018-08-02 14:59:41
tags: [剑指Offer,code,二叉树,链表]
categories: nowcoder
---

## 题目描述

输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。

题目链接： [https://www.nowcoder.com/practice/947f6eb80d944a84850b0538bf0ec3a5](https://www.nowcoder.com/practice/947f6eb80d944a84850b0538bf0ec3a5 "https://www.nowcoder.com/practice/947f6eb80d944a84850b0538bf0ec3a5")

<!-- more -->

## 分析

1. 递归，递归过程中把root结点的左子树的最右结点与root结点相连，把root结点的右子树的最左结点与root相连；
2. 最后返回root的最左结点，既是根节点。

## 参考代码

	class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None  
        self.right = None
	
	class Solution:
    def Convert(self, pRootOfTree):
        # write code here
        if(pRootOfTree==None):
            return
        self.Convert(pRootOfTree.left)
        left=pRootOfTree.left
        if(left):
            while(left.right):
                left=left.right
            pRootOfTree.left,left.right=left,pRootOfTree
        self.Convert(pRootOfTree.right)
        right=pRootOfTree.right
        if(right):
            while(right.left):
                right=right.left
            pRootOfTree.right,right.left=right,pRootOfTree
        while(pRootOfTree.left):
            pRootOfTree=pRootOfTree.left
        return pRootOfTree

	运行时间： 28ms