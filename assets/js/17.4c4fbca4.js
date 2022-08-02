(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{442:function(e,v,t){e.exports=t.p+"assets/img/1.d38947c3.jpeg"},443:function(e,v,t){e.exports=t.p+"assets/img/2.742d9b00.jpeg"},444:function(e,v,t){e.exports=t.p+"assets/img/3.20655114.jpeg"},445:function(e,v,t){e.exports=t.p+"assets/img/4.31233fc4.png"},536:function(e,v,t){"use strict";t.r(v);var r=t(13),_=Object(r.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"一、node-js-介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、node-js-介绍"}},[e._v("#")]),e._v(" 一、Node.js 介绍")]),e._v(" "),v("p",[v("strong",[e._v("学习目标")])]),e._v(" "),v("ul",[v("li",[v("p",[e._v("知道 Node.js 是什么")])]),e._v(" "),v("li",[v("p",[e._v("理解 Node.js 的运行原理")])]),e._v(" "),v("li",[v("p",[e._v("了解 Node.js 的运行机制")])])]),e._v(" "),v("h2",{attrs:{id:"node-js-是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#node-js-是什么"}},[e._v("#")]),e._v(" Node.js 是什么")]),e._v(" "),v("p",[e._v("以下引自 "),v("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js 官网"),v("OutboundLink")],1),e._v("：")]),e._v(" "),v("p",[e._v("Node.js® is a JavaScript runtime built on "),v("a",{attrs:{href:"https://developers.google.com/v8/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome's V8 JavaScript engine"),v("OutboundLink")],1),e._v(".")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("不是编程语言")])]),e._v(" "),v("li",[v("p",[e._v("也不是框架和库")])]),e._v(" "),v("li",[v("p",[e._v("是一个 JavaScript 运行时（环境）")])]),e._v(" "),v("li",[v("ul",[v("li",[e._v("能解析和执行 JavaScript 代码（严格来说应该是 ECMAScript 代码）")])])]),e._v(" "),v("li",[v("p",[e._v("构建于 Chrome V8 JavaScript 引擎之上")])]),e._v(" "),v("li",[v("p",[e._v("为 JavaScript 提供了服务端编程的能力")])]),e._v(" "),v("li",[v("ul",[v("li",[e._v("文件 IO")])])]),e._v(" "),v("li",[v("ul",[v("li",[e._v("网络 IO")])])]),e._v(" "),v("li",[v("p",[e._v("从技术角度它的能力和 Java、PHP、Python、Perl、Ruby 等服务端技术类似")])])]),e._v(" "),v("h2",{attrs:{id:"node-的特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#node-的特点"}},[e._v("#")]),e._v(" Node 的特点")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("事件驱动")])]),e._v(" "),v("li",[v("p",[e._v("非阻塞 IO（异步） 模型")])]),e._v(" "),v("li",[v("p",[e._v("单线程")])]),e._v(" "),v("li",[v("p",[e._v("跨平台")])])]),e._v(" "),v("h2",{attrs:{id:"node-的运行机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#node-的运行机制"}},[e._v("#")]),e._v(" Node 的运行机制")]),e._v(" "),v("p",[e._v("多线程处理机制：")]),e._v(" "),v("p",[v("img",{attrs:{src:t(442),alt:"img"}})]),e._v(" "),v("p",[e._v("传统的 Web 服务器（Apache、Tomcat、IIS）：")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("请求进来")])]),e._v(" "),v("li",[v("p",[e._v("Web 服务器开启一个线程来处理用户请求")])]),e._v(" "),v("li",[v("p",[e._v("同一时间有 n 请求，服务器就需要开启 n 个线程")])]),e._v(" "),v("li",[v("ul",[v("li",[e._v("一个线程最少得消耗 8MB 内存")])])]),e._v(" "),v("li",[v("ul",[v("li",[e._v("对于一个 8GB 内存的服务器来说，它能应对的并发数是 1024 * 8 / 8 = 1024 个并发")])])])]),e._v(" "),v("p",[e._v("事件驱动处理模型：")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("Node 中低层封装了一堆的异步操作 API")])]),e._v(" "),v("li",[v("ul",[v("li",[e._v("文件操作")])])]),e._v(" "),v("li",[v("ul",[v("li",[e._v("网络操作")])])]),e._v(" "),v("li",[v("ul",[v("li",[e._v("...")])])]),e._v(" "),v("li",[v("p",[e._v("JavaScript 语言本身是单线程的")])])]),e._v(" "),v("p",[v("img",{attrs:{src:t(443),alt:"img"}})]),e._v(" "),v("h2",{attrs:{id:"event-loop-事件循环"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#event-loop-事件循环"}},[e._v("#")]),e._v(" Event Loop（事件循环）")]),e._v(" "),v("ul",[v("li",[v("p",[v("a",{attrs:{href:"https://youtu.be/8aGhZQkoFbQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("菲利普·罗伯茨：到底什么是 Event Loop 呢？"),v("OutboundLink")],1)])]),e._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Node.js Event Loop, Timers, and "),v("OutboundLink")],1),v("code",[e._v("process.nextTick()")])])]),e._v(" "),v("li",[v("p",[v("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/10/event-loop.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("阮一峰 - JavaScript 运行机制详解：再谈 Event Loop"),v("OutboundLink")],1)])])]),e._v(" "),v("h2",{attrs:{id:"node-发展历史"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#node-发展历史"}},[e._v("#")]),e._v(" Node 发展历史")]),e._v(" "),v("p",[e._v("以下内容节选自："),v("a",{attrs:{href:"https://cnodejs.org/topic/555d3d54e684c4c8088a0d78",target:"_blank",rel:"noopener noreferrer"}},[e._v("来自朴灵大大的 -- Node.js 简史"),v("OutboundLink")],1)]),e._v(" "),v("p",[e._v("Node.js 不是凭空出现的项目，也"),v("strong",[e._v("不是某个 Web 前端工程师为了完成将 JavaScript 应用到服务端的理想而在实验室里捣鼓出来的")]),e._v("。它的出现主要归功于"),v("strong",[e._v("Ryan Dahl 历时多年的研究")]),e._v("，以及一个恰到好处的节点。2008 年"),v("strong",[e._v("V8 随着 Chrome 浏览器")]),e._v("的出世，JavaScript 脚本语言的执行效率得到质的提升，这给 Ryan Dahl 带来新的启示，他原本的研究工作与 V8 之间碰撞出火花，于是带来了一个基于事件的高性能 Web 服务器。")]),e._v(" "),v("p",[v("img",{attrs:{src:t(444),alt:"img"}})]),e._v(" "),v("p",[e._v("上图为 Node.js 创始人 Ryan Dahl。")]),e._v(" "),v("p",[e._v("Ryan Dahl 的经历比较奇特，他并非科班出身的开发者，在 2004 年的时候他还在纽约的罗彻斯特大学数学系读博士，期间有研究一些分形、分类以及 p-adic 分析，这些都跟开源和编程没啥关系。2006 年，也许是厌倦了读博的无聊，他产生了『世界那么大，我想去看看』的念头，做出了退学的决定，然后一个人来到智利的 Valparaiso 小镇。那时候他尚不知道找一个什么样的工作来糊口，期间他曾熬夜做了一些不切实际的研究，如如何通过云进行通信。下面是这个阶段他产出的中间产物，与后来苹果发布的 iCloud 似乎有那么点相似。")]),e._v(" "),v("p",[e._v("从那起，Ryan Dahl 不知道是否因为生活的关系，他开始学习网站开发了，走上了码农的道路。那时候 Ruby on Rails 很火，他也不例外的学习了它。从那时候开始，Ryan Dahl 的生活方式就是接项目，然后去客户的地方工作，在他眼中，拿工资和上班其实就是去那里旅行。此后他去过很多地方，如阿根廷的布宜诺斯艾利斯、德国的科隆、奥地利的维也纳。")]),e._v(" "),v("p",[e._v("Ryan Dahl 经过两年的工作后，成为了高性能 Web 服务器的专家，从接开发应用到变成专门帮客户解决性能问题的专家。期间他开始写一些开源项目帮助客户解决"),v("strong",[e._v("Web 服务器的高并发性能问题")]),e._v("，尝试过的语言有 Ruby、C、Lua。当然这些尝试都最终失败了，只有其中通过 C 写的 HTTP 服务库 libebb 项目略有起色，基本上算作 libuv 的前身。这些失败各有各的原因，Ruby 因为虚拟机性能太烂而无法解决根本问题，C 代码的性能高，但是让业务通过 C 进行开发显然是不太现实的事情，Lua 则是已有的同步 I/O 导致无法发挥性能优势。虽然经历了失败，但 Ryan Dahl 大致的感觉到了解决问题的关键是要通过"),v("strong",[e._v("事件驱动")]),e._v("和"),v("strong",[e._v("异步 I/O")]),e._v("来达成目的。")]),e._v(" "),v("p",[e._v("在他快绝望的时候，"),v("strong",[e._v("V8 引擎")]),e._v("来了。V8 满足他关于高性能 Web 服务器的想象：")]),e._v(" "),v("p",[v("strong",[e._v("没有历史包袱，没有同步 I/O")]),e._v("。不会出现一个同步 I/O 导致事件循环性能急剧降低的情况。\n"),v("strong",[e._v("V8 性能足够好")]),e._v("，远远比 Python、Ruby 等其他脚本语言的引擎快。\n"),v("strong",[e._v("JavaScript 语言的闭包特性非常方便")]),e._v("，比 C 中的回调函数好用。\n于是在 2009 年的 2 月，按新的想法他提交了项目的第一行代码，这个项目的名字最终被定名为 "),v("code",[e._v("node")]),e._v("。")]),e._v(" "),v("p",[v("strong",[e._v("2009 年 5 月")]),e._v("，Ryan Dahl 正式向外界宣布他做的这个项目。2009 年底，Ryan Dahl 在柏林举行的 JSConf EU 会议上发表关于 Node.js 的演讲，之后 Node.js 逐渐流行于世。")]),e._v(" "),v("p",[e._v("以上就是"),v("strong",[e._v("Node.js 项目的由来，是一个专注于实现高性能 Web 服务器优化的专家，几经探索，几经挫折后，遇到 V8 而诞生的项目")]),e._v("。")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("2009 年 5 月，Ryan Dahl 在 github 上发布了最初的 Node 版本")])]),e._v(" "),v("li",[v("p",[e._v("2010 年底，Ryan Dahl 加入 Joyent 公司全职负责 Node 的发展")])]),e._v(" "),v("li",[v("p",[e._v("2011 年 7 月，Node 在微软的支持下发布了 Windows 版")])]),e._v(" "),v("li",[v("p",[e._v("2012 年 1 月底，Ryan Dahl 将掌门人身份转交给了 Isaac Z.Schlueter，自己转向一些研究项目")])]),e._v(" "),v("li",[v("p",[e._v("2014 年 12 月，多为重量级 Node 开发者不满 Joyent 对 Node 的管理，自立门户创建了 "),v("code",[e._v("io.js")])])]),e._v(" "),v("li",[v("p",[e._v("2015 年 9 月，Node 与 io.js 合并，Node 的版本从 0.12.7 直接升级到了 4.0.0")])]),e._v(" "),v("li",[v("p",[e._v("合并后的 io.js 和 Node 在 Joyent 公司的维护下并行了两个版本：")])]),e._v(" "),v("li",[v("ul",[v("li",[e._v("一个是 4.x.x 还是原来的 Node，这个版本是稳定版")])])]),e._v(" "),v("li",[v("ul",[v("li",[e._v("一个是 5.x.x，目前已经更新到了 6.8.1，其实就是 io.js，最新特性版，不建议生产环境使用")])])]),e._v(" "),v("li",[v("p",[e._v("Node 计划在 2016 年 10 月底正式发布 Node 7.0")])]),e._v(" "),v("li",[v("ul",[v("li",[e._v("7.0 已经最大限度的支持了很多的 ES6 新语法")])])]),e._v(" "),v("li",[v("ul",[v("li",[e._v("而且提高了整体的执行性能，提供了一些别的 API")])])])]),e._v(" "),v("p",[e._v("Node 各个重要版本发展阶段：")]),e._v(" "),v("p",[e._v("1.0 之前等了 6 年，而从 1.0 到 8.0，只用了 2 年时间。")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("从 v0.1 到 0.12 用了 6 年")])]),e._v(" "),v("li",[v("p",[e._v("2015-01-14 发布了 v1.0.0 版本（io.js）")])]),e._v(" "),v("li",[v("p",[e._v("2.x（io.js）")])]),e._v(" "),v("li",[v("p",[e._v("3.x（io.js）")])]),e._v(" "),v("li",[v("p",[e._v("2015 年 09 月 Node.js 基金会已发布 Node.js V4.0 版 与 io.js 合并后的第一个版本")])]),e._v(" "),v("li",[v("p",[e._v("2015 年 10 月 Node.jsv4.2.0 将是首个 lts 长期支持版本")])]),e._v(" "),v("li",[v("p",[e._v("2016 年底发布到 4.2.4 && 5.4.0")])]),e._v(" "),v("li",[v("p",[e._v("2016 年 3 月 20 日 v4.4.0 LTS（长期支持版本）和 v5.9.0 Stable（稳定版本）")])]),e._v(" "),v("li",[v("p",[e._v("2016 年底 v6.0 支持 95%以上的 es6 特性 ， v7.0 通过 flag 支持 async 函数，99%的 es6 特性")])]),e._v(" "),v("li",[v("p",[e._v("2017 年 2 月发布 v7.6 版本，可以不通过 flag 使用 async 函数")])])]),e._v(" "),v("p",[v("img",{attrs:{src:t(445),alt:"img"}})]),e._v(" "),v("h2",{attrs:{id:"为什么要学习-node"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要学习-node"}},[e._v("#")]),e._v(" 为什么要学习 Node")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("增加职业竞争力")])]),e._v(" "),v("li",[v("p",[e._v("企业需求")])]),e._v(" "),v("li",[v("p",[e._v("进一步理解 Web")])]),e._v(" "),v("li",[v("p",[e._v("大前端必备技能")])]),e._v(" "),v("li",[v("p",[e._v("为了更好的学习前端框架")])]),e._v(" "),v("li",[v("p",[e._v("...")])])]),e._v(" "),v("h2",{attrs:{id:"node-能做什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#node-能做什么"}},[e._v("#")]),e._v(" Node 能做什么")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("Node 打破了过去 JavaScript 只能在浏览器中运行的局面")])]),e._v(" "),v("li",[v("p",[e._v("前后端编程环境统一，大大降低了前后端语言切换的代价")])])]),e._v(" "),v("p",[v("a",{attrs:{href:"https://www.zhihu.com/question/20796866",target:"_blank",rel:"noopener noreferrer"}},[e._v("知乎 - JavaScript 能做什么，该做什么？"),v("OutboundLink")],1),e._v("\nAtwood's Law: any application that can be written in JavaScript, will eventually be written in JavaScript.\n凡是能用 JavaScript 写出来的，最终都会用 JavaScript 写出来。")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("Web 服务器")])]),e._v(" "),v("li",[v("p",[e._v("命令行工具")])]),e._v(" "),v("li",[v("p",[e._v("网络爬虫")])]),e._v(" "),v("li",[v("p",[e._v("桌面应用程序开发（Electron）")])]),e._v(" "),v("li",[v("p",[e._v("......")])])]),e._v(" "),v("h2",{attrs:{id:"这门课程你能学到啥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#这门课程你能学到啥"}},[e._v("#")]),e._v(" 这门课程你能学到啥？")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("更进一步的理解 B/S 编程模型")])]),e._v(" "),v("li",[v("p",[e._v("模块化编程")])]),e._v(" "),v("li",[v("p",[e._v("Node 常用 API")])]),e._v(" "),v("li",[v("p",[e._v("JavaScript 异步编程")])]),e._v(" "),v("li",[v("ul",[v("li",[e._v("回调函数")])])]),e._v(" "),v("li",[v("ul",[v("li",[e._v("Promise")])])]),e._v(" "),v("li",[v("ul",[v("li",[e._v("Generator")])])]),e._v(" "),v("li",[v("ul",[v("li",[e._v("async/await 函数")])])]),e._v(" "),v("li",[v("p",[e._v("Express Web 开发框架")])]),e._v(" "),v("li",[v("p",[e._v("Ecmascript 6")])])]),e._v(" "),v("h2",{attrs:{id:"结语"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[e._v("#")]),e._v(" 结语")]),e._v(" "),v("p",[e._v("JavaScript 长久以来一直被限制在浏览器的沙箱中运行， 它的能力取决于浏览器中间层提供的支持多少。 Node 将高性能的 V8 带到了服务器端，使 JavaScript 也可以开发出实时高性能的服务器。 在 Node 中，不再与 CSS 样式表，DOM 树打交道， 可以随意的访问本地文件，搭建 WebSocket 服务器，连接数据库等系统级底层操作。 Node 不处理 UI，只关心数据，无论是本地数据还是网络数据。 前后端编程统一，大大降低了前后端编程切换的代码。")]),e._v(" "),v("p",[e._v("对于前端工程师而言，自己熟悉的 JavaScript 如今竟然可以在另一个地方大放异彩， 不谈其他原因，仅仅因为好奇，也值得去关注和探究它。")]),e._v(" "),v("h2",{attrs:{id:"相关链接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[e._v("#")]),e._v(" 相关链接")]),e._v(" "),v("ul",[v("li",[v("p",[v("a",{attrs:{href:"https://nodejs.org/en/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js 官方文档"),v("OutboundLink")],1)])]),e._v(" "),v("li",[v("p",[v("a",{attrs:{href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js 中文文档（非官方）"),v("OutboundLink")],1)])]),e._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://read.douban.com/ebook/12053349/",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入浅出 Node.js"),v("OutboundLink")],1)])]),e._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://book.douban.com/subject/25892704/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js 权威指南"),v("OutboundLink")],1)])]),e._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://book.douban.com/subject/25870705/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js 实战"),v("OutboundLink")],1)])]),e._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://book.douban.com/subject/25867920/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js 实战"),v("OutboundLink")],1)])]),e._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://book.douban.com/subject/26642320/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js 实战（第 2 季）"),v("OutboundLink")],1)])]),e._v(" "),v("li",[v("p",[v("a",{attrs:{href:"http://cnodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js 中文社区"),v("OutboundLink")],1)])]),e._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://github.com/alsotang/node-lessons",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js 包教不包会"),v("OutboundLink")],1)])]),e._v(" "),v("li",[v("p",[v("a",{attrs:{href:"http://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("EcmaScript 6 入门"),v("OutboundLink")],1)])]),e._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://github.com/nqdeng/7-days-nodejs",target:"_blank",rel:"noopener noreferrer"}},[e._v("七天学会 NodeJS"),v("OutboundLink")],1)])])])])}),[],!1,null,null,null);v.default=_.exports}}]);