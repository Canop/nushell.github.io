import{_ as n,o as t,c as r,a as e,t as s,d as o,e as i}from"./app.c2a61f71.js";const l={},c={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(),u={style:{"white-space":"pre-wrap"}},h=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; unique --subset --last --maintain-order</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--subset {any}</code>: Subset of column(s) to use to maintain rows (lazy df)</li><li><code>--last</code>: Keeps last unique value. Default keeps first value (lazy df)</li><li><code>--maintain-order</code>: Keep the same order as the original DataFrame (lazy df)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns unique values from a series</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> unique
</code></pre></div><p>Creates a is unique expression from a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> col a <span class="token operator">|</span> unique
</code></pre></div>`,9);function m(a,f){return t(),r("div",null,[e("h1",c,[p,d,e("code",null,s(a.$frontmatter.title),1)]),e("div",u,s(a.$frontmatter.usage),1),h])}const g=n(l,[["render",m],["__file","_unique.html.vue"]]);export{g as default};
