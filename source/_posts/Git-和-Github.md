---
title: Git 和 Github
date: 2018-11-14 20:22:55
tags: [code]
categories: whatever
---

以下教程没用具体的代码截图，言简意赅，都是具体的操作，就是为了自己以后当作笔记来看，可以参考[廖雪峰](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

## Git 教程

### 安装Git

在Windows上安装Git，可以从Git官网直接[下载安装程序](https://git-scm.com/downloads)，（网速慢的朋友[这里](https://pan.baidu.com/s/1sd-0JoDgGRlt3_3uzlUFUg)），然后按默认选项安装即可。

安装完成后，在开始菜单中打开Git Bash，输入如下命令：

<!-- more -->

	$ git config --global user.name "Your Name"
	$ git config --global user.email "email@example.com"

相当于自报家门，注意git config命令的--global参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。

### 创建版本库

首先创建一个新目录，进入到到新目录，在Git Bash中输入如下命令：

	$ git init

Git就把仓库建好了，会多了一“.git”目录，如果没有看到，可能是隐藏了，右键查看，取消隐藏就可以了。

新建文件，修改内容，如下命令提交到Git仓库：

	$ git add readme.txt

readme.txt是需要提交的文件，可以用“.”代表所有需要提交的文件。

如下命令告诉Git仓库将文件提交到仓库：

	$ git commit -m "解释标识这次提交"

"解释标识这次提交"想怎么写就怎么写，为了自己以后看的明白，还是写的清楚一些，最好是这次提交修改了什么内容。

commit之前可以多次add，add后面多个文件可以空格隔开。

### 管理版本

#### 版本回退

版本控制系统肯定有某个命令可以告诉我们历史记录，在Git中，我们用
**git log**命令查看：

版本回退，“HEAD”表示当前版本，上一个版本就是“HEAD^”,上上一个就是“HEAD^”，上一百个个就是“HEAD~100”。

如下命令是回退到上一个版本：

	$ git reset --hard HEAD^

也可以返回前面的版本：

	$ git reset --hard 1094a

“1094a”是版本的commit_id，可以通过git log 查看，不用写全，只需要写出前几位几个。

#### 工作区和暂存区

Git和其他版本控制系统如SVN的一个不同之处就是有暂存区的概念。

**工作区（Working Directory）**

就是你在电脑里能看到的目录

**版本库（Repository）**

工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。

Git的版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支master，以及指向master的一个指针叫HEAD。

![版本库](版本库.png)

分支和HEAD的概念我们以后再讲。

前面讲了我们把文件往Git版本库里添加的时候，是分两步执行的：

第一步是用git add把文件添加进去，实际上就是把文件修改添加到暂存区；

第二步是用git commit提交更改，实际上就是把暂存区的所有内容提交到当前分支。

因为我们创建Git版本库时，Git自动为我们创建了唯一一个master分支，所以，现在，git commit就是往master分支上提交更改。

你可以简单理解为，需要提交的文件修改通通放到暂存区，然后，一次性提交暂存区的所有修改。

#### 管理更改

什么是修改？比如你新增了一行，这就是一个修改，删除了一行，也是一个修改，更改了某些字符，也是一个修改，删了一些又加了一些，也是一个修改，甚至创建一个新文件，也算一个修改。

修改之后add，再修改，commit时只会commit第一次修改的内容，每一次add对应一个commit或者多个add对应一个commit。

提交之后可以使用如下命令查看仓库文件与本地文件的区别：

	$ git diff HEAD -- readme.txt

上面查看的是readme.txt的区别。

#### 撤销修改

两种情况，一种是只是本地修改了，没有git add：

	$ git checkout -- readme.txt

如上，放弃readme.txt的修改。

第二种是已经git add了：

	$ git reset HEAD readme.txt

如上，把暂存区的修改撤销掉（unstage），重新放回工作区；

	$ git checkout -- readme.txt

再利用checkout放弃本地的修改。

#### 删除文件

将本地文件删除，再将仓库中的文件删除：

	git rm test.txt

如上删除。

将本地文件删除，删错了，从仓库中找回来：

	$ git checkout -- test.txt

git checkout其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。

### 远程仓库

GitHub是个神奇的网站，从名字就可以看出，这个网站就是提供Git仓库托管服务的，所以，只要注册一个GitHub账号，就可以免费获得Git远程仓库。

第0步：申请GitHUb账号。

第1步：创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有id_rsa和id_rsa.pub这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：

	$ ssh-keygen -t rsa -C "youremail@example.com"

如果一切顺利的话，可以在用户主目录（如C:\Users\red_tongue）里找到.ssh目录，里面有id_rsa和id_rsa.pub两个文件，这两个就是SSH Key的秘钥对，id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人。

第2步：登陆GitHub，打开“Account settings”，“SSH Keys”页面：

然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴id_rsa.pub文件的内容：

当然，GitHub允许你添加多个Key。假定你有若干电脑，你一会儿在公司提交，一会儿在家里提交，只要把每台电脑的Key都添加到GitHub，就可以在每台电脑上往GitHub推送了。

在GitHub上免费托管的Git仓库，任何人都可以看到，私人的收费的。

#### 添加远程仓库

首先，登陆GitHub，然后，在右上角找到“Create a new repo”按钮，创建一个新的仓库：如test

目前，在GitHub上的这个test仓库还是空的，GitHub告诉我们，可以从这个仓库克隆出新的仓库，也可以把一个已有的本地仓库与之关联，然后，把本地仓库的内容推送到GitHub仓库。

现在，我们根据GitHub的提示，在本地的test仓库下运行命令：

	$ git remote add origin git@github.com:redtongue/test.git

redtongue修改为自己相应的账户名。

下一步，就可以把本地库的所有内容推送到远程库上：

	$ git push -u origin master

把本地库的内容推送到远程，用git push命令，实际上是把当前分支master推送到远程。

由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。

#### 从远程克隆

准备好远程库，下一步是用命令git clone克隆一个本地库：

	$ git clone git@github.com:redtongue/test.git

注意把Git库的地址换成你自己的，然后进入test目录看看。

### 分支管理

有了分支，你创建了一个属于你自己的分支，别人看不到，还继续在原来的分支上正常工作，而你在自己的分支上干活，想提交就提交，直到开发完毕后，再一次性合并到原来的分支上，这样，既安全，又不影响别人工作。

#### 创建与合并分支

每次提交，Git都把它们串成一条时间线，这条时间线就是一个分支。截止到目前，只有一条时间线，在Git里，这个分支叫主分支，即master分支。HEAD严格来说不是指向提交，而是指向master，master才是指向提交的，所以，HEAD指向的就是当前分支。

一开始的时候，master分支是一条线，Git用master指向最新的提交，再用HEAD指向master，就能确定当前分支，以及当前分支的提交点：

![分支](branch.png)

每次提交，master分支都会向前移动一步，这样，随着你不断提交，master分支的线也越来越长。

当我们创建新的分支，例如dev时，Git新建了一个指针叫dev，指向master相同的提交，再把HEAD指向dev，就表示当前分支在dev上：

![dev分支](branch2.png)

创建分支，合并分支，都是操作指针，速度很快。

首先，我们创建dev分支，然后切换到dev分支：

	$ git checkout -b dev

等价：

	$ git branch dev
	$ git checkout dev

然后，用git branch命令查看当前分支：

	$ git branch

dev分支的工作完成，切换回master分支：

	$ git checkout master

然后，我们把dev分支的工作成果合并到master分支上：

	$ git merge dev

合并完成后，就可以放心地删除dev分支了：

	$ git branch -d dev

#### 解决冲突

如上在两个分支做完修改之后，使用git merge [branch name] 合并之后会提示

	CONFLICT (content): Merge conflict in readme.txt
	Automatic merge failed; fix conflicts and then commit the result.

冲突的文件是readme.txt，查看readme.txt会发现，Git用<<<<<<<，=======，>>>>>>>标记出不同分支的内容，修改为自己需要的内容，再提交：

	$ git add readme.txt 
	$ git commit -m "conflict fixed"
	[master cf810e4] conflict fixed

当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。

解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交。

用git log --graph命令可以看到分支合并图。

用带参数的git log也可以看到分支的合并情况：

	$ git log --graph --pretty=oneline --abbrev-commit

#### 分支管理策略

通常，合并分支时，如果可能，Git会用Fast forward模式，但这种模式下，删除分支后，会丢掉分支信息。

如果要强制禁用Fast forward模式，Git就会在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息。

如下是--no-ff方式的git merge：

	$ git merge --no-ff -m "merge with no-ff" dev

将修改后的dev分支合并到master上，因为本次合并要创建一个新的commit，所以加上-m参数，把commit描述写进去。

在实际开发中，我们应该按照几个基本原则进行分支管理：

首先，master分支应该是非常稳定的，也就是仅用来发布新版本，平时不能在上面干活；

那在哪干活呢？干活都在dev分支上，也就是说，dev分支是不稳定的，到某个时候，比如1.0版本发布时，再把dev分支合并到master上，在master分支发布1.0版本；

你和你的小伙伴们每个人都在dev分支上干活，每个人都有自己的分支，时不时地往dev分支上合并就可以了。

所以，团队合作的分支看起来就像这样：

![分支策略](branch3.png)

合并分支时，加上--no-ff参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而fast forward合并就看不出来曾经做过合并。

#### Bug 分支

软件开发中，bug就像家常便饭一样。有了bug就需要修复，在Git中，由于分支是如此的强大，所以，每个bug都可以通过一个新的临时分支来修复，修复后，合并分支，然后将临时分支删除。**但是**当前正在dev上进行的工作还没有提交：

	$ git stash

利用stash功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作。

首先确定要在哪个分支上修复bug，假定需要在master分支上修复，就从master创建临时分支，修改之后，合并到master分支上。

再回到dev分支上干原来的活。

用git stash list命令看看存储的工作现场。

工作现场还在，Git把stash内容存在某个地方了，但是需要恢复一下，有两个办法：

一是用**git stash apply**恢复，但是恢复后，stash内容并不删除，你需要用**git stash drop**来删除；

另一种方式是用**git stash pop**，恢复的同时把stash内容也删了。

你可以多次stash，恢复的时候，先用git stash list查看，然后恢复指定的stash，用命令：

	$ git stash apply stash@{0}

#### Feature分支

每添加一个新功能，最好新建一个feature分支，在上面开发，完成后，合并，最后，删除该feature分支。

创建分支，修改文件，add，commit，最后合并：

	$ git checkout -b feature-vulcan
	$ git add vulcan.py
	$ git commit -m "add feature vulcan"
	$ git checkout dev（切回dev，准备合并）
	合并。。。。。

合并之前想删除，强行删除：

	$ git branch -D feature-vulcan

分支还没有被合并，如果删除，将丢失掉修改，如果要强行删除，需要使用大写的-D参数。

#### 多人协作

要查看远程库的信息，用git remote：

或者，用git remote -v显示更详细的信息：

推送分支，就是把该分支上的所有本地提交推送到远程库。推送时，要指定本地分支，这样，Git就会把该分支推送到远程库对应的远程分支上：

	$ git push origin master

如果要推送其他分支，比如dev，就改成：

	$ git push origin dev

**抓取分支**

	$ git clone git@github.com:redtongue/test.git

当你的小伙伴从远程库clone时，默认情况下，你的小伙伴只能看到本地的master分支。

要在dev分支上开发，就必须创建远程origin的dev分支到本地，于是他用这个命令创建本地dev分支：

	$ git checkout -b dev origin/dev

就可以在dev上继续修改，然后，时不时地把dev分支push到远程：

	$ git add env.txt

	$ git commit -m "add env"

	$ git push origin dev



















