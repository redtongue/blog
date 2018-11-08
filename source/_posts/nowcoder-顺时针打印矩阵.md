title: '[nowcoder]顺时针打印矩阵'
date: 2018-07-29 22:04:06
tags: [剑指Offer,code,数组]
categories: nowcoder
---

## 题目描述

输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

题目链接： [https://www.nowcoder.com/practice/9b4c81a02cd34f76be2659fa0d54342a](https://www.nowcoder.com/practice/9b4c81a02cd34f76be2659fa0d54342a "https://www.nowcoder.com/practice/9b4c81a02cd34f76be2659fa0d54342a")

<!-- more -->

## 分析

1. 定义y_i,y_j,x_i,x_j为左右上下的边界，没输出一条边，便更新边界值，直到不满足{x_i<=x_j and y_i<=y_j}；
2. 定义index为方向，0为向左，1为向下，2为向右，3为向上。
3. 返回遍历值。

### note

递归应该也是可以做的

### 输入

| 'a'| 'b'| 'c'| 'd'|
|:-:|:-:|:-:|:-:|
|1|2|3|4|
|5|6|7|8|
|9|10|11|12|
|13|14|15|16|

### 输出

> 1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

## 参考代码

	class Solution:
    # matrix类型为二维列表，需要返回列表
    def printMatrix(self, matrix):
        # write code here
        y_i,y_j,x_i,x_j=0,len(matrix[0])-1,0,len(matrix)-1
        index=0
        x,y=0,0
        li=[]
        li.append(matrix[x][y])
        while(x_i<=x_j and y_i<=y_j):
            if(index==0):
                while(y+1<=y_j):
                    y+=1
                    li.append(matrix[x][y])
                x_i+=1
            elif(index==1):
                while(x+1<=x_j):
                    x+=1
                    li.append(matrix[x][y])
                y_j-=1
            elif(index==2):
                while(y-1>=y_i):
                    y-=1
                    li.append(matrix[x][y])
                x_j-=1
            else:
                while(x-1>=x_i):
                    x-=1
                    li.append(matrix[x][y])
                y_i+=1
            index=(index+1)%4
        return li

	运行时间： 21ms