---
title: '[nowcoder]树的子结构'
date: 2018-07-29 21:46:52
tags: [剑指Offer,code,二叉树]
categories: nowcoder
---

## 题目描述

输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

题目链接： [https://www.nowcoder.com/practice/6e196c44c7004d15b1610b9afca8bd88](https://www.nowcoder.com/practice/6e196c44c7004d15b1610b9afca8bd88 "https://www.nowcoder.com/practice/6e196c44c7004d15b1610b9afca8bd88")

<!-- more -->

## 分析

1. 首先定义一个函数judge判断两颗树是否为包含关系，递归的每一步，判断当前结点是否都不为空且值相同，否则不是包含关系，
2. 判断两个子结点是否为空，空则返回true，反之进入下一轮迭代；
3. 最后，遍历pRoot1，比较每个结点和pRoot2是否为包含关系，是返回true，否则，遍历结束，返回False。

## 参考代码

	class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

	class Solution:
    def HasSubtree(self, pRoot1, pRoot2):
        # write code here
        def judge(p1,p2):
            if(p1 and p2 and p1.val==p2.val):
                index=1
            else:
                return 0
            if(p2.left):
                a=judge(p1.left,p2.left)
            else:
                a=1
            if(p2.right):
                b=judge(p1.right,p2.right)
            else:
                b=1
            return index*a*b
        if(not pRoot2):
            return False
        l=[pRoot1]
        if(not pRoot1):
            return False
        while(len(l)!=0):
            p=pRoot2
            if(judge(l[0],pRoot2)):
                return True
            else:
                if(l[0].left):
                    l.append(l[0].left)
                if(l[0].right):
                    l.append(l[0].right)
                l=l[1:]
        return False

	运行时间： 28ms