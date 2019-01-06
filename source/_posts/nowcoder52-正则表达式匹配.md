---
title: '[nowcoder52]正则表达式匹配'
date: 2018-09-08 11:41:27
tags: [剑指Offer,code,字符串]
categories: nowcoder
---

## 题目描述

请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配

题目链接： [https://www.nowcoder.com/practice/45327ae22b7b413ea21df13ee7d6429c](https://www.nowcoder.com/practice/45327ae22b7b413ea21df13ee7d6429c "https://www.nowcoder.com/practice/45327ae22b7b413ea21df13ee7d6429c")

<!-- more -->

## 分析

1. 


## 参考代码

	# -*- coding:utf-8 -*-
	class Solution:
    # s, pattern都是字符串
    def match(self, s, pattern):
        # write code here
        if(len(s)==0 and len(pattern)==0):
            return True
        if(len(s)!=0 and len(pattern)==0):
            return False
        if(len(pattern)>=2 and pattern[1]=='*'):
            judge=False
            if(len(s)>0 and (s[0]==pattern[0] or pattern[0]=='.')):
                judge=self.match(s[1:],pattern)
            return judge or self.match(s,pattern[2:])
        else:#pattern第二个字符不是‘*’
            if(len(s)>0 and (s[0]==pattern[0] or pattern[0]=='.')):#当前字符匹配
                return self.match(s[1:],pattern[1:])
            else:
                return False