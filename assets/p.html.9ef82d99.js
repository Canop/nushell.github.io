import{_ as s,o as n,c as o,a as e,t,d as r,e as c}from"./app.c2a61f71.js";const p={},d={id:"frontmatter-title",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=r(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; p </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Make two directories and enter new shells for them, use <code>p</code> to jump to the previous shell</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mkdir</span> foo bar<span class="token punctuation">;</span> enter foo<span class="token punctuation">;</span> enter <span class="token punctuation">..</span>/bar<span class="token punctuation">;</span> p
</code></pre></div><p>Run <code>p</code> several times and note the changes of current directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> p
</code></pre></div>`,7);function _(a,f){return n(),o("div",null,[e("h1",d,[i,l,e("code",null,t(a.$frontmatter.title),1)]),e("div",h,t(a.$frontmatter.usage),1),u])}const m=s(p,[["render",_],["__file","p.html.vue"]]);export{m as default};
