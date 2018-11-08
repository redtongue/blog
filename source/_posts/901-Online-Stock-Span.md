---
title: 901.Online Stock Span
date: 2018-09-10 11:31:49
tags: [code,Stack]
categories: leetcode
---
## Description

Write a class StockSpanner which collects daily price quotes for some stock, and returns the span of that stock's price for the current day.

The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backwards) for which the price of the stock was less than or equal to today's price.

For example, if the price of a stock over the next 7 days were [100, 80, 60, 70, 60, 75, 85], then the stock spans would be [1, 1, 1, 2, 1, 4, 6].

题目链接：[https://leetcode.com/problems/online-stock-span/description/](https://leetcode.com/problems/online-stock-span/description/ "https://leetcode.com/problems/online-stock-span/description/")

#### Difficulty: medium

<!-- more -->

### Example 1:

	Input["StockSpanner","next","next","next","next","next","next","next"], [[],[100],[80],[60],[70],[60],[75],[85]]
	Output: [null,1,1,1,2,1,4,6]
	Explanation: 
	First, S = StockSpanner() is initialized.  Then:
	S.next(100) is called and returns 1,
	S.next(80) is called and returns 1,
	S.next(60) is called and returns 1,
	S.next(70) is called and returns 2,
	S.next(60) is called and returns 1,
	S.next(75) is called and returns 4,
	S.next(85) is called and returns 6.

	Note that (for example) S.next(75) returned 4, because the last 4 prices
	(including today's price of 75) were less than or equal to today's price.


### Note:

- Calls to StockSpanner.next(int price) will have 1 <= price <= 10^5.
- There will be at most 10000 calls to StockSpanner.next per test case.
- There will be at most 150000 calls to StockSpanner.next across all test cases.
- The total time limit for this problem has been reduced by 75% for C++, and 50% for all other languages.

## 分析

1. 由题意知是为了得到以当前价格为结尾的且每个数字都小于等于当前价格的最长序列的长度；
2. 若直接用list存储价格，每次向前遍历得到长度，时间会超限（有note中知，测试数据很大）；
3. 所以动态存储以每个价格结尾的元组（包括价格和对应的长度）；
4. 如果当前价格小于list最后一个价格，则，改价格对应的长度为1；
5. 如果当前价格大于等list中最后一个价格，则，当前价格的长度加上最后一个价格对应的长度，pop出list中最后一个元祖；
6. 重复5，知道，list为空，或当前价格小于最后一个价格；
7. 将当前价格及其长度，加入到list中。

## 参考代码

	class StockSpanner:

    def __init__(self):
        self.li=[]

    def next(self, price):
        s=1
        while self.li and self.li[-1][0]<=price:
            s+=self.li.pop()[1]
        self.li.append((price,s))
        return s