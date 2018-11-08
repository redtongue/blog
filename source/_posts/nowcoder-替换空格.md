---
title: '[nowcoder]替换空格'
date: 2018-07-28 21:04:40
tags: [剑指Offer,code,字符串]
categories: nowcoder
---

## 题目描述

请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

题目链接： [https://www.nowcoder.com/practice/4060ac7e3e404ad1a894ef3e17650423](https://www.nowcoder.com/practice/4060ac7e3e404ad1a894ef3e17650423 "https://www.nowcoder.com/practice/4060ac7e3e404ad1a894ef3e17650423")

<!-- more -->

## 分析

1. 用一个新变量存储需返回的字符串newStr，逐个遍历源字符串，遇到空格newStr+='%20'。

## 参考代码

	class Solution:
    # s 源字符串
    def replaceSpace(self, s):
        newStr=''
        for i in s:
            if(i==' '):
                newStr+='%20'
            else:
                newStr+=i
        return newStr

	运行时间： 23ms
	占用内存： 5728k
