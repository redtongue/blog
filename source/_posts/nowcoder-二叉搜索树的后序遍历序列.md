---
title: '[nowcoder]二叉搜索树的后序遍历序列'
date: 2018-07-31 23:04:13
tags: [剑指Offer,code,二叉树]
categories: nowcoder
---

## 题目描述

输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

题目链接： [https://www.nowcoder.com/practice/a861533d45854474ac791d90e447bafd](https://www.nowcoder.com/practice/a861533d45854474ac791d90e447bafd "https://www.nowcoder.com/practice/a861533d45854474ac791d90e447bafd")

<!-- more -->

## 分析

1. 二叉搜索树是根结点大于左子树的所有结点，小于右子树的所有结点；
2. 根据后续遍历序列，根结点为最后一个数字，去除前面小于根结点的序列，如果后面都大于根结点，则继续下一层，否则返回False；
3. 最后返回True

## 参考代码

	class Solution:
    def VerifySquenceOfBST(self, sequence):
        # write code here
        def _inter(se):
            if(len(se)<=2):
                return 1
            else:
                index=se[-1]
                i=0
                while(se[i]<index):
                    i+=1
                judge=i
                while(judge<len(se)-1):
                    if(se[judge]<index):
                        return 0
                    judge+=1
                print(se[:i])
                print(se[i:-1])
                return _inter(se[:i])*_inter(se[i:-1])
        if(not sequence):
            return False
        if(_inter(sequence)):
            return True
        else:
            return False

	运行时间： 33ms