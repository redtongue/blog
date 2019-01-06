---
title: 946.Validate Stack Sequence(验证栈序列)
date: 2018-11-25 12:01:32
tags: [code, Stack]
categories: leetcode
---
## Description

Given two sequences pushed and popped with distinct values, return true if and only if this could have been the result of a sequence of push and pop operations on an initially empty stack.

---

给定 pushed 和 popped 两个序列，只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，返回 true；否则，返回 false 。

题目链接：[https://leetcode.com/problems/validate-stack-sequences/](https://leetcode.com/problems/validate-stack-sequences/ "https://leetcode.com/problems/validate-stack-sequences/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
	Output: true
	Explanation: We might do the following sequence:
	push(1), push(2), push(3), push(4), pop() -> 4,
	push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

### Example 2:

	Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
	Output: false
	Explanation: 1 cannot be popped before 2.

### Note:

- 0 <= pushed.length == popped.length <= 1000
- 0 <= pushed[i], popped[i] < 1000
- pushed is a permutation of popped.
- pushed and popped have distinct values.

## 分析

1. 模拟栈的操作，以此来匹配进栈序列和出栈序列；
2. 若栈为空或者栈顶元素不等于当前出栈数字：将进栈数字压入栈（若没有进栈数字了，返回False），循环2；
3. pop出栈顶元素；
4. 遍历完所有出栈数字，返回True。

## 参考代码
	
	class Solution:
    def validateStackSequences(self, pushed, popped):
        i=0
        stack=[]
        for pop in popped:
            while(len(stack)==0 or stack[-1]!=pop):
                if(i<len(pushed)):
                    stack.append(pushed[i])
                    i+=1
                else:
                    return False
            stack=stack[:-1]
        return True
        