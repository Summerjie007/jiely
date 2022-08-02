(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{544:function(t,e,a){"use strict";a.r(e);var r=a(13),n=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_16-node-js-最佳实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-node-js-最佳实践"}},[t._v("#")]),t._v(" 16.Node.js 最佳实践")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/i0natan/nodebestpractices",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/i0natan/nodebestpractices"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"node-面试资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-面试资源"}},[t._v("#")]),t._v(" Node 面试资源")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/ElemeFE/node-interview",target:"_blank",rel:"noopener noreferrer"}},[t._v("ElemeFE / node-interview"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"nodemon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodemon"}},[t._v("#")]),t._v(" nodemon")]),t._v(" "),e("p",[t._v("在开发过程中，每次修改完代码手动重启服务器很麻烦。这里我们可以使用一个第三方命令行工具："),e("a",{attrs:{href:"https://github.com/remy/nodemon",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodemon"),e("OutboundLink")],1),t._v(" 来帮我们解决这个问题。")]),t._v(" "),e("p",[e("code",[t._v("nodemon")]),t._v(" 是一个基于 Node.js 开发的一个第三方命令行工具，使用它的第一步就是先安装：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --global nodemon\n")])])]),e("p",[t._v("基本使用：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("nodemon app.js\n")])])]),e("p",[t._v("只要是通过 "),e("code",[t._v("nodemon app.js")]),t._v(" 启动的服务，则它会监视你的文件变化， 当文件发生变化的时候，自动帮你重启服务器。")]),t._v(" "),e("p",[t._v("注意：该工具仅用于开发测试，不要在生产服务器中使用该命令。")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"使用-nvm-安装管理-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-nvm-安装管理-node"}},[t._v("#")]),t._v(" 使用 nvm 安装管理 Node")]),t._v(" "),e("p",[t._v("安装")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("macOS："),e("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/creationix/nvm"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("Linux："),e("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/creationix/nvm"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("Windows："),e("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/coreybutler/nvm-windows"),e("OutboundLink")],1)])])]),t._v(" "),e("p",[t._v("配置")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("nvm node_mirror http://npm.taobao.org/mirrors/node\nnvm npm_mirror https://npm.taobao.org/mirrors/npm/\n")])])]),e("p",[t._v("常用命令")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看已安装列表")]),t._v("\nnvm list\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装指定版本")]),t._v("\nnvm "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("version"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 卸载指定版本")]),t._v("\nnvm uninstall "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("version"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换版本")]),t._v("\nnvm use "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("version"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("h2",{attrs:{id:"javascript-代码规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript-代码规范"}},[t._v("#")]),t._v(" JavaScript 代码规范")]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://github.com/standard/standard",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript Standard Style"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://github.com/airbnb/javascript",target:"_blank",rel:"noopener noreferrer"}},[t._v("Airbnb JavaScript Style Guide"),e("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=n.exports}}]);