---
title: '[nowcoder]翻转单词顺序列'
date: 2018-08-04 16:13:20
tags: [剑指Offer,code,字符串]
categories: nowcoder
---

## 题目描述

牛客最近来了一个新员工Fish，每天早晨总是会拿着一本英文杂志，写些句子在本子上。同事Cat对Fish写的内容颇感兴趣，有一天他向Fish借来翻看，但却读不懂它的意思。例如，“student. a am I”。后来才意识到，这家伙原来把句子单词的顺序翻转了，正确的句子应该是“I am a student.”。Cat对一一的翻转这些单词顺序可不在行，你能帮助他么？

题目链接： [https://www.nowcoder.com/practice/3194a4f4cf814f63919d0790578d51f3](https://www.nowcoder.com/practice/3194a4f4cf814f63919d0790578d51f3 "https://www.nowcoder.com/practice/3194a4f4cf814f63919d0790578d51f3")

<!-- more -->

## 分析

1. 如下参考代码是遍历字符串的每个字符，遇到空格代表一个新的word，加入到new_s的前面，最后返回即可;
2. 也可以用split()更简单一些，直接将字符串按空格分割。

## 参考代码

	class Solution:
    def ReverseSentence(self, s):
        # write code here
        new_s=''
        index=''
        if(s.strip()==''):
            return s
        for i in s:
            if(i==' '):
                if(new_s):
                    new_s = index+' '+new_s
                else:
                    new_s = ''+index
                index=''
            else:
                index+=i
        if(index):
            if(new_s):
                new_s = index+' '+new_s
            else:
                new_s = index
        return new_s

	运行时间： 20 ms