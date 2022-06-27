import{_ as s,o as t,c as o,a,t as e,d as p,e as r}from"./app.a664c007.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),d={style:{"white-space":"pre-wrap"}},h=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; quantile (quantile)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>quantile</code>: quantile value for quantile operation</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>quantile value from columns in a dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> to-df <span class="token operator">|</span> quantile <span class="token number">0.5</span>
</code></pre></div>`,7);function m(n,k){return t(),o("div",null,[a("h1",l,[i,u,a("code",null,e(n.$frontmatter.title),1)]),a("div",d,e(n.$frontmatter.usage),1),h])}var f=s(c,[["render",m],["__file","_quantile.html.vue"]]);export{f as default};