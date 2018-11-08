---
title: '[nowcoder49]把字符串转换成整数'
date: 2018-09-01 19:01:27
tags: [剑指Offer,code,字符串]
categories: nowcoder
---

## 题目描述

将一个字符串转换成一个整数(实现Integer.valueOf(string)的功能，但是string不符合数字要求时返回0)，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0。

题目链接： [https://www.nowcoder.com/practice/1277c681251b4372bdef344468e4f26e](https://www.nowcoder.com/practice/1277c681251b4372bdef344468e4f26e "https://www.nowcoder.com/practice/1277c681251b4372bdef344468e4f26e")

<!-- more -->

## 输入描述
    
>输入一个字符串,包括数字字母符号,可以为空

## 输出描述
    
>如果是合法的数值表达则返回该数字，否则返回0


## 示例1

### 输入

>+2147483647

>1a33

### 输出

>2147483647

>0

## 分析

1. judge用于存储数字的正负；
2. digit存储0-9的数字；
3. 遍历s（若s[0]为“+”或者“-”，则从第二个位置开始遍历），若出现不是数字的字符，返回零，反之存入index；
4. 返回index的整数表示形式；
5. 备注：磁体没有考虑“e”，如1e2=0.01。

## 参考代码

	# -*- coding:utf-8 -*-
	class Solution:
    def StrToInt(self, s):
        # write code here
        judge=1
        index=''
        ii=0
        s=s.lstrip()
        if(len(s)==0):
            return 0
        digit=[str(i) for i in range(10)]
        if(s[0]=='+'):
            judge=1
            ii=1
        elif(s[0]=='-'):
            judge=-1
            ii=1
        for i in range(ii,len(s)):
            if(s[i] in digit):
                index+=s[i]
            else:
                return 0
        if(index==''):
            return 0
        return judge*int(index)

	运行时间： 26 ms