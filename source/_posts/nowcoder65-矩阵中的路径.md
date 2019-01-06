---
title: '[nowcoder65]矩阵中的路径'
date: 2018-09-22 12:03:11
tags: [剑指Offer,code]
categories: nowcoder
---

## 题目描述

请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，则之后不能再次进入这个格子。 例如 a b c e s f c s a d e e 这样的3 X 4 矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。

题目链接： [https://www.nowcoder.com/practice/c61c6999eecb4b8f88a98f66b273a3cc](https://www.nowcoder.com/practice/c61c6999eecb4b8f88a98f66b273a3cc "https://www.nowcoder.com/practice/c61c6999eecb4b8f88a98f66b273a3cc")

<!-- more -->

## 分析

1. 


## 参考代码

	# -*- coding:utf-8 -*-
	class Solution:
    def hasPath(self, matrix, rows, cols, path):
        # write code here
        if(len(path)<=0):
            return True
        for i in range(rows):
            for j in range(cols):
                if(matrix[i*cols+j]==path[0]):
                    if(self.find(list(matrix),rows,cols,path[1:],i,j)):
                        return True
        return False
    def find(self,ma,row,col,path,i,j):
        if(len(path)==0):
            return True
        ma[i*col+j]='#'
        k=[False,False,False,False]
        if(j+1<col and ma[i*col+j+1]==path[0]):
            k[0] = self.find(ma,row,col,path[1:],i,j+1)
        if(j-1>=0 and ma[i*col+j-1]==path[0]):
            k[1] = self.find(ma,row,col,path[1:],i,j-1)
        if(i-1>=0 and ma[(i-1)*col+j]==path[0]):
            k[2] = self.find(ma,row,col,path[1:],i-1,j)
        if(i+1<row and ma[(i+1)*col+j]==path[0]):
            k[3] = self.find(ma,row,col,path[1:],i+1,j)
        return bool(sum(k))