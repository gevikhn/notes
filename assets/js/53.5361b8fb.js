(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{506:function(a,t,s){"use strict";s.r(t);var e=s(29),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"other"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[a._v("#")]),a._v(" other")]),a._v(" "),s("h2",{attrs:{id:"ffmpeg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ffmpeg"}},[a._v("#")]),a._v(" ffmpeg")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("音频添加封面：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("ffmpeg -i audio.flac -i image.png -map "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(":a -map "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" -codec copy -metadata:s:v "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("title")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Album cover"')]),a._v(" -metadata:s:v "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("comment")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Cover (front)"')]),a._v(" -disposition:v attached_pic output.flac\n")])])])]),a._v(" "),s("li",[s("p",[a._v("音频截取")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("ffmpeg -i audio.flac -ss "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" -t "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(":50 -acodec copy out.flac\n")])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);