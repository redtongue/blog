---
title: '[nowcoder]栈的的压入、弹出序列'
date: 2018-07-31 22:59:49
tags: [剑指Offer,code,栈]
categories: nowcoder
---

## 题目描述

输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）

题目链接： [https://www.nowcoder.com/practice/d77d11405cc7470d82554cb392585106](https://www.nowcoder.com/practice/d77d11405cc7470d82554cb392585106 "https://www.nowcoder.com/practice/d77d11405cc7470d82554cb392585106")

<!-- more -->

## 分析

1. 用list存储栈中的数字，遍历压栈序列，记录压栈序列和出栈序列遍历位置；
2. 如果当前压栈数字等于出栈数字，压栈出栈位置后移；否则：如果list最后一个等于出栈数字，list pop出最后一个数字，出栈位置后移，反之，出栈数字压入list，出栈位置后移；
3. 直到遍历完压栈序列，判断list的逆序与出栈剩余序列是否一致，是则返回True，反之False。

## 参考代码

	class Solution:
    def IsPopOrder(self, pushV, popV):
        # write code here
        index=0
        li=[]
        length=len(pushV)
        i=0
        while(index < length):
            if(pushV[index]==popV[i]):
                index+=1
                i+=1
            else:
                if(len(li) and li[-1] == popV[i]):
                    i+=1
                    li.pop()
                else:
                    li.append(pushV[index])
                    index+=1
        while(i<length):
            if(li[-1] == popV[i]):
                li.pop()
                i+=1
            else:
                return False
        return True

	运行时间： 25ms