# git

## git操作

####   安装git 完成后

1. 设置账号，在命令行输入

`$ git config --global user.name "你的账号" `

`$ git config --global user.email "你的邮箱"`

2. 新建一个站点文件夹： myweb
3. 在文件中初始化Git（创建Git仓库）`$ git init`
#### 向仓库添加文件

 1. 创建文件 `$ git touch a1.html` 
 2. 文件提交到暂存区 `$ git add a1.html`
 3. 文件提交描述 `$ git commit -m '描述'`
 - 查看文件状态 ` $ git status`
 #### 提交到仓库 
 `$ git push`
 #### Git克隆操作
 `$ git clone 仓库地址`
 
