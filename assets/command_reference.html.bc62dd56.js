import{_ as i,p as m,r as _,o as s,c as r,a as e,b as h,w as u,F as p,g as f,d as a,t as l}from"./app.c2a61f71.js";const x={computed:{commands(){return m.filter(t=>t.path.indexOf("/book/commands/")>=0).sort((t,n)=>t.title>n.title?1:n.title>t.title?-1:0)}}},k=e("h1",{id:"command-reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#command-reference","aria-hidden":"true"},"#"),a(" Command Reference")],-1),g=a("To see all commands in Nushell, run "),b=e("code",null,"help commands",-1),w=a("."),C=e("tr",null,[e("th",null,"Command"),e("th",null,"Description")],-1),N=["href"],v={style:{"white-space":"pre-wrap"}};function B(t,n,L,R,V,c){const d=_("RouterLink");return s(),r("div",null,[k,e("p",null,[g,h(d,{to:"/book/commands/help.html"},{default:u(()=>[b]),_:1}),w]),e("table",null,[C,(s(!0),r(p,null,f(c.commands,o=>(s(),r("tr",null,[e("td",null,[e("a",{href:o.path},l(o.title),9,N)]),e("td",v,l(o.frontmatter.usage),1)]))),256))])])}const y=i(x,[["render",B],["__file","command_reference.html.vue"]]);export{y as default};
