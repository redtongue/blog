---
title: '[nowcoder]平衡二叉树'
date: 2018-08-02 17:45:15
tags: [剑指Offer,code,二叉树]
categories: nowcoder
---

## 题目描述

输入一棵二叉树，判断该二叉树是否是平衡二叉树。

题目链接： [https://www.nowcoder.com/practice/8b3b95850edb4115918ecebdf1b4d222](https://www.nowcoder.com/practice/8b3b95850edb4115918ecebdf1b4d222 "https://www.nowcoder.com/practice/8b3b95850edb4115918ecebdf1b4d222")

<!-- more -->

## 分析

1. 递归：如果当前结点为空，返回平衡判断True以及深度0；
2. 如果左右平衡判断出现False，则返回False；
3. 如果左右子树的深度差值大于1，则返回False；
4. 否则返回平衡判断True以及深度（左右子树最大深度+1）

## 参考代码

	class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None
	
	class Solution:
    def IsBalanced_Solution(self, pRoot):
        # write code here
        def judge(root):
            if(not root):
                return [True,0]
            left_judge,left=judge(root.left)
            right_judge,right=judge(root.right)
            if(not left_judge or not right_judge):
                return [False,0]
            if(abs(left-right)>1):
                return [False,0]
            return [True,max(left,right)+1]
        [bo,dep]=judge(pRoot)
        return bo

	运行时间： 21 ms