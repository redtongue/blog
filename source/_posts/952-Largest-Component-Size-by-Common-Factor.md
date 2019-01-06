---
title: 952.Largest Component Size by Common Factor(按公因数计算最大组件大小)
date: 2018-12-02 22:04:55
tags: [code, Math, Union Find]
categories: leetcode
---
## Description

Given a non-empty array of unique positive integers A, consider the following graph:

- There are A.length nodes, labelled A[0] to A[A.length - 1];
- There is an edge between A[i] and A[j] if and only if A[i] and A[j] share a common factor greater than 1.

Return the size of the largest connected component in the graph.

---

给定一个由不同正整数的组成的非空数组 A，考虑下面的图：

- 有 A.length 个节点，按从 A[0] 到 A[A.length - 1] 标记；
- 只有当 A[i] 和 A[j] 共用一个大于 1 的公因数时，A[i] 和 A[j] 之间才有一条边。

返回图中最大连通组件的大小。

题目链接：[https://leetcode.com/problems/largest-component-size-by-common-factor/](https://leetcode.com/problems/largest-component-size-by-common-factor/ "https://leetcode.com/problems/largest-component-size-by-common-factor/")

#### Difficulty: hard

<!-- more -->

### Example 1:

	Input: [4,6,15,35]
	Output: 4

![commonFactor1](commonFactor1.png)

### Example 2:

	Input: [20,50,9,63]
	Output: 2

![commonFactor2](commonFactor2.png)

### Example 3:

	Input: [2,3,6,7,4,12,21,39]
	Output: 8

![commonFactor3](commonFactor3.png)

### Note:

- 1 <= A.length <= 20000
- 1 <= A[i] <= 100000

## 分析

1. updating

## 参考代码

	updating