# Git配置
```shell
git comfig [--global] user.name 名称   配置名字
git config [--global] user.email 191497152@qq.com  配置邮箱号 git注册的邮箱号 
# git config --list 查看工作区状态
```

# Git仓库初始化
```
git init 进入到项目目录然后使用
```

# Git增加文件到暂存区
```shell
git add .  把所有文件提交到暂存区
```

# Git提交版本
```shell
git commit -m 第一次提交  提交到本地仓库
```

# Git远程仓库配置
```shell
先有本地仓库  后由远程仓库
git remote add origin https://github.com/orangezhoutou/denglu.git(git存库的地址)/  本地库和远程库连接 
# git remote -v  检查库
```

# Git提交版本至远程库
```shell
git push [远程库名] [分支名]  到远程库
git push origin master  到远程库
```

# 时光旅行
```
查看所有版本信息
git log 
git log --pretty=oneline

将Git仓库回退到指定版本
git reset --hard 版本号
```

# Git撤销
```shell
将暂存区的内容撤销到工作区
git restore --staged file1 
```

# Git下载别人的远程库
```shell
git clone https://github.com/orangezhoutou/denglu.git(git存库的地址)/
```
