import{_ as s,r as l,o as r,c as h,f as i,a as e,b as o,d as t,e as a}from"./app.c2a61f71.js";const _="/assets/0_30_0_speed.eb07de9a.png",d={},c=e("h1",{id:"nushell-0-30",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-30","aria-hidden":"true"},"#"),t(" Nushell 0.30")],-1),u=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),p=e("p",null,"Today, we're releasing 0.30 of Nu. This release adds big improvements to performance and simplicity of the engine.",-1),m=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),f=t("Nu 0.30 is available as "),g={href:"https://github.com/nushell/nushell/releases/tag/0.30.0",target:"_blank",rel:"noopener noreferrer"},b=t("pre-built binaries"),k=t(" or from "),w={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},v=t("crates.io"),y=t(". If you have Rust installed you can install it using "),x=e("code",null,"cargo install nu",-1),N=t("."),T=a('<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>If you&#39;d like to try the experimental paging feature in this release, you can install with <code>cargo install nu --features=table-pager</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="performance-improvements-jonathandturner" tabindex="-1"><a class="header-anchor" href="#performance-improvements-jonathandturner" aria-hidden="true">#</a> Performance improvements (jonathandturner)</h2><p><img src="'+_+'" alt="image of the 0.30 release being 8-20 times faster than 0.29"></p><p><em>Nu, now noticeably faster</em></p>',7),I=t("The 0.30 release is the first to include the engine-p experimental approaches that we mentioned in the last release. These changes streamline the engine, moving it from "),F={href:"https://github.com/nushell/nushell/pull/3270",target:"_blank",rel:"noopener noreferrer"},j=t("async streams to iterators"),W=t(", "),B={href:"https://github.com/nushell/nushell/pull/3281",target:"_blank",rel:"noopener noreferrer"},R=t("simplifying how commands handle their arguments"),V=t(", and how "),C={href:"https://github.com/nushell/nushell/pull/3304",target:"_blank",rel:"noopener noreferrer"},L=t("outputs are passed from one command to the next"),P=t("."),q=t("The end result is an engine that is both simpler and much faster. In the above example we run two different benchmarks. The first is a run of "),A={href:"https://github.com/nushell/nu_scripts/blob/main/coloring/gradient.nu",target:"_blank",rel:"noopener noreferrer"},U=t("this script"),$=t(" in the Nushell script repo. The second is a tight processing loop over many 10 million small records: "),z=e("code",null,"echo 1..10000000 | prepend 777 | append 555 | where $it > 7 | length",-1),D=t("."),E=e("p",null,"Though the performance numbers are still early, they're extremely promising.",-1),S=e("h2",{id:"new-built-in-variable-scope-stevenbarragan-fdncred",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#new-built-in-variable-scope-stevenbarragan-fdncred","aria-hidden":"true"},"#"),t(" New built-in variable "),e("code",null,"$scope"),t(" (stevenbarragan, fdncred)")],-1),M=e("p",null,[t("We're experimenting with a new built-in variable called "),e("code",null,"$scope"),t(". This gives you access to definitions in scope, including variables.")],-1),K=e("h2",{id:"new-commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#new-commands","aria-hidden":"true"},"#"),t(" New Commands")],-1),O={href:"https://github.com/nushell/nushell/pull/3239",target:"_blank",rel:"noopener noreferrer"},G=e("code",null,"math sqrt",-1),H=t(" (luccasmmg)"),J={href:"https://github.com/nushell/nushell/pull/3253",target:"_blank",rel:"noopener noreferrer"},Q=e("code",null,"any?",-1),X=t(" and "),Y=e("code",null,"all?",-1),Z=t(" (andrasio)"),ee={href:"https://github.com/nushell/nushell/pull/3256",target:"_blank",rel:"noopener noreferrer"},te=e("code",null,"path parse",-1),ne=t(", "),oe=e("code",null,"path join",-1),se=t(", and "),le=e("code",null,"path split",-1),re=t(" (kubouch)"),he={href:"https://github.com/nushell/nushell/pull/3279",target:"_blank",rel:"noopener noreferrer"},ie=e("code",null,"into int",-1),ae=t(" (efx)"),_e={href:"https://github.com/nushell/nushell/pull/3327",target:"_blank",rel:"noopener noreferrer"},de=e("code",null,"query json",-1),ce=t(" (fdncred). This is a new experimental query function as we explore how we'd like to do data querying in nushell."),ue=e("h2",{id:"documentation-andrasio",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#documentation-andrasio","aria-hidden":"true"},"#"),t(" Documentation (andrasio)")],-1),pe=t("We have a new "),me={href:"https://github.com/nushell/nushell/pull/3326",target:"_blank",rel:"noopener noreferrer"},fe=t("guide on how to create Nushell commands"),ge=t("."),be=e("h2",{id:"improvements-lhkipp-luccasmmg-waldyrious-ilius-fdncred-andrasio-donnutpanic-ammrkn-jonathandturner-schrieveslaach-daschl-nightscape",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#improvements-lhkipp-luccasmmg-waldyrious-ilius-fdncred-andrasio-donnutpanic-ammrkn-jonathandturner-schrieveslaach-daschl-nightscape","aria-hidden":"true"},"#"),t(" Improvements (LhKipp, luccasmmg, waldyrious, ilius, fdncred, andrasio, DonnutPanic, ammrkn, jonathandturner, schrieveslaach, daschl, nightscape)")],-1),ke=t("Lots of internal optimization updates: "),we={href:"https://github.com/nushell/nushell/pull/3289",target:"_blank",rel:"noopener noreferrer"},ve=t("1"),ye=t(", "),xe={href:"https://github.com/nushell/nushell/pull/3292",target:"_blank",rel:"noopener noreferrer"},Ne=t("2"),Te=t(", "),Ie={href:"https://github.com/nushell/nushell/pull/3300",target:"_blank",rel:"noopener noreferrer"},Fe=t("3"),je=t(", "),We={href:"https://github.com/nushell/nushell/pull/3301",target:"_blank",rel:"noopener noreferrer"},Be=t("4"),Re=t(", "),Ve={href:"https://github.com/nushell/nushell/pull/3306",target:"_blank",rel:"noopener noreferrer"},Ce=t("5"),Le=t("Now "),Pe={href:"https://github.com/nushell/nushell/pull/3314",target:"_blank",rel:"noopener noreferrer"},qe=t("appends to the history instead of replacing it"),Ae=t("API improvements to "),Ue={href:"https://github.com/nushell/nushell/pull/3309",target:"_blank",rel:"noopener noreferrer"},$e=t("allow embedded nushell to have custom commands"),ze=t("Internal implementation "),De={href:"https://github.com/nushell/nushell/pull/3310",target:"_blank",rel:"noopener noreferrer"},Ee=t("improvements to "),Se=e("code",null,"which",-1),Me=t(", "),Ke={href:"https://github.com/nushell/nushell/pull/3312",target:"_blank",rel:"noopener noreferrer"},Oe=t("to "),Ge=e("code",null,"all",-1),He=t(", "),Je={href:"https://github.com/nushell/nushell/pull/3315",target:"_blank",rel:"noopener noreferrer"},Qe=t("to "),Xe=e("code",null,"math",-1),Ye=t(" commands"),Ze=t(", "),et={href:"https://github.com/nushell/nushell/pull/3320",target:"_blank",rel:"noopener noreferrer"},tt=t("to "),nt=e("code",null,"to",-1),ot=t(" and "),st=e("code",null,"from",-1),lt=t(" commands"),rt=t(", "),ht={href:"https://github.com/nushell/nushell/pull/3325",target:"_blank",rel:"noopener noreferrer"},it=t("to "),at=e("code",null,"compact",-1),_t=t("Updated "),dt={href:"https://github.com/nushell/nushell/pull/3322",target:"_blank",rel:"noopener noreferrer"},ct=e("code",null,"echo ..",-1),ut=t(" to no longer prints integers"),pt=t("Removed "),mt={href:"https://github.com/nushell/nushell/pull/3311",target:"_blank",rel:"noopener noreferrer"},ft=t("help flags from the "),gt=e("code",null,"$scope.commands",-1),bt=t(" display"),kt=t("Removed the "),wt={href:"https://github.com/nushell/nushell/pull/3308",target:"_blank",rel:"noopener noreferrer"},vt=t("dupes in get_commands/get_command_names"),yt=t("Fixes to "),xt={href:"https://github.com/nushell/nushell/pull/3305",target:"_blank",rel:"noopener noreferrer"},Nt=t("viewing Value as a filepath"),Tt=t("Move "),It={href:"https://github.com/nushell/nushell/pull/3294",target:"_blank",rel:"noopener noreferrer"},Ft=t("arg deserialization out of "),jt=e("code",null,"str",-1),Wt=t("Cleaned up "),Bt={href:"https://github.com/nushell/nushell/pull/3297",target:"_blank",rel:"noopener noreferrer"},Rt=t("error handling"),Vt=t("Fixes to how "),Ct={href:"https://github.com/nushell/nushell/pull/3303",target:"_blank",rel:"noopener noreferrer"},Lt=t("rest arguments are handled"),Pt=t("Fixes to "),qt={href:"https://github.com/nushell/nushell/pull/3293",target:"_blank",rel:"noopener noreferrer"},At=e("code",null,"ansi rgb fg",-1),Ut=t("Updated "),$t={href:"https://github.com/nushell/nushell/pull/3291",target:"_blank",rel:"noopener noreferrer"},zt=t("the default prompt"),Dt=t("Autoview and table now "),Et={href:"https://github.com/nushell/nushell/pull/3287",target:"_blank",rel:"noopener noreferrer"},St=t("read from the in-memory config"),Mt=t("Do not "),Kt={href:"https://github.com/nushell/nushell/pull/3286",target:"_blank",rel:"noopener noreferrer"},Ot=t("store whitespace entries in the history"),Gt=t("Simplified "),Ht={href:"https://github.com/nushell/nushell/pull/3283",target:"_blank",rel:"noopener noreferrer"},Jt=t("internal handling of the runnable context"),Qt=t("Fixed "),Xt={href:"https://github.com/nushell/nushell/pull/3280",target:"_blank",rel:"noopener noreferrer"},Yt=t("external output busy-waiting"),Zt=t("Remove "),en={href:"https://github.com/nushell/nushell/pull/3278",target:"_blank",rel:"noopener noreferrer"},tn=e("code",null,"rm",-1),nn=t("'s trash flag if it's not supported"),on=t("Fixed a "),sn={href:"https://github.com/nushell/nushell/pull/3271",target:"_blank",rel:"noopener noreferrer"},ln=t("panic when timestamp is out of range"),rn=t("Sysinfo dependency has been "),hn={href:"https://github.com/nushell/nushell/pull/3267",target:"_blank",rel:"noopener noreferrer"},an=t("updated"),_n=t("Config commands "),dn={href:"https://github.com/nushell/nushell/pull/3265",target:"_blank",rel:"noopener noreferrer"},cn=t("are now more unified internally"),un=t("Added "),pn={href:"https://github.com/nushell/nushell/pull/3257",target:"_blank",rel:"noopener noreferrer"},mn=t("TiB and PiB units"),fn=t("Improved "),gn={href:"https://github.com/nushell/nushell/pull/3249",target:"_blank",rel:"noopener noreferrer"},bn=t("auto-suggestion for aliases and custom commands"),kn=t("More "),wn={href:"https://github.com/nushell/nushell/pull/3247",target:"_blank",rel:"noopener noreferrer"},vn=t("logging and tests"),yn=t("Now "),xn={href:"https://github.com/nushell/nushell/pull/3243",target:"_blank",rel:"noopener noreferrer"},Nn=t("parses decimal units"),Tn=t("Use "),In={href:"https://github.com/nushell/nushell/pull/3242",target:"_blank",rel:"noopener noreferrer"},Fn=t("one main function to run scripts"),jn=t("Fixed "),Wn={href:"https://github.com/nushell/nushell/pull/3235",target:"_blank",rel:"noopener noreferrer"},Bn=t("errors when deleting a FIFO"),Rn=t("Fixed "),Vn={href:"https://github.com/nushell/nushell/pull/3234",target:"_blank",rel:"noopener noreferrer"},Cn=t("capitalizations of Unicode"),Ln=t("Fixes to "),Pn={href:"https://github.com/nushell/nushell/pull/3335",target:"_blank",rel:"noopener noreferrer"},qn=t("path sync'ing"),An=t(", "),Un={href:"https://github.com/nushell/nushell/pull/3336",target:"_blank",rel:"noopener noreferrer"},$n=t("more path fixes"),zn=t(", and "),Dn={href:"https://github.com/nushell/nushell/pull/3339",target:"_blank",rel:"noopener noreferrer"},En=t("improvements to dynamic blocks"),Sn=e("h2",{id:"breaking-changes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#breaking-changes","aria-hidden":"true"},"#"),t(" Breaking changes")],-1),Mn=e("h3",{id:"removed-help-shell",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#removed-help-shell","aria-hidden":"true"},"#"),t(" Removed help shell")],-1),Kn=t("We have removed the "),On={href:"https://github.com/nushell/nushell/pull/3258",target:"_blank",rel:"noopener noreferrer"},Gn=t("help shell"),Hn=t(" to simplify code."),Jn=e("h3",{id:"removed-ambiguous-units",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#removed-ambiguous-units","aria-hidden":"true"},"#"),t(" Removed ambiguous units")],-1),Qn=t("We've also removed "),Xn={href:"https://github.com/nushell/nushell/pull/3262",target:"_blank",rel:"noopener noreferrer"},Yn=e("code",null,"yr",-1),Zn=t(" and "),eo=e("code",null,"mon",-1),to=t(" units"),no=t(" because their meaning was too confusing."),oo=e("h3",{id:"new-set-of-default-features",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#new-set-of-default-features","aria-hidden":"true"},"#"),t(" New set of default features")],-1),so=t("The "),lo={href:"https://github.com/nushell/nushell/pull/3288",target:"_blank",rel:"noopener noreferrer"},ro=t("default feature list is now simpler"),ho=t(". This means that doing a "),io=e("code",null,"cargo install",-1),ao=t(" will give you fewer of the plugins than previously. We're still working to refine this list. Please do give feedback if these changes negatively impact you."),_o=e("h1",{id:"looking-ahead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),t(" Looking ahead")],-1),co=e("p",null,"The new engine and performance improvements should open the door for even more improvements in the future. These improvements also make it easier to explore adding more sophisticated completion logic in the future, as that logic could be written in Nushell itself.",-1);function uo(po,mo){const n=l("ExternalLinkIcon");return r(),h("div",null,[c,u,p,i(" more "),m,e("p",null,[f,e("a",g,[b,o(n)]),k,e("a",w,[v,o(n)]),y,x,N]),T,e("p",null,[I,e("a",F,[j,o(n)]),W,e("a",B,[R,o(n)]),V,e("a",C,[L,o(n)]),P]),e("p",null,[q,e("a",A,[U,o(n)]),$,z,D]),E,S,M,K,e("ul",null,[e("li",null,[e("a",O,[G,o(n)]),H]),e("li",null,[e("a",J,[Q,X,Y,o(n)]),Z]),e("li",null,[e("a",ee,[te,ne,oe,se,le,o(n)]),re]),e("li",null,[e("a",he,[ie,o(n)]),ae]),e("li",null,[e("a",_e,[de,o(n)]),ce])]),ue,e("p",null,[pe,e("a",me,[fe,o(n)]),ge]),be,e("ul",null,[e("li",null,[ke,e("a",we,[ve,o(n)]),ye,e("a",xe,[Ne,o(n)]),Te,e("a",Ie,[Fe,o(n)]),je,e("a",We,[Be,o(n)]),Re,e("a",Ve,[Ce,o(n)])]),e("li",null,[Le,e("a",Pe,[qe,o(n)])]),e("li",null,[Ae,e("a",Ue,[$e,o(n)])]),e("li",null,[ze,e("a",De,[Ee,Se,o(n)]),Me,e("a",Ke,[Oe,Ge,o(n)]),He,e("a",Je,[Qe,Xe,Ye,o(n)]),Ze,e("a",et,[tt,nt,ot,st,lt,o(n)]),rt,e("a",ht,[it,at,o(n)])]),e("li",null,[_t,e("a",dt,[ct,ut,o(n)])]),e("li",null,[pt,e("a",mt,[ft,gt,bt,o(n)])]),e("li",null,[kt,e("a",wt,[vt,o(n)])]),e("li",null,[yt,e("a",xt,[Nt,o(n)])]),e("li",null,[Tt,e("a",It,[Ft,jt,o(n)])]),e("li",null,[Wt,e("a",Bt,[Rt,o(n)])]),e("li",null,[Vt,e("a",Ct,[Lt,o(n)])]),e("li",null,[Pt,e("a",qt,[At,o(n)])]),e("li",null,[Ut,e("a",$t,[zt,o(n)])]),e("li",null,[Dt,e("a",Et,[St,o(n)])]),e("li",null,[Mt,e("a",Kt,[Ot,o(n)])]),e("li",null,[Gt,e("a",Ht,[Jt,o(n)])]),e("li",null,[Qt,e("a",Xt,[Yt,o(n)])]),e("li",null,[Zt,e("a",en,[tn,nn,o(n)])]),e("li",null,[on,e("a",sn,[ln,o(n)])]),e("li",null,[rn,e("a",hn,[an,o(n)])]),e("li",null,[_n,e("a",dn,[cn,o(n)])]),e("li",null,[un,e("a",pn,[mn,o(n)])]),e("li",null,[fn,e("a",gn,[bn,o(n)])]),e("li",null,[kn,e("a",wn,[vn,o(n)])]),e("li",null,[yn,e("a",xn,[Nn,o(n)])]),e("li",null,[Tn,e("a",In,[Fn,o(n)])]),e("li",null,[jn,e("a",Wn,[Bn,o(n)])]),e("li",null,[Rn,e("a",Vn,[Cn,o(n)])]),e("li",null,[Ln,e("a",Pn,[qn,o(n)]),An,e("a",Un,[$n,o(n)]),zn,e("a",Dn,[En,o(n)])])]),Sn,Mn,e("p",null,[Kn,e("a",On,[Gn,o(n)]),Hn]),Jn,e("p",null,[Qn,e("a",Xn,[Yn,Zn,eo,to,o(n)]),no]),oo,e("p",null,[so,e("a",lo,[ro,o(n)]),ho,io,ao]),_o,co])}const go=s(d,[["render",uo],["__file","2021-04-20-nushell_0_30.html.vue"]]);export{go as default};
