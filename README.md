# 在线翻译
纯前端 + 百度翻译API + localStorage本地存储
完成提取文本中的生词，并返回单词的翻译结果


## 项目内容
之前背单词的时候发现，直接背单词的话太枯燥，直接阅读英文书籍、报纸又有太多的单词不认识，
就想能够做个demo，直接检查出 一个英文文本中的 生词，并翻译出来。

本demo有下列内容
- 前端界面
- 用localStorage存储用户已近掌握的单词
- 利用百度翻译API翻译单词


## 项目演示
所以项目本身不需要服务器，编写玩静态资源后可以直接托管在GitHub Page上（GitHub真是伟大的网站）
[在线地址](https://saltfish666.github.io/translate/)
操作演示：
![演示GIF](https://i.imgur.com/j4SBdxu.gifv)
目前项目正处于初级阶段，所以简陋，还有许多未添加的功能


## 百度翻译API
关于百度翻译API可以看官方文档，不过他的API真是是太弱了，只能翻译单词，无法得到音标、发音、多重解释等
[百度翻译API](https://fanyi-api.baidu.com/api/trans/product/apidoc)

# 代码逻辑
@掘金 @seg

## 多个单词
没发现如何同时查询多个单词，只能曲线救国了
{src: "hello,world,fire,apple", dst: "你好，世界，火，苹果"}

## next realse
优化本地储存 优化页面