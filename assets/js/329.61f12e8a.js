(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{815:function(t,s,a){"use strict";a.r(s);var e=a(35),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "),a("code",[t._v(t._s(t.$frontmatter.title))])]),t._v(" "),a("div",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.$frontmatter.usage))]),t._v(" "),a("h2",{attrs:{id:"signature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signature"}},[t._v("#")]),t._v(" Signature")]),t._v(" "),a("p",[a("code",[t._v("> register (plugin) (signature) --encoding --shell")])]),t._v(" "),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("plugin")]),t._v(": path of executable for plugin")]),t._v(" "),a("li",[a("code",[t._v("signature")]),t._v(": Block with signature description as json object")]),t._v(" "),a("li",[a("code",[t._v("--encoding {string}")]),t._v(": Encoding used to communicate with plugin. Options: [capnp, json]")]),t._v(" "),a("li",[a("code",[t._v("--shell {path}")]),t._v(": path of shell used to run plugin (cmd, sh, python, etc)")])]),t._v(" "),a("h2",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("This command is a parser keyword. For details, check\nhttps://www.nushell.sh/book/thinking_in_nushell.html#parsing-and-evaluation-are-different-stages\n")])])]),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("Register "),a("code",[t._v("nu_plugin_query")]),t._v(" plugin from ~/.cargo/bin/ dir")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" register -e json ~/.cargo/bin/nu_plugin_query\n")])])]),a("p",[t._v("Register "),a("code",[t._v("nu_plugin_query")]),t._v(" plugin from "),a("code",[t._v("nu -c")]),t._v("(plugin will be available in that nu session only)")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("let")]),t._v(" plugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("which nu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".path.0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nu_plugin_query'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" nu -c "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("$'register -e json ($plugin); version'")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);