import{_ as l,r as s,o as r,c as h,f as i,a as e,b as n,d as t}from"./app.c2a61f71.js";const a={},_=e("h1",{id:"nushell-0-35",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-35","aria-hidden":"true"},"#"),t(" Nushell 0.35")],-1),d=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),c=e("p",null,"Today, we're releasing 0.35 of Nu. This release shows off a lot of dataframe progress and lots of command polish.",-1),u=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),p=t("Nu 0.35 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.35.0",target:"_blank",rel:"noopener noreferrer"},m=t("pre-built binaries"),g=t(" or from "),b={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},k=t("crates.io"),w=t(". If you have Rust installed you can install it using "),v=e("code",null,"cargo install nu",-1),x=t("."),y=e("p",null,[t("If you want all the goodies, you can install "),e("code",null,"cargo install nu --features=extra"),t(".")],-1),N=e("p",null,[t("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),e("code",null,"cargo install nu_plugin_<plugin name>"),t(".")],-1),I=e("h1",{id:"what-s-new",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-s-new","aria-hidden":"true"},"#"),t(" What's New")],-1),z=e("h2",{id:"new-commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#new-commands","aria-hidden":"true"},"#"),t(" New commands")],-1),T={href:"https://github.com/nushell/nushell/pull/3811",target:"_blank",rel:"noopener noreferrer"},W=e("code",null,"into path",-1),A=t(" (realcundo)"),F={href:"https://github.com/nushell/nushell/pull/3833",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"date humanize",-1),j=t(" (zkat)"),V={href:"https://github.com/nushell/nushell/pull/3836",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,"hash sha256",-1),C=t(" (with "),E={href:"https://github.com/nushell/nushell/pull/3841",target:"_blank",rel:"noopener noreferrer"},L=t("additional improvements"),D=t(") (realcundo)"),H=e("h2",{id:"dataframe-improvements-elferherrera",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dataframe-improvements-elferherrera","aria-hidden":"true"},"#"),t(" Dataframe improvements (elferherrera)")],-1),P={href:"https://github.com/nushell/nushell/pull/3776",target:"_blank",rel:"noopener noreferrer"},R=t("Improved join operation"),U={href:"https://github.com/nushell/nushell/pull/3781",target:"_blank",rel:"noopener noreferrer"},q=t("Faster CSV reading and encoding"),G={href:"https://github.com/nushell/nushell/pull/3805",target:"_blank",rel:"noopener noreferrer"},M=t("New shape command"),Y={href:"https://github.com/nushell/nushell/pull/3812",target:"_blank",rel:"noopener noreferrer"},J=t("Remove Series and treat all dataframe structures the same"),K={href:"https://github.com/nushell/nushell/pull/3839",target:"_blank",rel:"noopener noreferrer"},O=t("Support for appending dataframes"),Q={href:"https://github.com/nushell/nushell/pull/3864",target:"_blank",rel:"noopener noreferrer"},X=t("Allow dataframes to hold more kinds of data"),Z={href:"https://github.com/nushell/nushell/pull/3874",target:"_blank",rel:"noopener noreferrer"},$=t("Simplified contains command"),ee={href:"https://github.com/nushell/nushell/pull/3875",target:"_blank",rel:"noopener noreferrer"},te=t("Pretty printing for nested dataframes"),oe=e("h2",{id:"additional-improvements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#additional-improvements","aria-hidden":"true"},"#"),t(" Additional improvements")],-1),ne=t("Hinting is "),le={href:"https://github.com/nushell/nushell/pull/3780",target:"_blank",rel:"noopener noreferrer"},se=t("now configurable"),re=t(" (fdncred)"),he={href:"https://github.com/nushell/nushell/pull/3767",target:"_blank",rel:"noopener noreferrer"},ie=t("Improvements to our winget releases"),ae=t(" and "),_e={href:"https://github.com/nushell/nushell/pull/3819",target:"_blank",rel:"noopener noreferrer"},de=t("publish workflows"),ce=t(" (TechWatching)"),ue=t("More commands "),pe={href:"https://github.com/nushell/nushell/pull/3794",target:"_blank",rel:"noopener noreferrer"},fe=t("got some additional cleanup"),me=t(" (sambordo1)"),ge=t("Startup times "),be={href:"https://github.com/nushell/nushell/pull/3854",target:"_blank",rel:"noopener noreferrer"},ke=t("now have a detailed breakdown"),we=t(" (fdncred)"),ve=t("You can now "),xe={href:"https://github.com/nushell/nushell/pull/3845",target:"_blank",rel:"noopener noreferrer"},ye=t("compare durations"),Ne=t(" (fdncred)"),Ie=t("Fixed "),ze={href:"https://github.com/nushell/nushell/pull/3804",target:"_blank",rel:"noopener noreferrer"},Te=t("docs for "),We=e("code",null,"completion_type",-1),Ae=t(" (dirtybit)"),Fe=t("Fixed "),Se={href:"https://github.com/nushell/nushell/pull/3807",target:"_blank",rel:"noopener noreferrer"},je=t("theme for text viewing"),Ve=t(" (fdncred)"),Be={href:"https://github.com/nushell/nushell/pull/3832",target:"_blank",rel:"noopener noreferrer"},Ce=e("code",null,"describe",-1),Ee=t(" no longer outputs using colors"),Le=t(" (fdncred)"),De=t("String intepolation "),He={href:"https://github.com/nushell/nushell/pull/3866",target:"_blank",rel:"noopener noreferrer"},Pe=t("now handles Unicode better"),Re=t(" (fdncred)"),Ue=t("Fixed "),qe={href:"https://github.com/nushell/nushell/pull/3829",target:"_blank",rel:"noopener noreferrer"},Ge=t("path separator in "),Me=e("code",null,"pathvar",-1),Ye=t(" (nathom)"),Je={href:"https://github.com/nushell/nushell/pull/3821",target:"_blank",rel:"noopener noreferrer"},Ke=t("Power operations can now be negative"),Oe=t(" (jafriyie1)"),Qe=t("Issues now "),Xe={href:"https://github.com/nushell/nushell/pull/3818",target:"_blank",rel:"noopener noreferrer"},Ze=t("use GitHub forms"),$e=t(" (zkat)"),et=t("Fixed a typo "),tt={href:"https://github.com/nushell/nushell/pull/3824",target:"_blank",rel:"noopener noreferrer"},ot=t("in our github release configuration"),nt=t(" (zkat)"),lt=t("Date formatting now "),st={href:"https://github.com/nushell/nushell/pull/3834",target:"_blank",rel:"noopener noreferrer"},rt=t("uses the chrono_humanize crate"),ht=t(" (zkat)"),it=t("Updated the "),at={href:"https://github.com/nushell/nushell/pull/3848",target:"_blank",rel:"noopener noreferrer"},_t=t("docs on implementing a command"),dt=t(" (margguo)"),ct=t("Cleaned up "),ut={href:"https://github.com/nushell/nushell/pull/3853",target:"_blank",rel:"noopener noreferrer"},pt=t("some stale dependencies"),ft=t(" (elferherrera)"),mt=t("Improved "),gt={href:"https://github.com/nushell/nushell/pull/3857",target:"_blank",rel:"noopener noreferrer"},bt=t("how "),kt=e("code",null,"select",-1),wt=t(" handles empty cells"),vt=t(" (realcundo)"),xt=t("Added "),yt={href:"https://github.com/nushell/nushell/pull/3863",target:"_blank",rel:"noopener noreferrer"},Nt=t("named block params to "),It=e("code",null,"all?",-1),zt=t(" (jt)"),Tt={href:"https://github.com/nushell/nushell/pull/3869",target:"_blank",rel:"noopener noreferrer"},Wt=t("Better handling of environement shorthands"),At=t(" (lily-mara)"),Ft=t("Added "),St={href:"https://github.com/nushell/nushell/pull/3870",target:"_blank",rel:"noopener noreferrer"},jt=t("support for multi-doc yaml files"),Vt=t(" (realcundo)"),Bt=t("Added "),Ct={href:"https://github.com/nushell/nushell/pull/3878",target:"_blank",rel:"noopener noreferrer"},Et=t("a new crate to support Nu serialization more directly with serde"),Lt=t(" (lily-mara)"),Dt=e("h1",{id:"looking-ahead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),t(" Looking ahead")],-1),Ht=e("p",null,"We're hard at work at bringing more dataframe support into nushell itself, which will allow us to use it for more actions, and extend support to dataframes to existing commands.",-1),Pt=t("We're also working on the new "),Rt={href:"https://github.com/jntrnr/engine-q",target:"_blank",rel:"noopener noreferrer"},Ut=t("parsing/evaluation engine"),qt=t(" which is proving to be both faster and more correct than the current nushell engine. We're excited to keep evolving it and then integrating it into Nushell. This engine will also be fast enough, and correct enough, to drive completions as Nu scripts. This will allow us to add intelligent completions that work with both internal and external commands."),Gt=t("Finally, we're nearing the goal for "),Mt={href:"https://github.com/jntrnr/reedline",target:"_blank",rel:"noopener noreferrer"},Yt=t("reedline"),Jt=t(", which is now solid enough, and complete enough, to use for daily work. We're hoping to polish it up and then experiment with moving Nushell to use it in the coming release (or two).");function Kt(Ot,Qt){const o=s("ExternalLinkIcon");return r(),h("div",null,[_,d,c,i(" more "),u,e("p",null,[p,e("a",f,[m,n(o)]),g,e("a",b,[k,n(o)]),w,v,x]),y,N,I,z,e("ul",null,[e("li",null,[e("a",T,[W,n(o)]),A]),e("li",null,[e("a",F,[S,n(o)]),j]),e("li",null,[e("a",V,[B,n(o)]),C,e("a",E,[L,n(o)]),D])]),H,e("ul",null,[e("li",null,[e("a",P,[R,n(o)])]),e("li",null,[e("a",U,[q,n(o)])]),e("li",null,[e("a",G,[M,n(o)])]),e("li",null,[e("a",Y,[J,n(o)])]),e("li",null,[e("a",K,[O,n(o)])]),e("li",null,[e("a",Q,[X,n(o)])]),e("li",null,[e("a",Z,[$,n(o)])]),e("li",null,[e("a",ee,[te,n(o)])])]),oe,e("ul",null,[e("li",null,[ne,e("a",le,[se,n(o)]),re]),e("li",null,[e("a",he,[ie,n(o)]),ae,e("a",_e,[de,n(o)]),ce]),e("li",null,[ue,e("a",pe,[fe,n(o)]),me]),e("li",null,[ge,e("a",be,[ke,n(o)]),we]),e("li",null,[ve,e("a",xe,[ye,n(o)]),Ne]),e("li",null,[Ie,e("a",ze,[Te,We,n(o)]),Ae]),e("li",null,[Fe,e("a",Se,[je,n(o)]),Ve]),e("li",null,[e("a",Be,[Ce,Ee,n(o)]),Le]),e("li",null,[De,e("a",He,[Pe,n(o)]),Re]),e("li",null,[Ue,e("a",qe,[Ge,Me,n(o)]),Ye]),e("li",null,[e("a",Je,[Ke,n(o)]),Oe]),e("li",null,[Qe,e("a",Xe,[Ze,n(o)]),$e]),e("li",null,[et,e("a",tt,[ot,n(o)]),nt]),e("li",null,[lt,e("a",st,[rt,n(o)]),ht]),e("li",null,[it,e("a",at,[_t,n(o)]),dt]),e("li",null,[ct,e("a",ut,[pt,n(o)]),ft]),e("li",null,[mt,e("a",gt,[bt,kt,wt,n(o)]),vt]),e("li",null,[xt,e("a",yt,[Nt,It,n(o)]),zt]),e("li",null,[e("a",Tt,[Wt,n(o)]),At]),e("li",null,[Ft,e("a",St,[jt,n(o)]),Vt]),e("li",null,[Bt,e("a",Ct,[Et,n(o)]),Lt])]),Dt,Ht,e("p",null,[Pt,e("a",Rt,[Ut,n(o)]),qt]),e("p",null,[Gt,e("a",Mt,[Yt,n(o)]),Jt])])}const Zt=l(a,[["render",Kt],["__file","2021-08-03-nushell_0_35.html.vue"]]);export{Zt as default};
