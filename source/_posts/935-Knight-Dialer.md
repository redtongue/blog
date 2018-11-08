---
title: 935.Knight Dialers（骑士拨号器）
date: 2018-11-06 19:41:40
tags: [code,Dynamic Programming]
categories: leetcode
---
## Description

A chess knight can move as indicated in the chess diagram below:

<figure class="half">
<img src="https://assets.leetcode.com/uploads/2018/10/12/knight.png" height="200">
<img src="https://assets.leetcode.com/uploads/2018/10/30/keypad.png" height="200">
</figure>

This time, we place our chess knight on any numbered key of a phone pad (indicated above), and the knight makes N-1 hops.  Each hop must be from one key to another numbered key.

Each time it lands on a key (including the initial placement of the knight), it presses the number of that key, pressing N digits total.

How many distinct numbers can you dial in this manner?

Since the answer may be large, output the answer modulo 10^9 + 7.

---

国际象棋中的骑士可以按下图所示进行移动：

<figure class="half">
<img src="https://assets.leetcode.com/uploads/2018/10/12/knight.png" height="200">
<img src="https://assets.leetcode.com/uploads/2018/10/30/keypad.png" height="200">
</figure>

这一次，我们将 “骑士” 放在电话拨号盘的任意数字键（如上图所示）上，接下来，骑士将会跳 N-1 步。每一步必须是从一个数字键跳到另一个数字键。

每当它落在一个键上（包括骑士的初始位置），都会拨出键所对应的数字，总共按下 N 位数字。

你能用这种方式拨出多少个不同的号码？

因为答案可能很大，所以输出答案模 10^9 + 7。

题目链接：[https://leetcode.com/problems/knight-dialer/](https://leetcode.com/problems/knight-dialer/ "https://leetcode.com/problems/knight-dialer/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: 1
	Output: 10

### Example 2:

	Input: 2
	Output: 20

### Example 3:

	Input: 3
	Output: 46

### Note:

- 1 <= N <= 5000

## 分析

1. 首先可以找到如下规律，1的下一个数字只能是6和8，2的下一个数字只能是7和9，因此对应关系如下：{1:[6,8],2:[7,9],3:[4,8],4:[3,9,0],5:[],6:[1,7,0],7:[2,6],8:[1,3],9:[2,4],0:[4,6]}；
2. 所以第N步为数字6的可能总数是：第N-1步为数字1加上第N-1步为数字7加上第N-1步为数字0；
3. 第一步每个数字的总数都为1；
4. 以此原则，迭代求取每一步之后各个数字的可能总数；
5. 返回总数和。

## 参考代码
	
	class Solution:
    def knightDialer(self, N):
        D={1:[6,8],2:[7,9],3:[4,8],4:[3,9,0],5:[],6:[1,7,0],7:[2,6],8:[1,3],9:[2,4],0:[4,6]}
        s=[1]*10
        for i in range(N-1):
            new_s=[0]*10
            for i in range(10):
                for tar in D[i]:
                    new_s[tar]+=s[i]
                    new_s[tar]%=(10**9+7)
            s=new_s
        return sum(s)%(10**9+7)
        