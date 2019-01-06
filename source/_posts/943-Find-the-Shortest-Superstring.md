---
title: 943.Find the Shortest Superstring(最短超级串)
date: 2018-11-18 18:54:28
tags: [code, Math]
categories: leetcode
---
## Description

Given an array A of strings, find any smallest string that contains each string in A as a substring.

We may assume that no string in A is substring of another string in A.

---

给定一个字符串数组 A，找到以 A 中每个字符串作为子字符串的最短字符串。

我们可以假设 A 中没有字符串是 A 中另一个字符串的子字符串。

题目链接：[https://leetcode.com/problems/find-the-shortest-superstring/](https://leetcode.com/problems/find-the-shortest-superstring/ "https://leetcode.com/problems/find-the-shortest-superstring/")

#### Difficulty: hard

<!-- more -->

### Example 1:

	Input: ["alex","loves","leetcode"]
	Output: "alexlovesleetcode"
	Explanation: All permutations of "alex","loves","leetcode" would also be accepted.

### Example 2:

	Input: ["catg","ctaagt","gcta","ttca","atgcatc"]
	Output: "gctaagttcatgcatc"

### Note:

- 1 <= A.length <= 12
- 1 <= A[i].length <= 20

## 分析

1. 如下是一个时间超限的代码；
2. 定义一个矩阵matrix存储每两个字符串拼接抵消的长度；
3. 用深度优先搜索，找到最长路径，即使需要的拼接顺序；
4. 额(⊙﹏⊙)

## 参考代码
	
	class Solution:
    def shortestSuperstring(self, A):
        matrix=[]
        for i in range(len(A)):
            li=[0]*len(A)
            for j in range(len(A)):
                if(i!=j):
                    m=min(len(A[i]),len(A[j]))
                    for tar in range(m,0,-1):
                        if(A[i][-tar:] == A[j][:tar]):
                            li[j]=tar
                            break
            matrix.append(li)
        r_li,r_m=[],0
        def dfs(li,u,N,m):
            li.append(u)
            if(len(li)==N):
                nonlocal r_li,r_m
                if(m>=r_m):
                    r_li=li
                    r_m=m
                return
            for i in range(N):
                if(i not in li):
                    dfs(li.copy(),i,N,m+matrix[u][i])
                    
        for i in range(len(A)):
            dfs([],i,len(A),0)
        if(r_m==0):
            return ''.join(A)
        rStr=A[r_li[0]]
        index=r_li[0]
        for tar in r_li[1:]:
            rStr+=(A[tar][matrix[index][tar]:])
            index=tar
        return rStr
        

