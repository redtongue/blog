---
title: 939.Minimum Area Rectangle(最小面积矩形)
date: 2018-11-11 12:03:31
tags: [code]
categories: leetcode
---
## Description

Given a set of points in the xy-plane, determine the minimum area of a rectangle formed from these points, with sides parallel to the x and y axes.

If there isn't any rectangle, return 0.

---

给定在 xy 平面上的一组点，确定由这些点组成的矩形的最小面积，其中矩形的边平行于 x 轴和 y 轴。

如果没有任何矩形，就返回 0。

题目链接：[https://leetcode.com/problems/minimum-area-rectangle/](https://leetcode.com/problems/minimum-area-rectangle/ "https://leetcode.com/problems/minimum-area-rectangle/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input: [[1,1],[1,3],[3,1],[3,3],[2,2]]
	Output: 4

### Example 2:

	Input: [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
	Output: 2

### Note:

- 1 <= points.length <= 500
- 0 <= points[i][0] <= 40000
- 0 <= points[i][1] <= 40000
- All points are distinct.

## 分析

1. 以横坐标作为字典的key值，所有在此横坐标的点的y值合成的list作为value值；
2. 去除value值长度小于2的项（少于两个点不可能形成矩形）；
3. 遍历字典任意两个key值对应的value的最小差值，乘积即为矩形的面积；
4. 定义初始足够大的s值，遍历过程中，取得最小值；
5. 返回s。

## 参考代码

	class Solution:
    def minAreaRect(self, points):
        import collections
        D=collections.defaultdict(list)
        for point in points:
            D[point[0]].append(point[1])
        D={d:D[d] for d in D if len(D[d])>=2}
        s=10**10    
        for d1 in D:
            for d2 in D:
                if(d1!=d2):
                    li=[tar for tar in D[d1] if tar in D[d2]]
                    if(len(li)<2):
                        continue
                    li.sort()
                    length=10**10
                    for i in range(1,len(li)):
                        length=min(length,li[i]-li[i-1])
                    s=min(s,length*(abs(d1-d2)))
        return s if s<10**10 else 0
        