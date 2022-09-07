import{_ as t,o as e,c as o,a,t as s,d as c,e as p}from"./app.c2a61f71.js";const r={},i={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=c(),d={style:{"white-space":"pre-wrap"}},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; concat-str (separator) (concat expressions)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>separator</code>: Separator used during the concatenation</li><li><code>concat expressions</code>: Expression(s) that define the string concatenation</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Creates a concat string expression</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token function">df</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b c<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>one two <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>three four <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$df</span> <span class="token operator">|</span> with-column <span class="token punctuation">((</span>concat-str <span class="token string">&quot;-&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>col a<span class="token punctuation">)</span> <span class="token punctuation">(</span>col b<span class="token punctuation">)</span> <span class="token punctuation">((</span>col c<span class="token punctuation">)</span> * <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">|</span> as concat<span class="token punctuation">)</span>
</code></pre></div>`,7);function k(n,f){return e(),o("div",null,[a("h1",i,[l,u,a("code",null,s(n.$frontmatter.title),1)]),a("div",d,s(n.$frontmatter.usage),1),h])}const _=t(r,[["render",k],["__file","concat-str.html.vue"]]);export{_ as default};
