---
title: '[nowcoder]第一次只出现一次的字符'
date: 2018-08-02 16:56:24
tags: [剑指Offer,code,字符串]
categories: nowcoder
---

## 题目描述

在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.

题目链接： [https://www.nowcoder.com/practice/1c82e8cf713b4bbeb2a5b31cf5b0417c](https://www.nowcoder.com/practice/1c82e8cf713b4bbeb2a5b31cf5b0417c "https://www.nowcoder.com/practice/1c82e8cf713b4bbeb2a5b31cf5b0417c")

<!-- more -->

## 分析

1. 用dict存储字符以及出现的位置；若重复出现，赋值为-1；
2. 用list存储只出现一次的字符，若重复出现，将字符移出；
3. 返回list中第一个字符。

## 参考代码

	class Solution:
    def FirstNotRepeatingChar(self, s):
        # write code here
        li=[]
        d={}
        for i in range(len(s)):
            if(s[i] in d):
                if(d[s[i]]!=-1):
                    li.remove(d[s[i]])
                    d[s[i]]=-1
            else:
                li.append(i)
                d[s[i]]=i
        if(li):
            return li[0]
        return -1

	运行时间： 41 ms