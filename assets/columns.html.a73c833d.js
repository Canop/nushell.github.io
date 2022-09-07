import{_ as t,o as e,c as o,a,t as n,d as p,e as c}from"./app.c2a61f71.js";const l={},r={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=p(),d={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; columns </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the columns from the table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name,age,grade<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>bill,20,a<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> columns
</code></pre></div><p>Get the first column from the table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name,age,grade<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>bill,20,a<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> columns <span class="token operator">|</span> first
</code></pre></div><p>Get the second column from the table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name,age,grade<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>bill,20,a<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> columns <span class="token operator">|</span> <span class="token keyword">select</span> <span class="token number">1</span>
</code></pre></div>`,9);function k(s,m){return e(),o("div",null,[a("h1",r,[u,i,a("code",null,n(s.$frontmatter.title),1)]),a("div",d,n(s.$frontmatter.usage),1),h])}const _=t(l,[["render",k],["__file","columns.html.vue"]]);export{_ as default};
