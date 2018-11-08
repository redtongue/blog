---
title: '[nowcoder]扑克牌顺子'
date: 2018-08-04 16:31:49
tags: [剑指Offer,code,字符串]
categories: nowcoder
---

## 题目描述

LL今天心情特别好,因为他去买了一副扑克牌,发现里面居然有2个大王,2个小王(一副牌原本是54张^_^)...他随机从中抽出了5张牌,想测测自己的手气,看看能不能抽到顺子,如果抽到的话,他决定去买体育彩票,嘿嘿！！“红心A,黑桃3,小王,大王,方片5”,“Oh My God!”不是顺子.....LL不高兴了,他想了想,决定大\小 王可以看成任何数字,并且A看作1,J为11,Q为12,K为13。上面的5张牌就可以变成“1,2,3,4,5”(大小王分别看作2和4),“So Lucky!”。LL决定去买体育彩票啦。 现在,要求你使用这幅牌模拟上面的过程,然后告诉我们LL的运气如何， 如果牌能组成顺子就输出true，否则就输出false。为了方便起见,你可以认为大小王是0。

题目链接： [https://www.nowcoder.com/practice/762836f4d43d43ca9deb273b3de8e1f4](https://www.nowcoder.com/practice/762836f4d43d43ca9deb273b3de8e1f4 "https://www.nowcoder.com/practice/762836f4d43d43ca9deb273b3de8e1f4")

<!-- more -->

## 分析

1. 首先对numbers进行排序，统计大小王的个数；
2. 定义judge代表已经排好序的牌的最大值，judge==0代表还没有排序；
3. 遍历所有牌，如果有牌大于judge+大小王的个数，则返回False；
4. 反之用大小王替代当前牌与之前牌的差值。

## 参考代码

	class Solution:
    def IsContinuous(self, numbers):
        # write code here
        index=0
        numbers.sort()
        judge=0
        if(not numbers):
            return False
        for i in numbers:
            if(i==0):
                index+=1
            else:
                if(judge==0):
                    judge=i
                else:
                    if(i==judge+1):
                        judge=i
                    else:
                        while(index):
                            judge+=1
                            index-=1
                            if(judge+1==i):
                                break
                        if(judge+1!=i):
                            return False
                        judge+=1
        return True

	运行时间： 21 ms