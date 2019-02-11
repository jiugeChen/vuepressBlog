#!/usr/bin/env sh

# 确保脚本抛出遇到的错误

# 生成静态文件

# 进入生成的文件夹
cd docs/.vuepress/dist

mkdir dd
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME


# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -