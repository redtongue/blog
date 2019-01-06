---
title: 'DKN:Deep Knowledge-Aware Network for News Recommendation'
date: 2018-08-27 13:10:49
tags: recommendation
categories: paper
---
用知识图谱表示，结合CNN，利用attention module帮助识别用户的多兴趣，进行新闻推荐

论文地址:[https://arxiv.org/abs/1801.08284](https://arxiv.org/abs/1801.08284 "https://arxiv.org/abs/1801.08284")

参考：[Qiu Fengyu](https://qiufengyu.github.io/2018/04/17/reading14/ "https://qiufengyu.github.io/2018/04/17/reading14/")

<!-- more -->

## ABSTRACT

在线新闻推荐系统主要解决新闻信息过载的问题，同时尽可能提升用户的使用体验，注重个性化。一般来说，新闻的语言是**高度凝练**的，有许多命名实体，并且包含了很多的常识。目前现有的一些推荐算法不关注、或者说无法理解新闻中的一些“知识”以及我们所了解的常识，仅仅通过一些简单的模式匹配、主题相关进行机械的推荐，不具有理论上的扩展性。此外，**新闻具有时效性的特征**，用户的口味也会 **随着时间变化**，为解决这些问题，本文提出了 DKN 模型，将知识图谱表示融入新闻推荐中。DKN 是一个预测点击率的基于内容的深度推荐模型。DKN 的核心是一个多通道、命名实体对齐的、融合了知识的卷积神经网络（KCNN），从语义和知识层面上来表示新闻。KCNN 把新闻中的词和实体作为通道（channel），并且在卷积过程中显式地监督两者的对齐关系。为了处理用户喜好的多样性，加入了 Attention 动态地对用户阅读历史进行加权，选择候选新闻。在大量的相关实验中，取得了最好的结果。

### KEYWORDS
新闻推荐，知识图谱表示，深度神经网络，注意力模型

## INTRODUCTION

随着网络的发展，现在人们阅读新闻的习惯已经从传统的纸媒、电视转向网络，如[Google News](https://news.google.com "https://news.google.com")和[Bing News](https://www.bing.com/news "https://www.bing.com/news")在线新闻网站，收集各种各样的新闻资源提供给读者。网络新闻平台的一个常见问题是，文章的数量可能会被淹没，从而减轻信息过载的影响，从而帮助读者获取阅读兴趣并提出个性化建议。
![ Illustration of two pieces of news connected throughknowledgeentities](DKN1.png)

总的来说，新闻推荐更为突出的主要有以下三个挑战：

1. 跟电影和酒店相比，新闻具有很强的时间敏感性，容易过期，过时的新闻很快就会被更新的新闻所取代。从而传统基于 ID 的协同过滤方法就很有限了；
2. 用户在阅读新闻的时候是话题敏感的，通常对多个话题都具有倾向性。如何从多种多样的阅读记录中，对用户的多种主题偏好信息进行动态表示，是新闻推荐系统做好的关键；
3. 新闻文本语言高度凝练，还包含了大量的知识实体和常识。

如图1所示，一个用户点击一个标题为“Boris Johnson Has Warned Donald Trump To Stick To The Iran Nuclear Deal"的新闻，其中包含四个实体：“Boris Johnson”,“Donald Trump”, “Iran” and “Nuclear”，事实上，该用户对另外一个新闻（“North Korean EMP Attack Would Cause Mass U.S. Starvation, Says Congressional Report”）也感兴趣，跟上一个联系跟紧密是因为常识。经典的语义模型或者主题模型，都是从词的共现信息或词聚类结构上挖掘新闻之间的关系，仅仅抓住了语义信息，从而给用户的新闻推荐就会变窄，局限在一个话题中。而本文提出的 DKN 能够从中挖掘新闻之间的潜在知识层面上的联系，引入知识图谱中的信息，是一种十分合理的扩展。

为了提取新闻之间深度逻辑关系，将知识图谱引入新闻推荐很有必要。知识图是一种有向异构图，其中节点对应于实体，边对应于关系。 最近，研究人员已经提出了一些学术知识图谱，如[NELL](http://rtw.ml.cmu.edu/rtw/ "http://rtw.ml.cmu.edu/rtw/"),[DBpedia](http://wiki.dbpedia.org/ "http://wiki.dbpedia.org/"),[Google Knowledge Graph](https://www.google.com/intl/bn/insidesearch/features/search/knowledge.html "https://www.google.com/intl/bn/insidesearch/features/search/knowledge.html") 和[Microsoft Satori](https://searchengineland.com/library/bing/bing-satori "https://searchengineland.com/library/bing/bing-satori").这些知识图谱都成功的应用于机器阅读，文本分类和词嵌入。

考虑到之前提到的新闻推荐的挑战以及知识图谱的广泛成功应用，本文我们提出利用知识图谱做新闻推荐的新的框架（deep knowledge-awarenetwork， **DKN**）与传统的协同过滤方法不同的是，DKN 是一种基于内容的 CTR（点击率）预测模型：给定一个候选新闻和用户之前的浏览历史，预测用户点击候选新闻的概率。在 DKN 中的主要步骤：

1. 对新闻中的每个词都在知识图谱中找到对应的实体来扩展它的信息，使用他的邻居实体来增强新闻的知识层面的信息。
2. 设计DKN的关键部分knowledge-aware convolutional neural networks (KCNN), 把新闻词和知识层次的信息表示为知识感知嵌入向量。

	- KCNN 是多个通道的，新闻输入与图像的 RGB 通道类似，这里的通道包含了新闻中词的嵌入（embedding），实体的嵌入及相关实体的嵌入；
	- 词语-实体对齐信息，把一个词和对应的实体在多个通道内进行对齐，通过某种转换函数（映射）来消除词向量和实体向量空间的异构性。或者可以这样理解，KCNN 保证了多个通道内词语的表示的一致性，并且显式地减少不同 embedding 空间的隔阂。

3. 通过 KCNN，得到的新闻知识感知表示向量，候选新闻与用户点击过的新闻通过 attention，加权一个用户的历史新闻得到用户的嵌入表示。用户的嵌入表示和候选新闻的嵌入表示最后通过 DNN 来计算候选新闻被用户点击的概率。

最终，本文提出的 DKN 模型在 Bing News 推荐上得到了显著的性能提升。DKN显著优于基线在F1上的2.8%到17%和AUC的2.6%到16.1%，显著水平为0.1。 提出的注意力机制也可以带来3.5%和1.4%的提高。

## PRELIMINARIES

这部分介绍本文相关的概念和模型，包括知识图谱嵌入和句子表示的卷积神经网络。

### Konowledge Graph Embedding