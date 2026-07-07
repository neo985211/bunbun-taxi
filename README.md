# 笨笨专属接驾

一个给 iPhone Safari 使用的 H5/PWA 小工具：打开后点「呼叫专属司机」，等待 1 秒匹配动画，然后显示「已接单」和「马上打给笨笨」电话按钮。

## 修改专属信息

打开 `app.js`，改最上面的配置：

```js
const APP_CONFIG = {
  driverName: "笨笨",
  phoneNumber: "13800000000",
  carModel: "黄佳怡的专属小车",
  plateNumber: "粤A EK3226",
  etaMinutes: 3,
  autoOpenDialerAfterAccepted: false,
};
```

如果想在接单后自动拉起系统拨号确认页，把 `autoOpenDialerAfterAccepted` 改成 `true`。iOS 可能会根据浏览器策略拦截延迟拨号，所以保留「马上打给笨笨」按钮是最稳定的方式。

## 本地预览

```bash
node server.js
```

然后打开：

```text
http://localhost:5174
```

## 添加到 iPhone 主屏幕

部署到 HTTPS 地址后，让她用 Safari 打开页面，点分享按钮，选择「添加到主屏幕」。以后从主屏幕图标打开时，会像一个轻量 App 一样运行。
