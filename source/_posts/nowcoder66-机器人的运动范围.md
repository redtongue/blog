---
title: '[nowcoder66]机器人的运动范围'
date: 2018-09-22 12:04:12
tags: [剑指Offer,code]
categories: nowcoder
---

## 题目描述

地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？

题目链接： [https://www.nowcoder.com/practice/6e5207314b5241fb83f2329e89fdecc8](https://www.nowcoder.com/practice/6e5207314b5241fb83f2329e89fdecc8 "https://www.nowcoder.com/practice/6e5207314b5241fb83f2329e89fdecc8")

<!-- more -->

## 分析

1. 


## 参考代码

	# -*- coding:utf-8 -*-
	class Solution:
    def movingCount(self, threshold, rows, cols):
        # write code here
        if(threshold < 0):
            return 0
        ma=[['0' for j in range(cols)] for i in range(rows)]
        #ma[0][0]='#'
        Sum=self.Find(ma,rows,cols,threshold,0,0)
        return Sum
    def Find(self,ma,rows,cols,threshold,i,j):
        def judge(i,j,threshold):
            s=0
            while(i>0):
                s+=i%10
                i//=10
            while(j>0):
                s+=j%10
                j//=10
            return bool(s>threshold)
        if(i<0 or j<0 or i>=rows or j>=cols):
            return 0
        if(ma[i][j]=='#' or judge(i,j,threshold)):
            return 0
        a=b=c=d=0
        ma[i][j]='#'
        a=self.Find(ma,rows,cols,threshold,i+1,j)
        b=self.Find(ma,rows,cols,threshold,i-1,j)
        c=self.Find(ma,rows,cols,threshold,i,j+1)
        d=self.Find(ma,rows,cols,threshold,i,j-1)
        return a+b+c+d+1