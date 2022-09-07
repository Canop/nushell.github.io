import{_ as t,o as n,c as r,a,t as s,d as o,e as c}from"./app.c2a61f71.js";const p={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str collect (separator)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>separator</code>: optional separator to use when creating string</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create a string from input</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;nu&#39;</span>, <span class="token string">&#39;shell&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> str collect
</code></pre></div><p>Create a string from input with a separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;nu&#39;</span>, <span class="token string">&#39;shell&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> str collect <span class="token string">&#39;-&#39;</span>
</code></pre></div>`,9);function g(e,_){return n(),r("div",null,[a("h1",l,[i,d,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}const f=t(p,[["render",g],["__file","str_collect.html.vue"]]);export{f as default};
