(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{388:function(t,a,n){"use strict";n.r(a);var e=n(4),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),a("blockquote",[a("p",[t._v("通过本地创建虚拟网卡，设置ip，对本地网络特定ip数据进行拦截")])]),t._v(" "),a("h3",{attrs:{id:"搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建"}},[t._v("#")]),t._v(" 搭建")]),t._v(" "),a("blockquote",[a("p",[t._v("编辑"),a("code",[t._v("/etc/network/interfaces")]),t._v(",添加如下内容")])]),t._v(" "),a("div",{staticClass:"language-plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v("allow-hotplug tun0\nauto tun0\niface tun0 inet manual\n    pre-up ip tuntap add tun0 mode tun user root\n    pre-up ip addr add 1.1.1.2/32 dev tun0\n    up ip link set dev tun0 up\n    post-down ip link del dev tun0\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);