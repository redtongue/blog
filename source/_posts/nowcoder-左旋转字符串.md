---
title: '[nowcoder]左旋转字符串'
date: 2018-08-04 16:08:35
tags: [剑指Offer,code,字符串]
categories: nowcoder
---

## 题目描述

汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”。是不是很简单？OK，搞定它！

题目链接： [https://www.nowcoder.com/practice/12d959b108cb42b1ab72cef4d36af5ec](https://www.nowcoder.com/practice/12d959b108cb42b1ab72cef4d36af5ec "https://www.nowcoder.com/practice/12d959b108cb42b1ab72cef4d36af5ec")

<!-- more -->

## 分析

1. 只需将移动位置的左右两部分呼唤位置即可，如下参考代码，很大的s，对len(s)取余；
2. 也可以两个s拼接，直接取移动位置后长度为len(s)的字符串。

## 参考代码

	class Solution:
    def LeftRotateString(self, s, n):
        # write code here
        if(len(s)==0):
            return s
        n=n%len(s)
        if(n==0):
            return s
        else:
            return s[n:]+s[:n]

	运行时间： 29 ms