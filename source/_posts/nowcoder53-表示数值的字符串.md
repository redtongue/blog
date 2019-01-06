---
title: '[nowcoder53]表示数值的字符串'
date: 2018-09-08 11:43:36
tags: [剑指Offer,code,字符串]
categories: nowcoder
---

## 题目描述

请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。

题目链接： [https://www.nowcoder.com/practice/6f8c901d091949a5837e24bb82a731f2](https://www.nowcoder.com/practice/6f8c901d091949a5837e24bb82a731f2 "https://www.nowcoder.com/practice/6f8c901d091949a5837e24bb82a731f2")

<!-- more -->

## 分析

1. 


## 参考代码

	# -*- coding:utf-8 -*-
	class Solution:
    # s字符串
    def isNumeric(self, s):
        # write code here
        if(len(s)==0):
            return False
        ii=0
        li=[str(x) for x in range(10)]
        if(s[0] in ['+','-']):
            ii=1
        judge=0
        for i in range(ii,len(s)):
            if(s[i]=='.'):
                if(not judge):
                    judge=1
                else:
                    return False
            elif(s[i] in ['e','E']):
                i+=1
                if(i<len(s)):
                    if(s[i] in ['+','-']+li):
                        i+=1
                        while(i<len(s)):
                            if(s[i] not in li):
                                return False
                            i+=1
                        break
                    break
                else:
                    return False
            elif(s[i] not in li):
                return False
        return True