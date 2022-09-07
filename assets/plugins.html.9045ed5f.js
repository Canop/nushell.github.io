import{_ as l,r as a,o as r,c as d,a as e,b as n,w as i,d as t,e as u}from"./app.c2a61f71.js";const c={},h=e("h1",{id:"plugins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugins","aria-hidden":"true"},"#"),t(" Plugins")],-1),p=e("p",null,"Nu can be extended using plugins. Plugins behave much like Nu's built-in commands, with the added benefit that they can be added separately from Nu itself.",-1),g=t("Nu plugins are executables; Nu launches them as needed and communicates with them over "),_={href:"https://en.wikipedia.org/wiki/Standard_streams",target:"_blank",rel:"noopener noreferrer"},m=t("stdin, stdout, and stderr"),f=t(". Nu plugins can use either JSON or "),x={href:"https://capnproto.org/",target:"_blank",rel:"noopener noreferrer"},b=t("Cap'n Proto"),N=t(" as their communication encoding."),k=e("h2",{id:"adding-a-plugin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#adding-a-plugin","aria-hidden":"true"},"#"),t(" Adding a plugin")],-1),w=t("To add a plugin, call the "),y=e("code",null,"register",-1),v=t(" command to tell Nu where to find it. As you do, you'll need to also tell Nushell what encoding the plugin uses."),L=e("p",null,"Linux+macOS:",-1),S=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> register --encoding=capnp ./my_plugins/my-cool-plugin
`)])],-1),E=e("p",null,"Windows:",-1),P=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> register --encoding=capnp .\\my_plugins\\my-cool-plugin.exe
`)])],-1),T=t("When "),V=e("code",null,"register",-1),q=t(" is called:"),A=u(`<ol><li>Nu launches the plugin and sends it a &quot;Signature&quot; message over stdin</li><li>The plugin responds via stdout with a message containing its signature (name, description, arguments, flags, and more)</li><li>Nu saves the plugin signature in the file at <code>$nu.plugin-path</code>, so registration is persisted across multiple launches</li></ol><p>Once registered, the plugin is available as part of your set of commands:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; help commands | where is_plugin == true
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Nu&#39;s main repo contains example plugins that are useful for learning how the plugin protocol works:</p>`,5),B={href:"https://github.com/nushell/nushell/tree/main/crates/nu_plugin_example",target:"_blank",rel:"noopener noreferrer"},C=t("Rust"),I={href:"https://github.com/nushell/nushell/blob/main/crates/nu_plugin_python/plugin.py",target:"_blank",rel:"noopener noreferrer"},O=t("Python"),R=e("h2",{id:"debugging",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#debugging","aria-hidden":"true"},"#"),t(" Debugging")],-1),D=e("p",null,"The simplest way to debug a plugin is to print to stderr; plugins' standard error streams are redirected through Nu and displayed to the user.",-1),W=e("h2",{id:"help",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#help","aria-hidden":"true"},"#"),t(" Help")],-1),G=t("Nu's plugin documentation is a work in progress. If you're unsure about something, the #plugins channel on "),H={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},J=t("the Nu Discord"),$=t(" is a great place to ask questions!");function j(z,F){const s=a("ExternalLinkIcon"),o=a("RouterLink");return r(),d("div",null,[h,p,e("p",null,[g,e("a",_,[m,n(s)]),f,e("a",x,[b,n(s)]),N]),k,e("p",null,[w,n(o,{to:"/book/commands/register.html"},{default:i(()=>[y]),_:1}),v]),L,S,E,P,e("p",null,[T,n(o,{to:"/book/commands/register.html"},{default:i(()=>[V]),_:1}),q]),A,e("ul",null,[e("li",null,[e("a",B,[C,n(s)])]),e("li",null,[e("a",I,[O,n(s)])])]),R,D,W,e("p",null,[G,e("a",H,[J,n(s)]),$])])}const M=l(c,[["render",j],["__file","plugins.html.vue"]]);export{M as default};
