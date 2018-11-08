---
title: 874.Walking Robot Simulation
date: 2018-07-23 11:14:02
tags: [code, Greedy]
categories: leetcode
---
## Description

A robot on an infinite grid starts at point (0, 0) and faces north.  The robot can receive one of three possible types of commands:

- -2: turn left 90 degrees
- -1: turn right 90 degrees
- 1 <= x <= 9: move forward x units

Some of the grid squares are obstacles. 

The i-th obstacle is at grid point (obstacles[i][0], obstacles[i][1])

If the robot would try to move onto them, the robot stays on the previous grid square instead (but still continues following the rest of the route.)

Return the square of the maximum Euclidean distance that the robot will be from the origin.

题目链接：[https://leetcode.com/problems/walking-robot-simulation/](https://leetcode.com/problems/walking-robot-simulation/ "https://leetcode.com/problems/walking-robot-simulation/")

#### Difficulty: easy

<!-- more -->

### Example 1:

	Input: commands = [4,-1,3], obstacles = []
	Output: 25
	Explanation: robot will go to (3, 4)

### Example 2:

	Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
	Output: 65
	Explanation: robot will be stuck at (1, 4) before turning left and going to (1, 8)


### Note:

- 0 <= commands.length <= 10000
- 0 <= obstacles.length <= 10000
- -30000 <= obstacle[i][0] <= 30000
- -30000 <= obstacle[i][1] <= 30000
- The answer is guaranteed to be less than 2 ^ 31.

## 分析

1. updating

## 参考代码

	class Solution:
    def robotSim(self, commands, obstacles):
        direction=0
        positionx=0
        positiony=0
        Max=0
        d={}
        for i,j in obstacles:
            if(i in d):
                d[i]=d[i]+[j]
            else:
                d[i] = [j]
        for com in commands:
            if(com==-1):
                direction=(direction+1)%4
            elif(com==-2):
                direction=(direction-1)%4
            else:
                x=positionx
                y=positiony
                for index in range(com):
                    if(direction==0):
                        y+=1
                    elif(direction==1):
                        x+=1
                    elif(direction==2):
                        y-=1
                    else:
                        x-=1
                    if(x in d and y in d[x]):
                        break
                    else:
                        positionx=x
                        positiony=y
            Max=max(Max,positionx**2+positiony**2)
        return Max