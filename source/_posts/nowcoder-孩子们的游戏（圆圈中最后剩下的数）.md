---
title: '[nowcoder]孩子们的游戏（圆圈中最后剩下的数）'
date: 2018-08-04 16:37:41
tags: [剑指Offer,code,模拟]
categories: nowcoder
---

## 题目描述

每年六一儿童节,牛客都会准备一些小礼物去看望孤儿院的小朋友,今年亦是如此。HF作为牛客的资深元老,自然也准备了一些小游戏。其中,有个游戏是这样的:首先,让小朋友们围成一个大圈。然后,他随机指定一个数m,让编号为0的小朋友开始报数。每次喊到m-1的那个小朋友要出列唱首歌,然后可以在礼品箱中任意的挑选礼物,并且不再回到圈中,从他的下一个小朋友开始,继续0...m-1报数....这样下去....直到剩下最后一个小朋友,可以不用表演,并且拿到牛客名贵的“名侦探柯南”典藏版(名额有限哦!!^_^)。请你试着想下,哪个小朋友会得到这份礼品呢？(注：小朋友的编号是从0到n-1)

题目链接： [https://www.nowcoder.com/practice/f78a359491e64a50bce2d89cff857eb6](https://www.nowcoder.com/practice/f78a359491e64a50bce2d89cff857eb6 "https://www.nowcoder.com/practice/f78a359491e64a50bce2d89cff857eb6")

<!-- more -->

## 分析

1. 用list存储小朋友的编号；
2. 模拟报数，每次将list中报数为m的小盆友的编号移出，同时记录当前位置；
3. 直至剩下最后一个小朋友；
4. 可能是程序的测试用例很小，最直接的办法竟然没有时间超限，应该有更pythonic的方法。

## 参考代码

	class Solution:
    def LastRemaining_Solution(self, n, m):
        # write code here
        li=[i for i in range(n)]
        index=0
        if(not n or not m):
            return -1
        while(len(li)>1):
            index=(index+m-1)%len(li)
            li.remove(li[index])
        return li[0]

	运行时间： 64 ms