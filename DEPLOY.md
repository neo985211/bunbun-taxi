# 部署到手机可打开的网址

这个项目是纯静态 PWA，不需要把文件下载到手机，也不需要买传统服务器。把整个项目上传到静态网站托管平台后，手机浏览器打开 HTTPS 网址即可。

## 方案一：Cloudflare Pages，推荐

优点：免费、速度通常不错、可以连接 GitHub 私有仓库、每次提交代码会自动重新部署。

步骤：

1. 注册并登录 Cloudflare。
2. 进入 Workers & Pages，选择 Create application。
3. 选择 Pages，再选择 Connect to Git。
4. 连接你的 GitHub 仓库。
5. 构建设置保持最简单：
   - Framework preset: None
   - Build command: 留空
   - Build output directory: `/`
6. 点击 Deploy。
7. 部署完成后，会得到类似 `https://xxx.pages.dev` 的网址。
8. 用 iPhone Safari 打开这个网址，点击分享，选择「添加到主屏幕」。

## 方案二：GitHub Pages，最省事

优点：完全免费、配置少、适合公开小项目。

步骤：

1. 在 GitHub 新建一个仓库，例如 `bunbun-taxi`。
2. 把本项目所有文件上传到仓库根目录。
3. 进入仓库 Settings。
4. 找到 Pages。
5. Source 选择 Deploy from a branch。
6. Branch 选择 `main`，目录选择 `/root`。
7. 保存后等待 1 到 3 分钟。
8. GitHub 会生成类似 `https://你的用户名.github.io/bunbun-taxi/` 的网址。
9. 用 iPhone Safari 打开这个网址，添加到主屏幕。

## 注意隐私

这个项目是前端静态网页，手机号会写在 `app.js` 里。只要别人拿到网址，理论上就能看到页面和电话。如果只是给黄佳怡小朋友使用，不要把网址公开分享即可。

## 改完内容后看不到新版？

PWA 会缓存页面。现在的 `sw.js` 已经改成网络优先，正常刷新就能更新。如果手机还是显示旧文案，可以在 Safari 里清除该网站数据，或者换一个新部署网址再打开。
