---
title: '[nowcoder]字符串的排列'
date: 2018-08-02 15:11:03
tags: [剑指Offer,code,字符串]
categories: nowcoder
---

## 题目描述

输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。

题目链接： [https://www.nowcoder.com/practice/fe6b651b66ae47d7acce78ffdd9a96c7](https://www.nowcoder.com/practice/fe6b651b66ae47d7acce78ffdd9a96c7 "https://www.nowcoder.com/practice/fe6b651b66ae47d7acce78ffdd9a96c7")

<!-- more -->

### 输入描述

> 输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。

## 分析

1. 递归，每一步选取s中的一个字母加在list中；
2. 终止条件：len(s)==0，则把list加入到全局变量dic（如果dic中不存在）中；
3. 返回dic

## 参考代码

	class Solution:
    def Permutation(self, ss):
        # write code here
        ss=list(ss)
        dic=[]
        if(len(ss)==0):
            return dic
        def _inter(li,s):
            if(len(s)==0):
                li=''.join(li)
                if(li not in dic):
                    dic.append(li)
                return
            for i in s:
                import copy
                S=copy.copy(s)
                S.remove(i)
                _inter(li+[i],S)
        _inter([],ss)
        return dic

	运行时间： 30ms