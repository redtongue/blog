---
title: 'lda2vev:Mixing Dirichlet Topic Models and Word Embeddings to Make lda2vec'
date: 2018-08-27 14:32:58
tags: [recommendation,clustering]
categories: paper
---
结合主题信息和词潜入，生成包含主题信息的向量化表示lda2vec.

论文地址:[https://arxiv.org/abs/1605.02019](https://arxiv.org/abs/1605.02019)

## ABSTRACT

<!-- more -->

已经证明分布式密集词向量在捕捉语言中的标记级语义和句法规则方面是有效的，而主题模型可以在文档上形成可解释的表示。在这项工作中，我们描述了lda2vec，它是一个与Dirichlet分布的主题向量的潜在文档级别混合学习密集词向量的模型。与连续密集的文档表示形式相反，该表达式通过非负单纯形约束产生稀疏的，可解释的文档混合。我们的方法很容易整合到现有的自动分化框架中，并允许无人监督的文档表示适合科学家使用，同时学习单词向量及它们之间的线性关系。

## Introduction

主题模型因其能够将文档集合组织为一组较小的突出主题而受到欢迎。 与密集的分布式表示形式相反，这些文档和主题表示通常可以被人类访问，并且更容易被解释。 这种解释性提供了额外的选项来突出我们的文档系统中的模式和结构。 例如，使用潜在狄利克雷分配（LDA）主题模型可以揭示文档中的词汇集合（Blei et al。，2003），强调时间趋势（Charlin et al。，2015），并推断补充产品的网络（McAuley et al。 。，2015）。 见Blei等人。 （2010年），概述计算机视觉，遗传标记，调查数据和社交网络数据等领域的主题建模。

![lda2vec builds representations over both words and documents by mixing word2vec’s skipgram architecture with Dirichlet-optimized sparse topic mixtures](lda2vec1.png)

图1：lda2vec通过将word2vec的skip gram体系结构与Dirichlet优化的稀疏主题混合体相结合，在单词和文档上构建表示。 文中描述了图中出现的各种组件和转换。

对于构建文档表示的密集向量方法也存在：Le和Mikolov（2014）提出了可以预测段落中词袋的段落向量，Kiros et al（2015）构建了在给定句子之前和之后重构句子序列的向量，并且Ghosh等人 （2016）构建了预测后续句子特征的语境LSTMs。 概率主题模型倾向于将文档形成为主题的稀疏混合成员，而神经网络模型倾向于将文档建模为密集向量。 由于其稀疏性和低维性，来自前者的陈述更容易检查，并且更直接地产生关于基础系统的高层次直觉（尽管不是没有危害，参见Chang等人（2009））。 本文探讨混合稀疏文档表示密集词和主题向量的混合方法。

不幸的是，制定一个新的概率主题模型需要得到一个新的近似值，这个过程需要大量的专业知识，并且必须根据每个模型进行定制。 因此，原型开发非常耗时，必须仔细考虑对模型体系结构的更改。 但是，使用现代自动分化框架，从业者可以将开发时间集中在模型设计上，而不是模型近似值。 这加快了评估哪些模型特征相关的过程。 这项工作利用Chainer（Tokui等，2015）框架来快速开发模型，同时使我们能够利用GPU来显着提高计算速度。

最后，文本上的传统主题模型没有利用分布式词语表示方面的最新进展，它可以捕捉令牌之间语义上有意义的规则。对词语共现的考察已被证明是一个富有成效的研究范式。例如，Mikolov等人（2013）利用Skipgram负抽样（Skipgram NegativeSampling，SGNS）利用跨越文本语料库的窗口形成的单词上下文对来训练单词嵌入。这些向量表示最终编码显着的线性，如king-man+woman=queen。事实上，Levy和Goldberg（2014c）证明，这隐含地分解了点阵互信息（PMI）矩阵的变体，该矩阵强调预测罕见群体的频繁共现。与PMI矩阵密切相关，Pennington 等人（2014）将大型全球字数共生矩阵分解以产生比SGNS更高效且性能稍高的计算嵌入。一旦创建，这些表示就可用于信息检索（Manning等，2009）和解析任务（Levy和Goldberg，2014a）。在这项工作中，我们将利用word级表示来建立文档级抽象。

本文通过包含可解释文档表示来扩展分布式词语表示，并证明模型推理可以在自动分化框架内执行和扩展。

## Model

本节介绍lda2vec的模型。 我们有兴趣修改（Mikolov et al。，2013）中的Skipgram负采样（SGNS）目标，以利用文档范围的特征向量，同时学习连续的文档权重加载到主题向量。 网络架构如图1所示。
在（1）中的总损失项$\iota$是Skiggram负采样损失（SGNs）$\iota_{ij}^{neg}$的总和，并且在文档权重上增加了Dirichlet似然项，$\iota^d$将在后面讨论。使用上下文向量($\overrightarrow{c_j}$)、支点字向量($\overrightarrow{w_j}$)、目标词向量($\overrightarrow{w_i}$)和负采样词向量($\overrightarrow{w_l}$)进行损失。

$$ \iota =\iota^d +\sum_{ij}\iota_{ij}^{neg} \tag{1}$$

$$\iota_{ij}^{neg} = \log_\sigma(\overrightarrow{c_j}\cdot\overrightarrow{w_l})+\sum_{l=0}^n\log_\sigma(-\overrightarrow{c_j}\cdot\overrightarrow{w_l}) \tag{2}$$

### Word Representation

如在Mikolov等人（2013），当它们在移动的窗口中共同出现在整个语料库中时，提取枢轴词和目标词对（j，i）。在我们的实验中，窗口在枢轴标记之前和之后包含5个标记。对于每个枢轴目标字对，枢轴字用于预测附近的目标字。每个单词用固定长度的密集分布表示向量表示，但与Mikolov等人（2013年）不同，相同的单词向量用于枢轴和目标表示。2）中所示的SGNS损失试图区分出出现在语料库中的上下文词对，从而随机抽取 “negative”词汇池。当观察到的词与边缘分布完全分离时，该损失最小化。从中得出令牌的分布是$u^β$，其中u表示由总语料库大小归一化的整体词频。除非另有说明，否则，如Mikolov等人(2013)所述，负采样功率β设为3/4，负样本数固定为n = 15。请注意，$u^0.0$的分布会从词汇中绘制负标记而没有受欢迎的概念，而与$u^1.0$成比例的分布则取自经验单字分布。与单字分布相比，$u^{3/4}$的选择稍微强调为负样本选择不常用单词。与优化softmax交叉熵（其需要对每个令牌的总体流行度进行建模）相反，负面抽样侧重于通过从语料库中的每个令牌的边际流行度中抽取负样本来有条件地学习词向量。

### Document Representations

lda2vec将单词和文档向量嵌入同一个空间并同时训练两个表示。通过将枢轴和文档向量相加，两个空间都可以有效地结合在一起。 Mikolov等人（2013）提供了直觉，词向量可以汇总在一起形成两个词的语义上有意义的组合。例如，Germany+airline的载体表示与Lufthansa的载体相似。我们想利用单词向量的加性来构造一个有意义的单词和文档向量。例如，如果lda2vec正在扫描文档，第j个单词是德国，则预测相邻单词如法国，西班牙和奥地利相似。但是，如果文档特别是关于航空公司，那么我们希望构建一个类似于航空公司的单词向量的文档向量。然后，不是单独预测类似于德国的令牌，而是可以对文档和主要词汇进行类似的预测，例如：Lufthansa，Condor Flugdienst和Aero Lloyd。由有意义的词向量的总和驱动，在LDA2VEC中，上下文向量被明确地设计为文档向量和词向量的总和，如（3）：

$$\overrightarrow{c_j}=\overrightarrow{w_j}+\overrightarrow{d_j} \tag{3}$$

这通过保留文档中所有单词上下文对的($\overrightarrow{d_j}$)来模拟文档范围的关系，同时仍然利用由枢轴词向量($\overrightarrow{w_j}$)和目标词($\overrightarrow{w_i}$)之间的相互作用产生的局部词间关系。文档和单词向量被汇总在一起形成一个上下文向量，分别直观地捕捉长期和短期主题。为了防止共同适应，我们也对非规范化文档向量($\overrightarrow{d_j}$)和枢轴词向量($\overrightarrow{w_j}$)进行dropout（Hinton et al。，2012）。

#### Document Mixtures

如果我们只包含到目前为止的结构，模型将为每个文档生成一个密集的向量。 然而，lda2vec致力于形成可解释的表示，并且这样做会施加额外的约束，使得文档表示与传统的LDA模型中的相似。我们的目标是从混合主题向量生成一个文档向量，为此，我们首先约束文档向量($d_j$),投影到一组潜在的主题向量($\overrightarrow{t_0}$),($\overrightarrow{t_1}),⋯,($\overrightarrow{t_k}$):

$$\overrightarrow{d_j}=p_{j0}\cdot\overrightarrow{t_0}+p_{j2}\cdot\overrightarrow{t_2}+\cdots+p_{jk}\cdot\overrightarrow{t_k}+\cdots+p_{jn}\cdot\overrightarrow{t_n} \tag{4}$$

每个权重0≤$p_{jk}$≤1是表示主题k中文档j的隶属度的分数。 例如，稍后描述的Twenty Newsgroups 模型具有11313个文档并且k = 20个主题，所以j = 0 ... 11312，k = 0 ... 19。 当单词向量维数设置为300时，假设文档向量($\overrightarrow{d_j}$)，单词向量($\overrightarrow{w_i}$)和主题向量($\overrightarrow{t_k}$)都具有维度300.注意，主题向量($\overrightarrow{t_k}$)是共享的 并且是所有文档的共同组成部分，但其强度由文档权重p_jk调整。为了有助于可解释性，文档成员资格被设计为非负面的，并且归结为统一。 为了实现这个约束，softmax变换将在R^300中初始化的潜在向量映射到由$p_{jk}$定义的单纯形中。softmax变换自然会强制约束$\sum_k p_{jk} = 1$，并允许我们将成員資格解釋为百分比而非无限权重。

将（4）中的混合作为总和来保证主题向量($\overrightarrow{t_k}$)，文档向量($\overrightarrow{d_j}$)和词向量($\overrightarrow{w_i}$)在相同的空间中操作。因此，可以直接计算哪些字($\overrightarrow{w_i}$)最类似于任何给定的主题向量($\overrightarrow{t_k}$)。尽管每个主题不是字面上語料庫中存在的标记，但与其他标记的相似性是有意义的并且可以被测量。此外，通过检查最相似的单词列表，可以尝试解释该主题所代表的内容。例如，通过计算与任何主题向量（例如argma$x_i(\overrightarrow{t_0}\cdot\overrightarrow{w_i})$最相似的标记，人们可以发现第一个主题向量($\overrightarrow{t_0}$)与标记pitching，catcher和Braves相似，而第二个主题向量($\overrightarrow{t_1}$)可能与Jesus，God和faith相似。这为我们提供了将第一个主题解释为baseball主题的选项，因此每个文档比例$p_{j0}$中的第一个分量指示文档j在棒球主题中的数量。同样，第二个主题可能被解释为基督教，任何文档比例的第二个组成部分$p_{j1}$表示该文件在基督教主题中的成员身份。

#### Sparse Memberships

最后，通过对具有低浓度参数α的Dirichlet似然优化文档权重，使文档权重$p_{ij}$被稀疏化：

$$\iota^d=\lambda\sum_{jk}(\alpha-1)\log p_{jk} \tag{5}$$

5）中的总体目标衡量文档j在主题k中概括所有可用文档的可能性。该项的强度由调整参数λ调整。当α＜1时，每一个主题中的文档比例耦合都是稀疏的，当α＞1时，这种简单的可能性会促使文档的比例耦合。为了提高可解释性，我们有兴趣寻找稀疏成员，并设置α=n^(-1)，其中n是主题。我们还发现将Dirichlet优化的整体强度设置为λ= 200的效果很好。文档比例被初始化为相对均匀，但随着时间的推移，$\iota^d$鼓励文档比例向量随着时间的推移变得更加集中（例如稀疏）。在没有这个稀疏诱导项的实验中（或者当α= 1时），文档权重$p_{ij}$倾向于在所有元素之间展开概率质量。如果没有任何稀疏性引入术语，那么许多非零权重的存在使解释文档向量变得困难。此外，我们发现话题基础也受到强烈影响，话题变得不連貫。

| # of topics| β|Topic Coherences
|:-:|:-:|:-:|
|20|0.75|0.567
|30|0.75|0.555
|40|0.75|0.553
|50|0.75|0.547
|20|1.00|0.563
|30|1.00|0.564
|40|1.00|0.552
|50|1.00|0.558

图2：给出了在Twenty Newsgroups数据集中由lda2vec发现的平均主题一致性。 主题一致性已被证明与主题模型的人类评估相关（Roder等，2015）。 给出了所选主题的数量，以及负抽样指数参数β。 与β= 1.00相比，β= 0.75将更多的稀有词作为负样本。 在模型n = 20个主题和β= 0.75中找到最好的主题相关性。

### Preprocessing and Training

1）中的目标是一次在单独的小批量中进行训练，同时使用Adam优化器（Kingma和Ba，2014）在整个数据集中处理两百个时期。Dirichlet似然项$\iota^d$通常是在所有文档上计算的，因此在将目标修改为小批量时，我们调整术语的损失与小批量大小除以总语料库的大小成比例。我们的软件是开源的，可在线获得，记录和单元测试。最后，将给定主题中前十个最有可能的单词提交给在线Palmetto主题质量测量工具，并记录相干性测量$C_v$。在评估多个替代方案后，$C_v$是Roder等人（2015）推荐的一致性度量。此度量对外部语料库上大小为110的滑动窗口内的每对单词的归一化点互信息（NPMI）进行平均，并返回提交的单词集的NPMI平均值。使用3COSMUL度量来评估令牌到词的相似度（Levy和Goldberg，2014b）。

|Topic Label|“Space”|“Encryption”|“X Windows”|“Middle East”
|:-:|:-:|:-:|:-:|:-:|
|Top tokens|Astronomical <br /> Astronomy <br /> Satellite <br /> Planetary <br /> telescope|Encryption <br /> Wiretap <br /> Encrypt <br /> Escrow <br /> Clipper|Mydisplay <br /> Xlib,Window <br /> Cursor <br /> pixmap|Armenian <br /> Lebanese <br /> Muslim <br /> Turk <br /> sy|
|Topic Coherence|0.712|0.675|0.472|0.615|

图3：由Twenty Newsgroups数据集中的lda2vec发现的主题。 推断的主题标签显示在第一行。 与该主题相似度最高的令牌将在下面显示。请注意,Twenty Newsgroups语料库包含相应的新闻组，如sci.space，sci.crypt，comp.windows.x和talk.politics.mideast。

## Experiments

### Twenty Newsgroups

本节详细介绍了发现二十新闻组数据集中显着主题的实验，这是一种流行的文本机器学习语料库。语料库中的每个文档都发布到二十个可能的新闻组中的一个。尽管每篇文章的文本都可用于lda2vec, 但每个新闻组分区并未显示给算法，但对于发现的主题的事后定性评估仍然有用。使用Scikit-learn（Pedregosaetal，2012）中提供的数据加载器预处理语料库，使用SpaCy解析器（Honnibal and Johnson，2015）识别令牌。单词被词组化以将多个入口组合为单个令牌。在语料库中发生少于十次的令牌被删除，标记看起来像是URL，数字或在其正文形式中包含特殊符号。预处理之后，数据集包含11,313个文档中的8946个独特标记的180万个观察值。字向量被初始化为Mikolov等人（2013）的预训练值，但在训练时允许更新这些向量。

通过改变主题数量n∈20,30,40,50和负取样指数β∈0.75,1.0来评估一系列lda2vec参数。 图2总结了n = 20个话题和负抽样功率β= 0.75的最佳话题相关性。我们简要地试验了dropout率的变化，但我们没有观察到任何实质性差异。

图3列出了在Twenty Newsgroups数据集中发现的四个示例主题。每个主题与与训练的单词向量相同的空间中存在的主题向量相关联，并且列出的是与每个主题向量最相似的词。所显示的第一个主题与令牌astronomical, Astronomy, satellite, planetary, and telescope有很高的相似性，因此可能是与'sci.space'新闻组类似的'Space'相关主题。第二个示例主题类似于语义上与'Encryption'相关的单词，例如Clipper和encrypt，并且可能与'sci.crypt'新闻组相关。第三和四个示例主题是“X Windows”和“Middle East”，可能属于“comp.windows.x”和“talk.politics.mideast”新闻组。

### Hacker News Comments corpus

这部分评估lda2vec在一个非常大的黑客新闻评论语料库上。黑客新闻是社交内容投票网站和社区，主要关注技术和创业。在这个语料库中，单个文档由发布到单个文章的所有评论中的所有单词组成。只包含超过10条评论的报道，并且仅包含评论超过10条的用户的评论。我们忽略其他元数据，如投票，时间戳和作者身份。原始数据集4可在线下载。语料库几乎是二十新闻组语料库的大小，足以学习专业词汇。为了利用这个丰富的语料库，我们使用SpaCy来一次标记整个名词短语和实体（Honnibal and Johnson，2015）。特定的标记过程也可以在线获得，预处理的数据集结果也是如此。这使我们能够捕捉诸如community policing measure等短语以及像Steve Jobs这样的突出数据作为单一的令牌。然而，这种标记化过程会生成一个与Palmetto主题一致性工具中可用的词汇完全不同的词汇，因此我们不会在此语料库上报告主题一致性。经过预处理，该语料库包含75万个令牌，在66万个文档中有11万个独特的令牌。与Twenty Newsgroups分析不同，词向量是随机初始化的，而不是使用预训练向量库。

|“Housing Issues”|“Internet Portals”|“Bitcoin”|“Compensation”|“Gadget Hardware”|
|:-:|:-:|:-:|:-:|:-:|
|more housing <br /> basic income <br /> new housing <br /> house prices <br /> short-term rentals|DDG. <br /> Bing <br /> Google+ <br /> DDG <br /> iGoogle|Btc <br /> Bitcoins <br /> Mt. Gox <br /> MtGox <br /> Gox|current <br /> salary <br /> more equity <br /> vesting <br /> equity <br /> vesting <br /> schedule|the Surface Pro <br /> HDMI <br /> glossy screens <br /> Mac Pro <br /> Thunderbolt|

图4：Hacker News评论数据集中由lda2vec发现的主题。 推断的主题标签显示在第一行。 我们从名词短语中形成令牌，以捕捉这个专用语料库的独特词汇。

|Artiﬁcial sweeteners|Black holes|Comic Sans|Functional Programming|San Francisco|
|:-:|:-:|:-:|:-:|:-:|
|Glucose <br /> Fructose <br /> sugars <br /> sugar <br /> Soylent <br /> Paleo diet <br /> diet <br /> carbohydrates|Particles <br /> Consciousness <br /> quantum mechanics <br /> universe <br /> dark matter <br /> Big Bang <br /> Planets <br /> entanglement|Typeface <br /> Arial <br /> Times New <br /> Roman <br /> Font <br /> new logo <br /> Anonymous Pro <br /> Baskerville <br /> serif font|FP <br /> Haskell <br /> functional languages <br /> monads <br /> Lisp <br /> Clojure <br /> category theory <br /> OO|New York <br />  <br /> Palo Alto <br /> New York City <br /> SF <br /> Mountain View <br /> Seattle <br /> Los Angeles <br /> Boston|

图5：给出顶行中的示例标记，报告Hacker News评论语料库中最相似的单词。

我们使用40个主题和256个隐藏单元来训练lda2vec模型，并报告学习的主题，以演示语料库中存在的主题。 此外，我们证明了向这个语料库指定的词向量和语义关系是学习到的。

在图4中列出了Hacker News语料库中lda2vec发现的示例主题。这些主题表明，语料库的主要主题以与LDA类似的方式在学习的主题向量中得以再现和表示（Blei et al。，2003）。第一个是我们对Housing Issues(房屋问题)的标签，其中涉及到住房政策问题，如住房供应（例如more housing）和成本（如basic income 和 house prices）。另一个主题列出了主要的internet portals（互联网门户），例如隐私意识搜索引擎“Duck Duck Go”（在语料库中缩写为DDG），以及其他主要搜索引擎（例如Bing）和主页（例如Google+和iGoogle）。第三个话题是流行的在线货币和支付系统Bitcoin（比特币），货币btc的缩写形式以及现已解散的比特币交易平台Mt. GOX。第四个主题是考虑薪酬和compensation，包括current salary(当前的薪水)，more equity(更多的股权)和vesting(归属)，以及雇员从其雇主那里获得股票的过程。第五个示例主题是HDMI和glossy screens等技术硬件(hardware)，并且包含诸如Surface Pro和Mac Pro等设备。

图5表明，标记的相似性以与SGNS类似的方式学习（Mikolov et al。，2013），但专门用于Hacker News语料库。与令牌人Artiﬁcial sweeteners类似的令牌包括其他与sugar有关的令牌，如fructose和与食物相关的令牌，如古饮食。与Black holes相似的标记包括物理相关的概念，如星系和暗物质。黑客新闻语料库将大量文本用于字体和设计，最类似于comic Sans的单词是其他流行字体（例如Times New Roman和Helvetica）以及与字体相关的概念，如Typeface
和serif font。与Functional Programming类似的令牌与其他计算机科学相关的令牌相似，而类似于San Francisco的令牌包括其他大型美国城市以及位于旧金山(San Francisco)湾区的小城市。

|Query|Result|
|:-:|:-:|
|California + technology|Silicon Valley|
|digital + currency|Bitcoin|
|Javascript - browser + server|Node.js|
|Mark Zuckerberg - Facebook + Amazon|Jeff Bezos|
|NLP - text + image	computer|vision|
|Snowden - United States + Sweden|Assange|
|Surface Pro - Microsoft + Amazon|Kindle|

图6：Hacker News评论数据集中由lda2vec发现的示例线性关系。 第一列表示示例输入查询，第二列表示与输入最相似的标记。

图6表明，除了学习文档的主题以及与词语标记的相似之外，词汇之间的线性规律也被学习到。 “Query”列列出了一系列令牌，这些令牌在组合时会产生与“Result”列中显示的令牌最接近的令牌向量。字面上对矢量的减法和增加进行评估，而是利用3COSMUL目标（Levy和Goldberg，2014b）。结果表明，令牌向量之间存在与黑客新闻社区重要的令牌之间的关系。例如，Silicon Valley(硅谷)的向量与California（加利福尼亚）和Technical（技术）类似，Bitcoin（比特币）确实是一种digital currency（数字货币），Node.js是一种能够在server（服务器）上运行Javascript而不是在客户端browsers（浏览器）上运行Javascript的技术，Jeff Bezos和Mark Zuckerber分别是Amazon（亚马逊）和Facebook的首席执行官，NLP和compute vision（计算机视觉）分别是机器学习研究领域，主要分别处理Text(文本)和Images(图像)，Edward Snowden(爱德华斯诺登)和Julian Assange(朱利安阿桑奇)都是举报者，他们主要位于United states(美国)和Sweden(瑞典)，最终Kindle和Surface Pro都是平板电脑分别由Amazon(亚马逊)和Microsoft(微软)制造。在上述示例中，令牌之间的语义关系对属性和特征进行编码，包括：位置，货币，服务器v.s.客户，领导力数据，机器学习领域，政治数据，国籍，公司和硬件。

### Conclusion

这项工作演示了一个简单的模型lda2vec，它扩展了SGNS（Mikolov et al。，2013），以构建无监督的文档表示，从而产生连贯的主题。将词，主题和文档向量联合训练并嵌入到共同表示空间中，该空间保留学习词向量之间的语义规则性，同时仍然以LDA的风格产生稀疏且可解释的文档 - 主题比例（Blei等，2003 ）。。在Twenty Newsgroups语料库中形成的主题产生了高度的平均主题一致性，这些主题一致性已被证明与人类主题评估相关（Roder等，2015）。当应用到Hacker News comments语料库时，lda2vec发现了该社区内的显着话题，并且学习了单词之间的线性关系，从而可以在该语料库的专业词汇表中解决单词类比问题。最后，我们注意到，我们的方法在自动微分框架中实现是简单的，并且可以导致更容易解释的无监督表示。






