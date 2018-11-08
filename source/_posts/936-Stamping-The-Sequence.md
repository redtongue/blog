---
title: 936.Stamping The Sequence（戳印序列）
date: 2018-11-06 19:49:18
tags: [code,Sting,Greedy]
categories: leetcode
---
## Description

You want to form a target string of lowercase letters.

At the beginning, your sequence is target.length '?' marks.  You also have a stamp of lowercase letters.

On each turn, you may place the stamp over the sequence, and replace every letter in the sequence with the corresponding letter from the stamp.  You can make up to 10 * target.length turns.

For example, if the initial sequence is "?????", and your stamp is "abc",  then you may make "abc??", "?abc?", "??abc" in the first turn.  (Note that the stamp must be fully contained in the boundaries of the sequence in order to stamp.)

If the sequence is possible to stamp, then return an array of the index of the left-most letter being stamped at each turn.  If the sequence is not possible to stamp, return an empty array.

For example, if the sequence is "ababc", and the stamp is "abc", then we could return the answer [0, 2], corresponding to the moves "?????" -> "abc??" -> "ababc".

Also, if the sequence is possible to stamp, it is guaranteed it is possible to stamp within 10 * target.length moves.  Any answers specifying more than this number of moves will not be accepted.

---

你想要用小写字母组成一个目标字符串 target。 

开始的时候，序列由 target.length 个 '?' 记号组成。而你有一个小写字母印章 stamp。

在每个回合，你可以将印章放在序列上，并将序列中的每个字母替换为印章上的相应字母。你最多可以进行 10 * target.length  个回合。

举个例子，如果初始序列为 "?????"，而你的印章 stamp 是 "abc"，那么在第一回合，你可以得到 "abc??"、"?abc?"、"??abc"。（请注意，印章必须完全包含在序列的边界内才能盖下去。）

如果可以印出序列，那么返回一个数组，该数组由每个回合中被印下的最左边字母的索引组成。如果不能印出序列，就返回一个空数组。

例如，如果序列是 "ababc"，印章是 "abc"，那么我们就可以返回与操作 "?????" -> "abc??" -> "ababc" 相对应的答案 [0, 2]；

另外，如果可以印出序列，那么需要保证可以在 10 * target.length 个回合内完成。任何超过此数字的答案将不被接受。

题目链接：[https://leetcode.com/problems/stamping-the-sequence/](https://leetcode.com/problems/stamping-the-sequence/ "https://leetcode.com/problems/stamping-the-sequence/")

#### Difficulty: hard

<!-- more -->

### Example 1:

	Input: stamp = "abc", target = "ababc"
	Output: [0,2]
	([1,0,2] would also be accepted as an answer, as well as some other answers.)
### Example 2:

	Input: stamp = "abca", target = "aabcaca"
	Output: [3,0,1]

### Note:

- 1 <= stamp.length <= target.length <= 1000
- stamp and target only contain lowercase letters.

## 分析

1. 

## 参考代码
	
	updating