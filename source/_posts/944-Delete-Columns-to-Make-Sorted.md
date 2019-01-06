---
title: 944.Delete Columns to Make Sorted(删除列以使之有序)
date: 2018-11-18 18:54:55
tags: [code, Greedy]
categories: leetcode
---
## Description

We are given an array A of N lowercase letter strings, all of the same length.

Now, we may choose any set of deletion indices, and for each string, we delete all the characters in those indices.

For example, if we have a string "abcdef" and deletion indices {0, 2, 3}, then the final string after deletion is "bef".

Suppose we chose a set of deletion indices D such that after deletions, each remaining column in A is in non-decreasing sorted order.

Formally, the c-th column is [A[0][c], A[1][c], ..., A[A.length-1][c]]

Return the minimum possible value of D.length.

---

给出由 N 个小写字母串组成的数组 A，所有小写字母串的长度都相同。

现在，我们可以选择任何一组删除索引，对于每个字符串，我们将删除这些索引中的所有字符。

举个例子，如果字符串为 "abcdef"，且删除索引是 {0, 2, 3}，那么删除之后的最终字符串为 "bef"。

假设我们选择了一组删除索引 D，在执行删除操作之后，A 中剩余的每一列都是有序的。

形式上，第 c 列为 [A[0][c], A[1][c], ..., A[A.length-1][c]]

返回 D.length 的最小可能值。

题目链接：[https://leetcode.com/problems/delete-columns-to-make-sorted/](https://leetcode.com/problems/delete-columns-to-make-sorted/ "https://leetcode.com/problems/delete-columns-to-make-sorted/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: ["cba","daf","ghi"]
	Output: 1

### Example 2:

	Input: ["a","b"]
	Output: 0

### Example 3:

	Input: ["zyx","wvu","tsr"]
	Output: 3

### Note:

- 1 <= A.length <= 100
- 1 <= A[i].length <= 1000

## 分析

1. 按题意，D的最小长度就是A的不是有序的列的个数；
2. 取得A中每个项的最小长度m；
3. 遍历[0:m]列，若该列无序，则该列索引在D中；
4. 返回所有满足要求的索引的和。

## 参考代码

	class Solution:
    def minDeletionSize(self, A):
        M=1000
        for a in A:
            M=min(M,len(a))
        s=0
        for m in range(M):
            for i in range(1,len(A)):
                if(A[i][m]<A[i-1][m]):
                    s+=1
                    break
        return s