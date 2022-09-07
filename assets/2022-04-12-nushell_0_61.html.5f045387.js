import{_ as s,r as l,o as r,c as h,f as i,a as e,b as n,d as t,e as _}from"./app.c2a61f71.js";const a="/assets/0_61_help_menu.b2e9579f.png",c="/assets/0_61_completion_descriptions.932281e0.png",d={},u=e("h1",{id:"nushell-0-61",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-61","aria-hidden":"true"},"#"),t(" Nushell 0.61")],-1),p=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),f=e("p",null,"Today, we're releasing version 0.61 of Nu. This release includes UI improvements, many bugfixes, improved glob support, and more.",-1),g=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),m=t("Nu 0.61 is available as "),b={href:"https://github.com/nushell/nushell/releases/tag/0.61.0",target:"_blank",rel:"noopener noreferrer"},k=t("pre-built binaries"),w=t(" or from "),v={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},y=t("crates.io"),x=t(". If you have Rust installed you can install it using "),j=e("code",null,"cargo install nu",-1),N=t("."),I=_('<p>If you want all the built-in goodies, you can install <code>cargo install nu --all-features</code>.</p><p>As part of this release, we also publish a set of optional plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="help-menu-elferherrera" tabindex="-1"><a class="header-anchor" href="#help-menu-elferherrera" aria-hidden="true">#</a> Help Menu (elferherrera)</h1><p><img src="'+a+'" alt="Help menu"></p><p>In 0.61, you can now use <code>&lt;ctrl+q&gt;</code> to ask a question/query in Nushell. Currently, this will search through the commands and show you commands that mention the word you type.</p><p>Tab lets you move between the available commands.</p><p>You can use up/down to pick the example you&#39;d like to use. Pressing enter will select the example and insert it into the input for you.</p><h1 id="completion-descriptions-elferherrera-fdncred-jt" tabindex="-1"><a class="header-anchor" href="#completion-descriptions-elferherrera-fdncred-jt" aria-hidden="true">#</a> Completion descriptions (elferherrera, fdncred, jt)</h1><p><img src="'+c+'" alt="Completion descriptions"></p><p>Completions now show you a description of the command you&#39;re completing, if it&#39;s available.</p><h1 id="introducing-env-nu-kubouch" tabindex="-1"><a class="header-anchor" href="#introducing-env-nu-kubouch" aria-hidden="true">#</a> Introducing &#39;env.nu&#39; (kubouch)</h1><p>Just as we added &#39;config.nu&#39; with 0.60, we&#39;re now adding a new additional startup file called &#39;env.nu&#39;. The job of this file is to set up the environment that you&#39;ll run Nushell in. As a result, you&#39;re able to set up important environment variables like <code>$env.NU_LIB_DIRS</code> before &#39;config.nu&#39; begins to run, let you take full advantage of the new library directories you&#39;ve configured.</p><h1 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h1>',13),A=e("code",null,"input",-1),T=t(" can now "),C={href:"https://github.com/nushell/nushell/pull/5017",target:"_blank",rel:"noopener noreferrer"},F=t("suppress output"),S=t(" (dev-msp)"),E={href:"https://github.com/nushell/nushell/pull/4956",target:"_blank",rel:"noopener noreferrer"},B=t("Termux/Android target support for new engine"),L=t(" (dscottboggs)"),P=e("code",null,"open",-1),R=t(" can now use "),V={href:"https://github.com/nushell/nushell/pull/5049",target:"_blank",rel:"noopener noreferrer"},z=e("code",null,"from ...",-1),D=t(" named custom commands"),U=t(" (neosam)"),q=t("New "),H={href:"https://github.com/nushell/nushell/pull/5054",target:"_blank",rel:"noopener noreferrer"},$=e("code",null,"sort",-1),J=t(" command for easier sorting"),M=t(" (jt)"),O=e("code",null,"date to-record",-1),W=t(" for "),G={href:"https://github.com/nushell/nushell/pull/5058",target:"_blank",rel:"noopener noreferrer"},X=t("working with structured dates"),Y=t(" (jt)"),K=t("New "),Q={href:"https://github.com/nushell/nushell/pull/5061",target:"_blank",rel:"noopener noreferrer"},Z=t("starts-with operator"),ee=t(" (fdncred)"),te=t("Can now create "),oe={href:"https://github.com/nushell/nushell/pull/5085",target:"_blank",rel:"noopener noreferrer"},ne=t("generic menus for repl interactions"),se=t(" (elferherrera)"),le=t("New "),re={href:"https://github.com/nushell/nushell/pull/5087",target:"_blank",rel:"noopener noreferrer"},he=e("code",null,"glob",-1),ie=t(" command for fancier globbing"),_e=t(" (fdncred)"),ae={href:"https://github.com/nushell/nushell/pull/5111",target:"_blank",rel:"noopener noreferrer"},ce=t("Unary "),de=e("code",null,"not",-1),ue=t(" support"),pe=t(" (jt)"),fe=t("Startup and pre-prompt setup should now be "),ge={href:"https://github.com/nushell/nushell/pull/5115",target:"_blank",rel:"noopener noreferrer"},me=t("significantly faster"),be=t(" (jt)"),ke={href:"https://github.com/nushell/nushell/pull/5149",target:"_blank",rel:"noopener noreferrer"},we=e("code",null,"0b[...]",-1),ve=t(" support for binary literals"),ye=t(" (merkrafter)"),xe=e("h1",{id:"improvements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#improvements","aria-hidden":"true"},"#"),t(" Improvements")],-1),je=e("li",null,"Parser improvements by uasi, jt, rgwood",-1),Ne=e("li",null,"Error improvements by jmoore34, jt, rgwood",-1),Ie=e("li",null,"Documentation updates by hustcer, vishalsodani, fdncred, futile, kubouch, stormasm, Hofer-Julian, herlon214, rgwood, michel-slm",-1),Ae=e("li",null,"General code cleanliness fixes by stormasm, bowlofeggs, rgwood, sholderbach, fdncred, herlon214, elferherrera, boyvanduuren, jt",-1),Te=e("li",null,"Multiple improvements to known external commands (filaretov, jt)",-1),Ce={href:"https://github.com/nushell/nushell/pull/5167",target:"_blank",rel:"noopener noreferrer"},Fe=t("Use recent miette"),Se=t(" (zkat)"),Ee={href:"https://github.com/nushell/nushell/pull/5153",target:"_blank",rel:"noopener noreferrer"},Be=t("Improved logic to path expansion"),Le=t(" (strega-nil-ms)"),Pe={href:"https://github.com/nushell/nushell/pull/5141",target:"_blank",rel:"noopener noreferrer"},Re=e("code",null,"ls",-1),Ve=t(" now outputs date in local time"),ze=t(" (fdncred)"),De={href:"https://github.com/nushell/nushell/pull/5137",target:"_blank",rel:"noopener noreferrer"},Ue=e("code",null,"$in",-1),qe=t(" should now work in more places"),He=t(" (jt)"),$e={href:"https://github.com/nushell/nushell/pull/5136",target:"_blank",rel:"noopener noreferrer"},Je=e("code",null,"each",-1),Me=t(" now also pipes each item as input to the block"),Oe=t(" (jt)"),We=t("Add ability to "),Ge={href:"https://github.com/nushell/nushell/pull/5133",target:"_blank",rel:"noopener noreferrer"},Xe=t("opt-in to normal strings in "),Ye=e("code",null,"str replace",-1),Ke=t(" (fdncred)"),Qe=e("code",null,"touch",-1),Ze=t(" now "),et={href:"https://github.com/nushell/nushell/pull/5119",target:"_blank",rel:"noopener noreferrer"},tt=t("includes all common flags"),ot=t(" (rybertm)"),nt=e("code",null,"=~",-1),st=t(" and "),lt=e("code",null,"!~",-1),rt=t(" now "),ht={href:"https://github.com/nushell/nushell/pull/5117",target:"_blank",rel:"noopener noreferrer"},it=t("use regex"),_t=t(" (rgwood)"),at=e("code",null,"describe",-1),ct=t(" should now be "),dt={href:"https://github.com/nushell/nushell/pull/5116",target:"_blank",rel:"noopener noreferrer"},ut=t("more precise"),pt=t("completions now "),ft={href:"https://github.com/nushell/nushell/pull/5108",target:"_blank",rel:"noopener noreferrer"},gt=t("give priority to non-hidden folders"),mt=t(" (herlon214)"),bt={href:"https://github.com/nushell/nushell/pull/5105",target:"_blank",rel:"noopener noreferrer"},kt=t("plugins are now loaded for scripts and commands"),wt=t(" (jt)"),vt={href:"https://github.com/nushell/nushell/pull/5097",target:"_blank",rel:"noopener noreferrer"},yt=e("code",null,"input",-1),xt=t(" now trims the newline"),jt=t(" (rgwood)"),Nt={href:"https://github.com/nushell/nushell/pull/5100",target:"_blank",rel:"noopener noreferrer"},It=t("regex "),At=e("code",null,"find",-1),Tt=t(" now works with records"),Ct=t(" (fdncred)"),Ft=t("Fixes to "),St={href:"https://github.com/nushell/nushell/pull/5095",target:"_blank",rel:"noopener noreferrer"},Et=e("code",null,"format",-1),Bt=t(" for non-basic datatypes"),Lt=t(" (rgwood)"),Pt=t("Added "),Rt={href:"https://github.com/nushell/nushell/pull/5090",target:"_blank",rel:"noopener noreferrer"},Vt=t("raw string support via backticks"),zt=t(" (jt)"),Dt=t("Switched to "),Ut={href:"https://github.com/nushell/nushell/pull/5001",target:"_blank",rel:"noopener noreferrer"},qt=t("levenshtein distance sorting for completions"),Ht=t(" (jt)"),$t=t("Improvements to "),Jt={href:"https://github.com/nushell/nushell/pull/5041",target:"_blank",rel:"noopener noreferrer"},Mt=t("line editor state handling"),Ot=t(" (sholderbach)"),Wt=t("Treat "),Gt={href:"https://github.com/nushell/nushell/pull/5026",target:"_blank",rel:"noopener noreferrer"},Xt=t("prompt indicators as commands"),Yt=t(" (elferherrera)"),Kt=t("Added "),Qt={href:"https://github.com/nushell/nushell/pull/5040",target:"_blank",rel:"noopener noreferrer"},Zt=t("record, list, and table to signature types"),eo=t(" (kubouch)"),to=t("Improvements to "),oo={href:"https://github.com/nushell/nushell/pull/5016",target:"_blank",rel:"noopener noreferrer"},no=t("default git completions"),so=t(" (naufraghi)"),lo=t("Prompts "),ro={href:"https://github.com/nushell/nushell/pull/5052",target:"_blank",rel:"noopener noreferrer"},ho=t("can now be simple strings"),io=t(" (jt)"),_o=t("Sets "),ao={href:"https://github.com/nushell/nushell/pull/5084",target:"_blank",rel:"noopener noreferrer"},co=t("LAST_EXIT_CODE on parse errors"),uo=t(" (rgwood)"),po=t("Passed "),fo={href:"https://github.com/nushell/nushell/pull/5009",target:"_blank",rel:"noopener noreferrer"},go=t("more metadata through filter commands"),mo=t(" (rrcwang)"),bo=e("code",null,"last",-1),ko=t(" now returns a "),wo={href:"https://github.com/nushell/nushell/pull/5060",target:"_blank",rel:"noopener noreferrer"},vo=t("simple value for single items"),yo=t(" (jt)"),xo=t("Fixed "),jo={href:"https://github.com/nushell/nushell/pull/5003",target:"_blank",rel:"noopener noreferrer"},No=t("loops not terminating with ctrl-c"),Io=t(" (jt)"),Ao=t("Added "),To={href:"https://github.com/nushell/nushell/pull/4986",target:"_blank",rel:"noopener noreferrer"},Co=t("bounded channels for backpressure"),Fo=t(" (b333z)"),So=t("Added "),Eo={href:"https://github.com/nushell/nushell/pull/4985",target:"_blank",rel:"noopener noreferrer"},Bo=t("streaming support to "),Lo=e("code",null,"save",-1),Po=t(" (b333z)"),Ro={href:"https://github.com/nushell/nushell/pull/4984",target:"_blank",rel:"noopener noreferrer"},Vo=t("Support for passing binary data into run-external"),zo=t(" (b333z)"),Do={href:"https://github.com/nushell/nushell/pull/4968",target:"_blank",rel:"noopener noreferrer"},Uo=t("Fix for alias imports"),qo=t(" (filaretov, jt)"),Ho={href:"https://github.com/nushell/nushell/pull/4983",target:"_blank",rel:"noopener noreferrer"},$o=t("Fix for "),Jo=e("code",null,"ls",-1),Mo=t(" when file is a socket on macOS"),Oo=t(" (fdncred)"),Wo={href:"https://github.com/nushell/nushell/pull/4974",target:"_blank",rel:"noopener noreferrer"},Go=t("Better tilde expansion"),Xo=t(" (filaretov)"),Yo=t("Added "),Ko={href:"https://github.com/nushell/nushell/pull/4978",target:"_blank",rel:"noopener noreferrer"},Qo=t("keywords to help messages"),Zo=t(" (kubouch)"),en=t("Removed "),tn={href:"https://github.com/nushell/nushell/pull/4979",target:"_blank",rel:"noopener noreferrer"},on=t("is_private from "),nn=e("code",null,"$nu.scope.commands",-1),sn=t(" (kubouch)"),ln={href:"https://github.com/nushell/nushell/pull/4959",target:"_blank",rel:"noopener noreferrer"},rn=t("Fix for "),hn=e("code",null,"path join",-1),_n=t(" on streams"),an=t(" (jt)"),cn={href:"https://github.com/nushell/nushell/pull/4960",target:"_blank",rel:"noopener noreferrer"},dn=t("Fixes to environment defaults"),un=t(" (jt)"),pn={href:"https://github.com/nushell/nushell/pull/4964",target:"_blank",rel:"noopener noreferrer"},fn=t("Adding escapes to "),gn=e("code",null,"to nuon",-1),mn=t(" (jt)"),bn=t("Improvements to the "),kn={href:"https://github.com/nushell/nushell/pull/4951",target:"_blank",rel:"noopener noreferrer"},wn=e("code",null,"reject",-1),vn=t(" command"),yn=t(" (jt)"),xn=t("Fix to the "),jn={href:"https://github.com/nushell/nushell/pull/4947",target:"_blank",rel:"noopener noreferrer"},Nn=t("precedence parser"),In=t(" (jt)"),An=t("Calling out through "),Tn=e("code",null,"cmd.exe",-1),Cn=t(),Fn={href:"https://github.com/nushell/nushell/pull/4903",target:"_blank",rel:"noopener noreferrer"},Sn=t("no longer uses AutoRun"),En=t(" (LebsterFace)"),Bn=e("h1",{id:"breaking-changes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#breaking-changes","aria-hidden":"true"},"#"),t(" Breaking changes")],-1),Ln={href:"https://github.com/nushell/nushell/pull/5120",target:"_blank",rel:"noopener noreferrer"},Pn=e("code",null,"str find-replace",-1),Rn=t(" is now "),Vn=e("code",null,"str replace",-1),zn={href:"https://github.com/nushell/nushell/pull/5123",target:"_blank",rel:"noopener noreferrer"},Dn=e("code",null,"keep",-1),Un=t(" is now "),qn=e("code",null,"take",-1),Hn=e("h1",{id:"looking-ahead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),t(" Looking ahead")],-1),$n=e("p",null,"The 0.61 release, despite slowing down a little to recoup from the 0.60 release, is one of our largest releases. We averaged over 7 PRs/day over the last three weeks, as many new people joined on and more took an interest in Nushell.",-1),Jn=e("p",null,"Areas of upcoming focus will be on improving dataframe support, adding IDE support, and exploring new ways of working with Nushell.",-1);function Mn(On,Wn){const o=l("ExternalLinkIcon");return r(),h("div",null,[u,p,f,i(" more "),g,e("p",null,[m,e("a",b,[k,n(o)]),w,e("a",v,[y,n(o)]),x,j,N]),I,e("ul",null,[e("li",null,[A,T,e("a",C,[F,n(o)]),S]),e("li",null,[e("a",E,[B,n(o)]),L]),e("li",null,[P,R,e("a",V,[z,D,n(o)]),U]),e("li",null,[q,e("a",H,[$,J,n(o)]),M]),e("li",null,[O,W,e("a",G,[X,n(o)]),Y]),e("li",null,[K,e("a",Q,[Z,n(o)]),ee]),e("li",null,[te,e("a",oe,[ne,n(o)]),se]),e("li",null,[le,e("a",re,[he,ie,n(o)]),_e]),e("li",null,[e("a",ae,[ce,de,ue,n(o)]),pe]),e("li",null,[fe,e("a",ge,[me,n(o)]),be]),e("li",null,[e("a",ke,[we,ve,n(o)]),ye])]),xe,e("ul",null,[je,Ne,Ie,Ae,Te,e("li",null,[e("a",Ce,[Fe,n(o)]),Se]),e("li",null,[e("a",Ee,[Be,n(o)]),Le]),e("li",null,[e("a",Pe,[Re,Ve,n(o)]),ze]),e("li",null,[e("a",De,[Ue,qe,n(o)]),He]),e("li",null,[e("a",$e,[Je,Me,n(o)]),Oe]),e("li",null,[We,e("a",Ge,[Xe,Ye,n(o)]),Ke]),e("li",null,[Qe,Ze,e("a",et,[tt,n(o)]),ot]),e("li",null,[nt,st,lt,rt,e("a",ht,[it,n(o)]),_t]),e("li",null,[at,ct,e("a",dt,[ut,n(o)])]),e("li",null,[pt,e("a",ft,[gt,n(o)]),mt]),e("li",null,[e("a",bt,[kt,n(o)]),wt]),e("li",null,[e("a",vt,[yt,xt,n(o)]),jt]),e("li",null,[e("a",Nt,[It,At,Tt,n(o)]),Ct]),e("li",null,[Ft,e("a",St,[Et,Bt,n(o)]),Lt]),e("li",null,[Pt,e("a",Rt,[Vt,n(o)]),zt]),e("li",null,[Dt,e("a",Ut,[qt,n(o)]),Ht]),e("li",null,[$t,e("a",Jt,[Mt,n(o)]),Ot]),e("li",null,[Wt,e("a",Gt,[Xt,n(o)]),Yt]),e("li",null,[Kt,e("a",Qt,[Zt,n(o)]),eo]),e("li",null,[to,e("a",oo,[no,n(o)]),so]),e("li",null,[lo,e("a",ro,[ho,n(o)]),io]),e("li",null,[_o,e("a",ao,[co,n(o)]),uo]),e("li",null,[po,e("a",fo,[go,n(o)]),mo]),e("li",null,[bo,ko,e("a",wo,[vo,n(o)]),yo]),e("li",null,[xo,e("a",jo,[No,n(o)]),Io]),e("li",null,[Ao,e("a",To,[Co,n(o)]),Fo]),e("li",null,[So,e("a",Eo,[Bo,Lo,n(o)]),Po]),e("li",null,[e("a",Ro,[Vo,n(o)]),zo]),e("li",null,[e("a",Do,[Uo,n(o)]),qo]),e("li",null,[e("a",Ho,[$o,Jo,Mo,n(o)]),Oo]),e("li",null,[e("a",Wo,[Go,n(o)]),Xo]),e("li",null,[Yo,e("a",Ko,[Qo,n(o)]),Zo]),e("li",null,[en,e("a",tn,[on,nn,n(o)]),sn]),e("li",null,[e("a",ln,[rn,hn,_n,n(o)]),an]),e("li",null,[e("a",cn,[dn,n(o)]),un]),e("li",null,[e("a",pn,[fn,gn,n(o)]),mn]),e("li",null,[bn,e("a",kn,[wn,vn,n(o)]),yn]),e("li",null,[xn,e("a",jn,[Nn,n(o)]),In]),e("li",null,[An,Tn,Cn,e("a",Fn,[Sn,n(o)]),En])]),Bn,e("ul",null,[e("li",null,[e("a",Ln,[Pn,Rn,Vn,n(o)])]),e("li",null,[e("a",zn,[Dn,Un,qn,n(o)])])]),Hn,$n,Jn])}const Xn=s(d,[["render",Mn],["__file","2022-04-12-nushell_0_61.html.vue"]]);export{Xn as default};
