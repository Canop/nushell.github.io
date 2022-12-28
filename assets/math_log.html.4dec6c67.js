import{_ as n,z as o,A as r,X as a,C as s,D as t,a6 as l}from"./framework.3d018c9f.js";const c={},h={id:"frontmatter-title-for-math",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title-for-math","aria-hidden":"true"},"#",-1),d={class:"command-title"},i=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math log (base)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>base</code>: Base for which the logarithm should be computed</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the logarithm of 100 to the base 10</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">100</span> <span class="token operator">|</span> math log <span class="token number">10</span>
</code></pre></div><p>Get the log2 of a list of values</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">16</span> <span class="token number">8</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> math log <span class="token number">2</span>
</code></pre></div>`,9);function m(e,u){return o(),r("div",null,[a("h1",h,[p,s(),a("code",null,t(e.$frontmatter.title),1),s(" for math")]),a("div",d,t(e.$frontmatter.math),1),i])}const f=n(c,[["render",m],["__file","math_log.html.vue"]]);export{f as default};
