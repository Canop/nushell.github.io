import{_ as r,z as o,A as p,X as a,C as s,D as t,a6 as n}from"./framework.3d018c9f.js";const c={},i={id:"frontmatter-title-for-dataframe",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=n(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; last </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create new dataframe with last rows</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> last <span class="token number">1</span>
</code></pre></div>`,5),u={id:"frontmatter-title-for-expression",tabindex:"-1"},m=a("a",{class:"header-anchor",href:"#frontmatter-title-for-expression","aria-hidden":"true"},"#",-1),f={class:"command-title"},g=n(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; last </code></p><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Creates a last expression from a column</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> col a <span class="token operator">|</span> last
</code></pre></div>`,5),k={id:"frontmatter-title-for-filters",tabindex:"-1"},_=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),b={class:"command-title"},x=n(`<h2 id="signature-2" tabindex="-1"><a class="header-anchor" href="#signature-2" aria-hidden="true">#</a> Signature</h2><p><code>&gt; last (rows)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>rows</code>: starting from the back, the number of rows to return</li></ul><h2 id="examples-2" tabindex="-1"><a class="header-anchor" href="#examples-2" aria-hidden="true">#</a> Examples</h2><p>Get the last 2 items</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1,2</span>,3<span class="token punctuation">]</span> <span class="token operator">|</span> last <span class="token number">2</span>
</code></pre></div><p>Get the last item</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1,2</span>,3<span class="token punctuation">]</span> <span class="token operator">|</span> last
</code></pre></div>`,9);function v(e,w){return o(),p("div",null,[a("h1",i,[l,s(),a("code",null,t(e.$frontmatter.title),1),s(" for dataframe")]),a("div",d,t(e.$frontmatter.dataframe),1),h,a("h1",u,[m,s(),a("code",null,t(e.$frontmatter.title),1),s(" for expression")]),a("div",f,t(e.$frontmatter.expression),1),g,a("h1",k,[_,s(),a("code",null,t(e.$frontmatter.title),1),s(" for filters")]),a("div",b,t(e.$frontmatter.filters),1),x])}const S=r(c,[["render",v],["__file","last.html.vue"]]);export{S as default};
