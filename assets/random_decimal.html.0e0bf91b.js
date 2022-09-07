import{_ as n,o as t,c as r,a,t as s,d as o,e as d}from"./app.c2a61f71.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=o(),h={style:{"white-space":"pre-wrap"}},m=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; random decimal (range)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>range</code>: Range of values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Generate a default decimal value between 0 and 1</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random decimal
</code></pre></div><p>Generate a random decimal less than or equal to 500</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random decimal <span class="token punctuation">..</span><span class="token number">500</span>
</code></pre></div><p>Generate a random decimal greater than or equal to 100000</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random decimal <span class="token number">100000</span><span class="token punctuation">..</span>
</code></pre></div><p>Generate a random decimal between 1.0 and 1.1</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random decimal <span class="token number">1.0</span><span class="token punctuation">..</span><span class="token number">1.1</span>
</code></pre></div>`,13);function u(e,g){return t(),r("div",null,[a("h1",l,[i,p,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),m])}const b=n(c,[["render",u],["__file","random_decimal.html.vue"]]);export{b as default};
