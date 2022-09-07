import{_ as s,o as n,c as o,a as e,t,d as r,e as c}from"./app.c2a61f71.js";const d={},l={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=r(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; date to-table </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert the date into a structured table.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> to-table
</code></pre></div><p>Convert the date into a structured table.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-table
</code></pre></div><p>Convert a given date into a structured table.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>  <span class="token string">&#39;2020-04-12 22:10:57 +0200&#39;</span> <span class="token operator">|</span> <span class="token function">date</span> to-table
</code></pre></div>`,9);function g(a,_){return n(),o("div",null,[e("h1",l,[p,i,e("code",null,t(a.$frontmatter.title),1)]),e("div",h,t(a.$frontmatter.usage),1),u])}const f=s(d,[["render",g],["__file","date_to-table.html.vue"]]);export{f as default};
