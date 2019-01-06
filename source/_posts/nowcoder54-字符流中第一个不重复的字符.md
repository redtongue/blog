---
title: '[nowcoder54]字符流中第一个不重复的字符'
date: 2018-09-08 11:45:34
tags: [剑指Offer,code,字符串]
categories: nowcoder
---

## 题目描述

请实现一个函数用来找出字符流中第一个只出现一次的字符。例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。

题目链接： [https://www.nowcoder.com/practice/00de97733b8e4f97a3fb5c680ee10720](https://www.nowcoder.com/practice/00de97733b8e4f97a3fb5c680ee10720 "https://www.nowcoder.com/practice/00de97733b8e4f97a3fb5c680ee10720")

<!-- more -->

## 输出描述

> 如果当前字符流没有存在出现一次的字符，返回#字符。

## 分析

1. 


## 参考代码

	# -*- coding:utf-8 -*-
	class Solution:
    # 返回对应char
    def __init__(self):
        self.li=[]
        self.d=set()
        self.single=[]
    def FirstAppearingOnce(self):
        # write code here
        for index in self.li[-1]:
            if(index in self.d):
                if(index in self.single):
                    self.single.remove(index)
            else:
                self.d.add(index)
                self.single.append(index)
            if(self.single):
                return self.single[0]
            else:
                return '#'
    def Insert(self, char):
        # write code here
        self.li.append(char)