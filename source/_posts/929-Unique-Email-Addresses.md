---
title: 929.Unique Email Addresses（独特的电子邮件地址）
date: 2018-10-28 19:01:30
tags: [code]
categories: leetcode
---
## Description

Every email consists of a local name and a domain name, separated by the @ sign.

For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

Besides lowercase letters, these emails may contain '.'s or '+'s.

If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)

It is possible to use both of these rules at the same time.

Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails? 

---

每封电子邮件都由一个本地名称和一个域名组成，以 @ 符号分隔。

例如，在 alice@leetcode.com中， alice 是本地名称，而 leetcode.com 是域名。

除了小写字母，这些电子邮件还可能包含 ',' 或 '+'。

如果在电子邮件地址的本地名称部分中的某些字符之间添加句点（'.'），则发往那里的邮件将会转发到本地名称中没有点的同一地址。例如，"alice.z@leetcode.com” 和 “alicez@leetcode.com” 会转发到同一电子邮件地址。 （请注意，此规则不适用于域名。）

如果在本地名称中添加加号（'+'），则会忽略第一个加号后面的所有内容。这允许过滤某些电子邮件，例如 m.y+name@email.com 将转发到 my@email.com。 （同样，此规则不适用于域名。）

可以同时使用这两个规则。

给定电子邮件列表 emails，我们会向列表中的每个地址发送一封电子邮件。实际收到邮件的不同地址有多少？

题目链接：[https://leetcode.com/problems/unique-email-addresses/](https://leetcode.com/problems/unique-email-addresses/ "https://leetcode.com/problems/unique-email-addresses/")

#### Difficulty: easy

<!-- more -->

### Example 1:

	Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
	Output: 2
	Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails

### Note:

- 1 <= emails[i].length <= 100
- 1 <= emails.length <= 100
- Each emails[i] contains exactly one '@' character.

## 分析

1. 每一个email中只包含一个“@”，利用“@”将local name and a domain name分开；
2. 由题意知，每个localname中“.”是可以忽略的，“+”后面的是不需要的，故将localname中的“.”与“+”之后的内容去掉；
3. domain name是不需要修改的，将localname和domainname合并加入到set中；
4. 返回set的长度。

## 参考代码

	class Solution:
    def numUniqueEmails(self, emails):
        D=set()
        for tar in emails:
            n1,n2=tar.split('@')
            n1=n1.split('+')[0]
            n1=n1.replace('.','')
            D.add(n1+n2)
        
        return len(D)
        