(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{492:function(t,o,e){"use strict";e.r(o);var r=e(29),v=Object(r.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("[toc]")]),t._v(" "),e("h1",{attrs:{id:"镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#镜像"}},[t._v("#")]),t._v(" 镜像")]),t._v(" "),e("h2",{attrs:{id:"镜像的分层概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#镜像的分层概念"}},[t._v("#")]),t._v(" 镜像的分层概念")]),t._v(" "),e("blockquote",[e("p",[t._v("镜像是一种轻量级、可执行的软件包，其中包含运行某个软件所需的所有内容。可以把应用和配置文件打包成一个可交付的运行环境")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("docker采用UnionFS(联合文件系统)，Union文件系统是一种分层、轻量级、高性能的文件系统，可以将对文件系统的修改作为一次提交进行叠加，可以将不同的目录挂载在同一个虚拟文件系统下。docker镜像通过分层进行继承。")])]),t._v(" "),e("li",[e("p",[t._v("docker镜像的最底层是bootfs,其中包含bootloader和kernel，用于加载boot")])]),t._v(" "),e("li",[e("p",[t._v("在bootfs之上，是rootfs，其中包含典型Linux系统的/dev, /proc, /bin, /etc等标准目录和文件")])]),t._v(" "),e("li",[e("p",[t._v("docker镜像层都是只读的，容器层是可写的，容器启动时，一个新的可写层加载到镜像的顶部，即容器层。")])]),t._v(" "),e("li",[e("p",[t._v("在Dockerfile中，每条指令都会创建一个镜像层，当前层的修改不会影响上一层")])]),t._v(" "),e("li",[e("p",[t._v("在容器中读取文件时，从最上层的镜像层开始查找，找到后读取到内存中，若已经在内存中了，则直接使用")])]),t._v(" "),e("li",[e("p",[t._v("容器修改文件时，将镜像层的文件复制到容器层，直接修改容器层的文件")])]),t._v(" "),e("li",[e("p",[t._v("容器删除文件时，找到文件后再容器中记录删除，并没有真正的删除，这会导致镜像的体积只会增加，不会减少")])]),t._v(" "),e("li",[e("p",[t._v("容器增加文件时，直接在容器层增加，不会影响镜像层")])])])])}),[],!1,null,null,null);o.default=v.exports}}]);