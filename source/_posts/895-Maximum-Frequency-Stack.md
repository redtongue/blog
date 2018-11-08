---
title: 895.Maximum Frequency Stack
date: 2018-08-27 21:55:29
tags: [code,Hash table,Stack]
categories: leetcode
---
## Description

Implement FreqStack, a class which simulates the operation of a stack-like data structure.

FreqStack has two functions:

- push(int x), which pushes an integer x onto the stack.

- pop(), which removes and returns the most frequent element in the stack. 
If there is a tie for most frequent element, the element closest to the top of the stack is removed and returned.

题目链接：[https://leetcode.com/problems/maximum-frequency-stack/description/](https://leetcode.com/problems/maximum-frequency-stack/description/ "https://leetcode.com/problems/maximum-frequency-stack/description/")

#### Difficulty: hard

<!-- more -->

### Example 1:

	Input: ["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"],[[],[5],[7],[5],[7],[4],[5],[],[],[],[]]
	Output: [null,null,null,null,null,null,null,5,7,5,4]
	Explanation:After making six .push operations, the stack is [5,7,5,7,4,5] from bottom to top.  Then:
	pop() -> returns 5, as 5 is the most frequent.
	The stack becomes [5,7,5,7,4].

	pop() -> returns 7, as 5 and 7 is the most frequent, but 7 is closest to the top.
	The stack becomes [5,7,5,4].

	pop() -> returns 5.
	The stack becomes [5,7,4].

	pop() -> returns 4.
	The stack becomes [5,7].

### Note:

- Calls to FreqStack.push(int x) will be such that 0 <= x <= 10^9.
- It is guaranteed that FreqStack.pop() won't be called if the stack has zero elements.
- The total number of FreqStack.push calls will not exceed 10000 in a single test case.
- The total number of FreqStack.pop calls will not exceed 10000 in a single test case.
- The total number of FreqStack.push and FreqStack.pop calls will not exceed 150000 across all test cases.

## 分析

1. 因为每次pop都是返回一个出现频率最大的数字，首先想到的是每次push保存下频率最大的数字，但是pop之后可能就会变化，这是如果去遍历所有push的数字时间会超限；
2. 考虑把所有出现相同次数的数字放在同一个list中，然后把所有的list放入字典中，形如{1: [7, 5, 4], 2: [7, 5]}，代表至少出现一次的是：7，4，5，至少出现两次的是：7，5，题目要求需要在频率相同的情况下pop出最后push进去的，在构建的时候按照push顺序加入到字典中；
3. 在构建一个字典存储每个数字出现的次数，形如：{7: 2, 5: 2, 4: 1}
4. 代码如下

## 参考代码

	class FreqStack:
    def __init__(self):
        self.count = {}
        self.group = {}
        self.max = 0

    def push(self, x):
        if(x in self.count):
            self.count[x]+=1
        else:
            self.count[x]=1
        f=self.count[x]
        if(f in self.group):
            self.group[f].append(x)
        else:
            self.group[f]=[x]
        if(f>self.max):
            self.max=f
    def pop(self):
        x=self.group[self.max].pop()
        self.count[x]-=1
        if(not self.group[self.max]):
            self.max-=1
        return x