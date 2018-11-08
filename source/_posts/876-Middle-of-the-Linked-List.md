---
title: 876.Middle of the Linked List
date: 2018-07-30 21:34:08
tags: [code,Linked List]
categories: leetcode
---
## Description

Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

题目链接：[https://leetcode.com/problems/middle-of-the-linked-list/](https://leetcode.com/problems/middle-of-the-linked-list/ "https://leetcode.com/problems/middle-of-the-linked-list/")

#### Difficulty: easy

<!-- more -->

### Example 1:

	Input: [1,2,3,4,5]
	Output: Node 3 from this list (Serialization: [3,4,5])
	The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
	Note that we returned a ListNode object ans, such that:
	ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.

### Example 2:

	Input: [1,2,3,4,5,6]
	Output: Node 4 from this list (Serialization: [4,5,6])
	Since the list has two middle nodes with values 3 and 4, we return the second one.

### Note:

- The number of nodes in the given list will be between 1 and 100.

## 分析

1. updating

## 参考代码
	
	Definition for singly-linked list.
	class ListNode:
	   def __init__(self, x):
           self.val = x
	       self.next = None

	class Solution:
    def middleNode(self, head):
        a=head
        b=head
        b=b.next
        while(b!=None):
            a=a.next
            b=b.next
            if(b!=None):
                b=b.next
        return a