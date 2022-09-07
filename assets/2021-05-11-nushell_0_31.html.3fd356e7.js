import{_ as o,r,o as i,c as l,f as h,a as e,b as n,d as t,e as a}from"./app.c2a61f71.js";const d={},c=e("h1",{id:"nushell-0-31",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-31","aria-hidden":"true"},"#"),t(" Nushell 0.31")],-1),_=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),u=e("p",null,"Today, we're releasing 0.31 of Nu. This release includes continued polish of the engine and commands.",-1),p=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),f=t("Nu 0.31 is available as "),g={href:"https://github.com/nushell/nushell/releases/tag/0.31.0",target:"_blank",rel:"noopener noreferrer"},m=t("pre-built binaries"),b=t(" or from "),k={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},w=t("crates.io"),x=t(". If you have Rust installed you can install it using "),y=e("code",null,"cargo install nu",-1),v=t("."),N=a('<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>If you&#39;d like to try the experimental paging feature in this release, you can install with <code>cargo install nu --features=table-pager</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><p>This release is largely around polish. We&#39;ve continued to improve Nushell&#39;s engine to work in the more streamlined style, improved the performance of commands like <code>ps</code> and the appearance of commands like <code>binaryview</code>.</p><h2 id="new-commands-fdncred" tabindex="-1"><a class="header-anchor" href="#new-commands-fdncred" aria-hidden="true">#</a> New commands (fdncred)</h2>',6),T={href:"https://github.com/nushell/nushell/issues/3403",target:"_blank",rel:"noopener noreferrer"},I=e("code",null,"into string",-1),L=t(" to convert values to strings"),W={href:"https://github.com/nushell/nushell/issues/3370",target:"_blank",rel:"noopener noreferrer"},V=e("code",null,"into binary",-1),B=t(" to convert values to binary"),C=e("h2",{id:"improvements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#improvements","aria-hidden":"true"},"#"),t(" Improvements")],-1),E=e("h3",{id:"nushell",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell","aria-hidden":"true"},"#"),t(" Nushell")],-1),j=t("natemara fixed "),S={href:"https://github.com/nushell/nushell/pull/3407",target:"_blank",rel:"noopener noreferrer"},q=t("a slowness in the "),A=e("code",null,"ps",-1),K=t(" command"),z=e("li",null,"elferherrera, kubouch, stormasm, LhKipp ported commands to the new engine-p style",-1),D=t("fdncred improved "),R={href:"https://github.com/nushell/nushell/issues/3370",target:"_blank",rel:"noopener noreferrer"},F=t("binaryview"),G=t(", "),H={href:"https://github.com/nushell/nushell/issues/3375",target:"_blank",rel:"noopener noreferrer"},J=t("added check for endian-ness, added a bytes and skip"),M=t(", "),O={href:"https://github.com/nushell/nushell/issues/3374",target:"_blank",rel:"noopener noreferrer"},P=t('added ability to change "#" color using header_color'),Q=t(", "),U={href:"https://github.com/nushell/nushell/issues/3367",target:"_blank",rel:"noopener noreferrer"},X=t("tweaked the error handling to show specific errors"),Y=t(", "),Z={href:"https://github.com/nushell/nushell/issues/3366",target:"_blank",rel:"noopener noreferrer"},$=t("updated to a quicker Levenshtein implementation"),ee=t(", and "),te={href:"https://github.com/nushell/nushell/issues/3351",target:"_blank",rel:"noopener noreferrer"},se=t("allowed start to handle urls"),ne=t("kubouch "),oe={href:"https://github.com/nushell/nushell/issues/3359",target:"_blank",rel:"noopener noreferrer"},re=t("fixed table-pager feature compilation"),ie=t("Azgrom created a "),le={href:"https://github.com/nushell/nushell/issues/3388",target:"_blank",rel:"noopener noreferrer"},he=t("features cargo installer wrapper"),ae=t("jgoday added "),de={href:"https://github.com/nushell/nushell/issues/3387",target:"_blank",rel:"noopener noreferrer"},ce=t("ignore-case and duplicated options to "),_e=e("code",null,"uniq",-1),ue=t(" command "),pe=t(", and fixed a "),fe={href:"https://github.com/nushell/nushell/issues/3354",target:"_blank",rel:"noopener noreferrer"},ge=t("reduce --numbered bug"),me=t("ammkrn fixed a panic in the "),be={href:"https://github.com/nushell/nushell/issues/3382",target:"_blank",rel:"noopener noreferrer"},ke=t("rustyline helper"),we=t("Sciencentistguy fixed an "),xe={href:"https://github.com/nushell/nushell/issues/3358",target:"_blank",rel:"noopener noreferrer"},ye=t("array index out of bounds error in nu_protocol::value::levenshtein_distance()"),ve=t("ccde177b5fb9b8c55078417b4c9fee removed "),Ne={href:"https://github.com/nushell/nushell/issues/3349",target:"_blank",rel:"noopener noreferrer"},Te=t("ichwh"),Ie=t("LhKipp fixed an issue "),Le={href:"https://github.com/nushell/nushell/issues/3344",target:"_blank",rel:"noopener noreferrer"},We=t("in nu-env if "),Ve=e("code",null,"cd",-1),Be=t(" with shortcuts"),Ce=e("h3",{id:"extension",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#extension","aria-hidden":"true"},"#"),t(" Extension")],-1),Ee=t("fdncred fixed "),je={href:"https://github.com/nushell/vscode-nushell-lang/issues/32",target:"_blank",rel:"noopener noreferrer"},Se=t("a bug in the syntax highlighting"),qe=e("h3",{id:"documentation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),t(" Documentation")],-1),Ae=t("nalpine fixed "),Ke={href:"https://github.com/nushell/nushell.github.io/issues/126",target:"_blank",rel:"noopener noreferrer"},ze=t("dead links"),De=t("ChristopherBiscardi updated "),Re={href:"https://github.com/nushell/nushell.github.io/issues/125",target:"_blank",rel:"noopener noreferrer"},Fe=t("starship prompt integration"),Ge=t("ammkrn updated "),He={href:"https://github.com/nushell/nushell.github.io/issues/123",target:"_blank",rel:"noopener noreferrer"},Je=t("ls -f -> ls -la"),Me=e("h3",{id:"nu-scripts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nu-scripts","aria-hidden":"true"},"#"),t(" Nu Scripts")],-1),Oe=t("fdncred created "),Pe={href:"https://github.com/nushell/nu_scripts/issues/48",target:"_blank",rel:"noopener noreferrer"},Qe=t("table grouping experiment, update twin to support single user per row"),Ue=t(", "),Xe={href:"https://github.com/nushell/nu_scripts/issues/46",target:"_blank",rel:"noopener noreferrer"},Ye=t("twin weeknum guess"),Ze=t(", and a "),$e={href:"https://github.com/nushell/nu_scripts/issues/44",target:"_blank",rel:"noopener noreferrer"},et=t("prototype of TWiN automation script"),tt=t("efx added "),st={href:"https://github.com/nushell/nu_scripts/issues/47",target:"_blank",rel:"noopener noreferrer"},nt=t("a one liner to parse aws s3 ls output"),ot=t("jonathandturner fixed "),rt={href:"https://github.com/nushell/nu_scripts/issues/45",target:"_blank",rel:"noopener noreferrer"},it=t("TWiN range"),lt=e("h1",{id:"looking-ahead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),t(" Looking ahead")],-1),ht=t("Coming soon after the 0.31 release, we'll be landing "),at={href:"https://github.com/nushell/nushell/pull/3389",target:"_blank",rel:"noopener noreferrer"},dt=t("some improvements"),ct=t(" to Nushell's syntax. These fixes will be breaking changes, but they're for a good reason. The simplification of the syntax will make Nushell both more consistent and more approachable for new users and experienced users alike."),_t=t("We're also continuing to improve the command implementations. If you'd like to help, you can join in by "),ut={href:"https://github.com/nushell/nushell/issues/3390",target:"_blank",rel:"noopener noreferrer"},pt=t("signing up here"),ft=t(".");function gt(mt,bt){const s=r("ExternalLinkIcon");return i(),l("div",null,[c,_,u,h(" more "),p,e("p",null,[f,e("a",g,[m,n(s)]),b,e("a",k,[w,n(s)]),x,y,v]),N,e("ul",null,[e("li",null,[e("a",T,[I,n(s)]),L]),e("li",null,[e("a",W,[V,n(s)]),B])]),C,E,e("ul",null,[e("li",null,[j,e("a",S,[q,A,K,n(s)])]),z,e("li",null,[D,e("a",R,[F,n(s)]),G,e("a",H,[J,n(s)]),M,e("a",O,[P,n(s)]),Q,e("a",U,[X,n(s)]),Y,e("a",Z,[$,n(s)]),ee,e("a",te,[se,n(s)])]),e("li",null,[ne,e("a",oe,[re,n(s)])]),e("li",null,[ie,e("a",le,[he,n(s)])]),e("li",null,[ae,e("a",de,[ce,_e,ue,n(s)]),pe,e("a",fe,[ge,n(s)])]),e("li",null,[me,e("a",be,[ke,n(s)])]),e("li",null,[we,e("a",xe,[ye,n(s)])]),e("li",null,[ve,e("a",Ne,[Te,n(s)])]),e("li",null,[Ie,e("a",Le,[We,Ve,Be,n(s)])])]),Ce,e("ul",null,[e("li",null,[Ee,e("a",je,[Se,n(s)])])]),qe,e("ul",null,[e("li",null,[Ae,e("a",Ke,[ze,n(s)])]),e("li",null,[De,e("a",Re,[Fe,n(s)])]),e("li",null,[Ge,e("a",He,[Je,n(s)])])]),Me,e("ul",null,[e("li",null,[Oe,e("a",Pe,[Qe,n(s)]),Ue,e("a",Xe,[Ye,n(s)]),Ze,e("a",$e,[et,n(s)])]),e("li",null,[tt,e("a",st,[nt,n(s)])]),e("li",null,[ot,e("a",rt,[it,n(s)])])]),lt,e("p",null,[ht,e("a",at,[dt,n(s)]),ct]),e("p",null,[_t,e("a",ut,[pt,n(s)]),ft])])}const wt=o(d,[["render",gt],["__file","2021-05-11-nushell_0_31.html.vue"]]);export{wt as default};
