---
title: 955.Delete Columns to Make Sorted II(删列造序 ||)
date: 2018-12-09 12:13:08
tags: [code, Greedy]
categories: leetcode
---
## Description

We are given an array `A` of `N` lowercase letter strings, all of the same length.

Now, we may choose any set of deletion indices, and for each string, we delete all the characters in those indices.

For example, if we have an array `A = ["abcdef","uvwxyz"]` and deletion indices `{0, 2, 3}`, then the final array after deletions is `["bef","vyz"]`.

Suppose we chose a set of deletion indices `D` such that after deletions, the final array has its elements in lexicographic order (`A[0] <= A[1] <= A[2] ... <= A[A.length - 1]`).

Return the minimum possible value of `D.length`.

---

给定由 `N` 个小写字母字符串组成的数组 `A`，其中每个字符串长度相等。

选取一个删除索引序列，对于 `A` 中的每个字符串，删除对应每个索引处的字符。

比如，有 `A = ["abcdef", "uvwxyz"]`，删除索引序列 `{0, 2, 3}`，删除后 `A` 为`["bef", "vyz"]`。

假设，我们选择了一组删除索引 `D`，那么在执行删除操作之后，最终得到的数组的元素是按 字典序（`A[0] <= A[1] <= A[2] ... <= A[A.length - 1]`）排列的，然后请你返回 `D.length` 的最小可能值。

题目链接：[https://leetcode.com/problems/delete-columns-to-make-sorted-ii/](https://leetcode.com/problems/delete-columns-to-make-sorted-ii/ "https://leetcode.com/problems/delete-columns-to-make-sorted-ii/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: ["ca","bb","ac"]
	Output: 1
	Explanation: 
	After deleting the first column, A = ["a", "b", "c"].
	Now A is in lexicographic order (ie. A[0] <= A[1] <= A[2]).
	We require at least 1 deletion since initially A was not in lexicographic order, so the answer is 1.

### Example 2:

	Input: ["xc","yb","za"]
	Output: 0
	Explanation: 
	A is already in lexicographic order, so we don't need to delete anything.
	Note that the rows of A are not necessarily in lexicographic order:
	ie. it is NOT necessarily true that (A[0][0] <= A[0][1] <= ...)

### Example 3:

	Input: ["zyx","wvu","tsr"]
	Output: 3
	Explanation: 
	We have to delete every column.

### Note:

- 1 <= A.length <= 100
- 1 <= A[i].length <= 100

## 分析

- 定义judge，存储当前数与下一个数的字典序关系，若等于0，当前字母串的字典在下一个字母串的前面；
- 若sum（judge）=0即所有字母串的字典序都在下一个字母串的前面，返回s（须删除的序列数）；
- 遍历A[0],判断每一列是否应该被删除，遍历A，若符合字典序，继续遍历，反之，若不满足字典序，s+1，break；
- 每次遍历结束，调整judge，符合字典序，置0；
- 返回s。

## 参考代码

	class Solution:
    def minDeletionSize(self, A):
        s=0
        judge=[1]*(len(A)-1)
        for i in range(len(A[0])):
            if(sum(judge)==0):
                return s
            for j in range(len(A)-1):
                if(judge[j]==0):
                    continue
                if(A[j][i]>A[j+1][i]):
                    s+=1
                    break
            else:
                for j in range(len(A)-1):
                    if(A[j][i]<A[j+1][i]):
                        judge[j]=0
        return s
        
