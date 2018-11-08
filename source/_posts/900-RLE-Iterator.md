---
title: 900.RLE Iterator
date: 2018-09-10 11:21:57
tags: [code,Array]
categories: leetcode
---
## Description

Write an iterator that iterates through a run-length encoded sequence.

The iterator is initialized by RLEIterator(int[] A), where A is a run-length encoding of some sequence.  More specifically, for all even i, A[i] tells us the number of times that the non-negative integer value A[i+1] is repeated in the sequence.

The iterator supports one function: next(int n), which exhausts the next n elements (n >= 1) and returns the last element exhausted in this way.  If there is no element left to exhaust, next returns -1 instead.

For example, we start with A = [3,8,0,9,2,5], which is a run-length encoding of the sequence [8,8,8,5,5].  This is because the sequence can be read as "three eights, zero nines, two fives".

题目链接：[https://leetcode.com/problems/rle-iterator/description/](https://leetcode.com/problems/rle-iterator/description/ "https://leetcode.com/problems/rle-iterator/description/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: ["RLEIterator","next","next","next","next"], [[[3,8,0,9,2,5]],[2],[1],[1],[2]]
	Output: [null,8,8,5,-1]
	Explanation: 
	RLEIterator is initialized with RLEIterator([3,8,0,9,2,5]).
	This maps to the sequence [8,8,8,5,5].
	RLEIterator.next is then called 4 times:

	.next(2) exhausts 2 terms of the sequence, returning 8.  The remaining sequence is now [8, 5, 5].

	.next(1) exhausts 1 term of the sequence, returning 8.  The remaining sequence is now [5, 5].

	.next(1) exhausts 1 term of the sequence, returning 5.  The remaining sequence is now [5].

	.next(2) exhausts 2 terms, returning -1.  This is because the first term exhausted was 5,
	but the second term did not exist.  Since the last term exhausted does not exist, we return -1.
	

### Note:

- 0 <= A.length <= 1000
- A.length is an even integer.
- 0 <= A[i] <= 10^9
- There are at most 1000 calls to RLEIterator.next(int n) per test case.
- Each call to RLEIterator.next(int n) will have 1 <= n <= 10^9.

## 分析

1. 已知A存储的是每个数字及其对应出现的次数，其中0 <= A[i] <= 10^9，所以若把A还原成字符串(如[8,8,8,5,5])，这样取next是很方便，但是可能内存或者时间超限；
2. 故定义index指向当前数据对，初始为0，position是遍历到当前数据对的位置，初始为0；
3. 如果index超出A的长度，则返回-1；
4. 如果n大于当前数据对剩余长度（当前数据对长度减去position），则index后移，n减去剩余长度，position置零；
5. 反之，返回当前index对应的数字，position加n。

## 参考代码

	class RLEIterator:

    def __init__(self, A):
        self.li=A
        self.index=0
        self.position=0

    def next(self, n):
        while(self.index<len(self.li)):
            if(self.position + n>self.li[self.index]):
                n-=(self.li[self.index]-self.position)
                self.position=0
                self.index+=2
            else:
                self.position+=n
                return self.li[self.index+1]
        return -1

