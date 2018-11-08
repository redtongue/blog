---
title: 927.Three Equal Parts（三等分）
date: 2018-10-23 22:11:42
tags: [code]
categories: leetcode
---
## Description

Given an array A of 0s and 1s, divide the array into 3 non-empty parts such that all of these parts represent the same binary value.

If it is possible, return any [i, j] with i+1 < j, such that:

- A[0], A[1], ..., A[i] is the first part;
- A[i+1], A[i+2], ..., A[j-1] is the second part, and
- A[j], A[j+1], ..., A[A.length - 1] is the third part.
- All three parts have equal binary value.

If it is not possible, return [-1, -1].

Note that the entire part is used when considering what binary value it represents.  For example, [1,1,0] represents 6 in decimal, not 3.  Also, leading zeros are allowed, so [0,1,1] and [1,1] represent the same value.

---

给定一个由 0 和 1 组成的数组 A，将数组分成 3 个非空的部分，使得所有这些部分表示相同的二进制值。

如果可以做到，请返回任何 [i, j]，其中 i+1 < j，这样一来：

- A[0], A[1], ..., A[i] 组成第一部分；
- A[i+1], A[i+2], ..., A[j-1] 作为第二部分；
- A[j], A[j+1], ..., A[A.length - 1] 是第三部分。
- 这三个部分所表示的二进制值相等。

如果无法做到，就返回 [-1, -1]。

注意，在考虑每个部分所表示的二进制时，应当将其看作一个整体。例如，[1,1,0] 表示十进制中的 6，而不会是 3。此外，前导零也是被允许的，所以 [0,1,1] 和 [1,1] 表示相同的值。

题目链接：[https://leetcode.com/problems/three-equal-parts/](https://leetcode.com/problems/three-equal-parts/ "https://leetcode.com/problems/three-equal-parts/")

#### Difficulty: hard

<!-- more -->

### Example 1:

	Input: [1,0,1,0,1]
	Output: [0,3]

### Example 2:

	Input: [1,1,0,1,1]
	Output: [-1,-1]

### Note:

- 3 <= A.length <= 30000
- A[i] == 0 or A[i] == 1

## 分析

1. i,j将数组分为三个部分a1,a2,a3，通过向后移动i或者向前移动j来判断三部分的值是否相等；
2. 其中移动的i或j的判断依据是移动ij之后对应的a1和a3大小关系，哪个小就移动哪个，我考虑的是移动较小的可以更准确的逼近准确值，相等时，移动i；
3. 直至a1=a2=a3返回[i,j],否则若i+1<j返回[-1,-1]。

## 参考代码
	
	class Solution:
    def threeEqualParts(self, A):
        i=0
        j=len(A)-1
        a1=A[i]
        a2=0
        s=0
        s+=a1
        for posi in range(1,len(A)-1):
            a2*=2
            if(A[posi]==1):
                a2+=1
                s+=1
        a3=A[j]
        s+=a3
        if(s%3!=0):
            return [-1,-1]
        index=2
        indexP=2**(len(A)-3)
        while(i+1<j):
            if(a1==a2==a3):
                return [i,j]
            if(a1>a2 or a3>a2):
                return [-1,-1]
            if(((a1<<1)+A[i+1]) > (index*A[j-1]+a3)):
                a3+=index*A[j-1]
                index=index<<1
                a2=a2>>1
                indexP=indexP>>1
                j-=1
            else:
                a1=(a1<<1)+A[i+1]
                a2-=(indexP*A[i+1])
                indexP=indexP>>1
                i+=1
        return [-1,-1]
        