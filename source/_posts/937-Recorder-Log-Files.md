---
title: 937.Recorder Log Files（重新排列日志文件）
date: 2018-11-11 11:57:40
tags: [code]
categories: leetcode
---
## Description

You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

- Each word after the identifier will consist only of lowercase letters, or;
- Each word after the identifier will consist only of digits.

We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.

---

你有一个日志数组 logs。每条日志都是以空格分隔的字串。

对于每条日志，其第一个字为字母数字标识符。然后，要么：

- 标识符后面的每个字将仅由小写字母组成，或；
- 标识符后面的每个字将仅由数字组成。

我们将这两种日志分别称为字母日志和数字日志。保证每个日志在其标识符后面至少有一个字。

将日志重新排序，使得所有字母日志都排在数字日志之前。字母日志按字母顺序排序，忽略标识符，标识符仅用于表示关系。数字日志应该按原来的顺序排列。

返回日志的最终顺序。

题目链接：[https://leetcode.com/problems/reorder-log-files/](https://leetcode.com/problems/reorder-log-files/ "https://leetcode.com/problems/reorder-log-files/")

#### Difficulty: easy

<!-- more -->

### Example 1:

	Input: ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
	Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]

### Note:

- 0 <= logs.length <= 100
- 3 <= logs[i].length <= 100
- logs[i] is guaranteed to have an identifier, and a word after the identifier.

## 分析

1. 遍历logs，将数字日志加入li，判断依据是：每一条log的第二项是否为数字；
2. 将字母日志去除表示符加入到D链表中，逆序排序（排序即使字典序）；
3. 遍历D，将每一项加入到li中；
4. 返回li。

## 参考代码
	
	class Solution:
    def reorderLogFiles(self, logs):
        l=[]
        D=[]
        for log in logs:
            li=log.split()
            if(li[1].isdigit()):
                l.append(log)
            else:
                D.append((li[1:],log))
        D.sort(reverse=True)
        
        for d in D:
            l=[d[1]]+l
        return l
        