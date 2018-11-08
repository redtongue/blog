---
title: 902.Numbers At Most N Given Digit Set
date: 2018-09-10 11:36:58
tags: [code,Math,Dynamic Programming]
categories: leetcode
---
## Description

We have a sorted set of digits D, a non-empty subset of {'1','2','3','4','5','6','7','8','9'}.  (Note that '0' is not included.)

Now, we write numbers using these digits, using each digit as many times as we want.  For example, if D = {'1','3','5'}, we may write numbers such as '13', '551', '1351315'.

Return the number of positive integers that can be written (using the digits of D) that are less than or equal to N.

题目链接：[https://leetcode.com/problems/numbers-at-most-n-given-digit-set/description/](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/description/ "https://leetcode.com/problems/numbers-at-most-n-given-digit-set/description/")

#### Difficulty: hard

<!-- more -->

### Example 1:

	Input: D = ["1","3","5","7"], N = 100
	Output: 20
	Explanation: 
	The 20 numbers that can be written are:
    1, 3, 5, 7, 11, 13, 15, 17, 31, 33, 35, 37, 51, 53, 55, 57, 71, 73, 75, 77.

### Example 2:

	Input: D = ["1","4","9"], N = 1000000000
	Output: 29523
	Explanation: 
	We can write 3 one digit numbers, 9 two digit numbers, 27 three digit numbers,
	81 four digit numbers, 243 five digit numbers, 729 six digit numbers,
	2187 seven digit numbers, 6561 eight digit numbers, and 19683 nine digit numbers.
	In total, this is 29523 integers that can be written using the digits of D.


### Note:

- D is a subset of digits '1'-'9' in sorted order.
- 1 <= N <= 10^9

## 分析

1. 分为两部分考虑，数字的长度小于N的长度和数字的长度等于N的长度；
2. 第一种：可能的个数是D的长度的（数字的长度）次方，如例1，5+5*5；
3. 第二种：如果最高位取一个小于N最高位的数字，那么，后面的位置可以取任意数字，若等于，后移移位继续3步骤，如大于，则结束；
4. 第二种情况有一个特例，即D的长度为1的时候，如果N中每个数字都小于D[0]则，可能的数字是1，反之是0。

## 参考代码

	class Solution:
    def atMostNGivenDigitSet(self, D, N):
        s=0
        length=len(D)
        n=10
        l=length
        while(N>=n):
            s+=l
            n*=10
            l*=length
        li=[]
        while(N>0):
            li=[N%10]+li
            N//=10
        i=0
        index=0
        judge=True
        while(judge and i<len(li)):
            l//=length
            for d in D:
                d=int(d)
                if(d<li[i]):
                    index+=l
                elif(d==li[i]):
                    i+=1
                    if(i==len(li)):
                        index+=1
                    break
                else:
                    judge=False
                    break
            else:
                judge=False
        if(length==1):
            index=1
            for ind in li:
                if(ind<int(D[0])):
                    index=0
                    break
                elif(ind>int(D[0])):
                    index=1
                    break
        return s+index
