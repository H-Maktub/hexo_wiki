(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{397:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"安装ztncui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装ztncui"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://key-networks.com/ztncui/",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装ztncui"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("只需要一台根服务安装即可\n安装")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-O")]),t._v(" https://s3-us-west-1.amazonaws.com/key-networks/deb/ztncui/1/x86_64/ztncui_0.8.14_amd64.deb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ./ztncui_0.8.14_amd64.deb\n")])])]),a("p",[t._v("编辑配置文件"),a("code",[t._v("/opt/key-networks/ztncui/.env")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("token")]),t._v("通过"),a("code",[t._v("cat /var/lib/zerotier-one/authtoken.secret")]),t._v("获取")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ZT_TOKEN=***token***\nNODE_ENV=production\nHTTPS_PORT=3443\n")])])]),a("p",[t._v("配置")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),t._v(" /opt/key-networks/ztncui/.env\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" ztncui.ztncui /opt/key-networks/ztncui/.env\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart ztncui\n")])])]),a("p",[t._v("默认账号密码")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("user:admin\npassword:password\n")])])]),a("h3",{attrs:{id:"docker安装zerotier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker安装zerotier"}},[t._v("#")]),t._v(" docker安装"),a("code",[t._v("zerotier")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),t._v(" zerotier "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("always "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--device")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/dev/net/tun "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--net")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host --cap-add"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("NET_ADMIN --cap-add"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("SYS_ADMIN "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /mnt/disk/docker/zerotier-one:/var/lib/zerotier-one  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /etc/gai.conf:/etc/gai.conf zerotier/zerotier:latest\n")])])]),a("h3",{attrs:{id:"部署多个ztncui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署多个ztncui"}},[t._v("#")]),t._v(" 部署多个"),a("code",[t._v("ztncui")])]),t._v(" "),a("blockquote",[a("p",[t._v("使用一台根服务器，通过docker部署多个"),a("code",[t._v("ztncui")]),t._v("进行用户隔离")])]),t._v(" "),a("p",[t._v("docker部署，然后替换"),a("code",[t._v("./zt1")]),t._v("中的"),a("code",[t._v("planet")]),t._v("文件，重启容器")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ztncui-aio")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" <内网ip/zerotier ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("80"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./ztncui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/opt/key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("networks/ztncui/etc\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./zt1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/lib/zerotier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("one\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env_file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./denv\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user1\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keynetworks/ztncui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n")])])]),a("p",[a("code",[t._v("./denv")]),t._v("文件如下")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("NODE_ENV=production\nHTTP_ALL_INTERFACES=YES\nMYDOMAIN=<根服务器IP>\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);