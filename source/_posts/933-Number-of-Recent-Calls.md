---
title: 933.Number of Recent Calls（最近的请求次数）
date: 2018-11-06 19:33:28
tags: [code,Queue]
categories: leetcode
---
## Description

Write a class RecentCounter to count recent requests.

It has only one method: ping(int t), where t represents some time in milliseconds.

Return the number of pings that have been made from 3000 milliseconds ago until now.

Any ping with time in [t - 3000, t] will count, including the current ping.

It is guaranteed that every call to ping uses a strictly larger value of t than before.

---

写一个 RecentCounter 类来计算最近的请求。

它只有一个方法：ping(int t)，其中 t 代表以毫秒为单位的某个时间。

返回从 3000 毫秒前到现在的 ping 数。

任何处于 [t - 3000, t] 时间范围之内的 ping 都将会被计算在内，包括当前（指 t 时刻）的 ping。

保证每次对 ping 的调用都使用比之前更大的 t 值。

题目链接：[https://leetcode.com/problems/number-of-recent-calls/](https://leetcode.com/problems/number-of-recent-calls/ "https://leetcode.com/problems/number-of-recent-calls/")

#### Difficulty: easy

<!-- more -->

### Example 1:

	Input: inputs = ["RecentCounter","ping","ping","ping","ping"], inputs = [[],[1],[100],[3001],[3002]]
	Output: [null,1,2,3,3]

### Note:

- Each test case will have at most 10000 calls to ping.
- Each test case will call ping with strictly increasing values of t.
- Each call to ping will have 1 <= t <= 10^9.

## 分析

1. 用list存储所有的t；
2. ping是，删除list中所有小于t-3000的值；
3. 返回list的长度。

## 参考代码
	
	class RecentCounter:

    def __init__(self):
        self.li=[]
        

    def ping(self, t):
        self.li.append(t)
        index=0
        while(True):
            if(self.li[index]<t-3000):
                index+=1
            else:
                self.li=self.li[index:]
                break
        return len(self.li)