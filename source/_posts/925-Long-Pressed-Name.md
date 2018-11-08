---
title: 925.Long Pressed Name（长按键入）
date: 2018-10-23 22:03:14
tags: [code]
categories: leetcode
---
## Description

Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

---

你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。

你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。

题目链接：[https://leetcode.com/problems/long-pressed-name/](https://leetcode.com/problems/long-pressed-name/ "https://leetcode.com/problems/long-pressed-name/")

#### Difficulty: easy

<!-- more -->

### Example 1:

	Input: name = "alex", typed = "aaleex"
	Output: true
	Explanation: 'a' and 'e' in 'alex' were long pressed.

### Example 2:

	Input: name = "saeed", typed = "ssaaedd"
	Output: false
	Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.

### Example 3:

    Input: name = "leelee", typed = "lleeelee"
    Output: true

### Example 4:

	Input: name = "laiden", typed = "laiden"
	Output: true
	Explanation: It's not necessary to long press any character.

### Note:

- name.length <= 1000
- typed.length <= 1000
- The characters of name and typed are lowercase letters.

## 分析

1. 由题意知，由于长按导致的情况是某一个字母出现的次数变多，且是连续的，定义一个get用于返回连续的字母及其出现的次数，形如get("aaleex")->[('a',2),('l',1),('e',2),('x',1)]
2. 若name和typed都为空则返回True；
3. 若get(name)和get(typed)的长度不一致，返回False；
4. 反之，若每一项中get(typed)的次数大于等于get(name)，则返回True，反之False。

## 参考代码
	
	class Solution:
    def isLongPressedName(self, name, typed):
        def get(s):
            if(len(s)==0):
                return []
            li=[]
            tar=s[0]
            index=0
            for i in s:
                if(i!=tar):
                    li.append((tar,index))
                    index=0
                    tar=i
                else:
                    index+=1
            return li
        l1=get(name)
        l2=get(typed)
        if(len(l1)==0 and len(l2)==0):
            return True
        if(len(l1) == len(l2)):
            for i in range(len(l1)):
                if(l1[i][0]==l2[i][0] and l1[i][1]<=l2[i][1]):
                    continue
                else:
                    return False
            return True
        else:
            return False
                    