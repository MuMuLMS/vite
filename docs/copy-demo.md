# 点击复制功能演示

这个页面演示了如何使用 `ClickableCopy` 组件实现点击文字复制到剪贴板的功能。

## 基本用法

这是一个基本示例，点击 <ClickableCopy text="这是需要复制的文本" /> 可以复制文本。

## 自定义提示消息

你也可以自定义复制成功后的提示消息：

<ClickableCopy text="自定义文本" successMessage="已复制到剪贴板！" />

## 调整提示显示时间

或者调整提示消息的显示时间（单位：毫秒）：

<ClickableCopy text="时间更长的提示" :duration="5000" successMessage="这个提示会显示5秒钟" />

## 在段落中使用

你可以在段落中使用这个组件，比如这里有一个链接 <ClickableCopy text="https://example.com" />，点击即可复制。

## 使用方法

在Markdown文件中，你可以这样使用该组件：

```md
<ClickableCopy text="这是需要复制的文本" />

<ClickableCopy text="自定义文本" successMessage="已复制到剪贴板！" />

<ClickableCopy text="时间更长的提示" :duration="5000" />
```

## 技术说明

这个组件使用了浏览器的 Clipboard API，并提供了兼容性处理，确保在大多数浏览器中都能正常工作。