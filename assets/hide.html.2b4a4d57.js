import{_ as n,o as t,c as o,a,t as s,d as i,e as c}from"./app.c2a61f71.js";const p={},r={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=i(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; hide (pattern)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: import pattern</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>Definitions are hidden by priority: First aliases, then custom commands.

This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Hide the alias just defined</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">alias</span> lll <span class="token operator">=</span> <span class="token function">ls</span> -l<span class="token punctuation">;</span> hide lll
</code></pre></div><p>Hide a custom command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def say-hi <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;Hi!&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> hide say-hi
</code></pre></div><p>Hide an environment variable</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env HZ_ENV_ABC <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> hide HZ_ENV_ABC<span class="token punctuation">;</span> <span class="token string">&#39;HZ_ENV_ABC&#39;</span> <span class="token keyword">in</span> <span class="token punctuation">(</span>env<span class="token punctuation">)</span>.name
</code></pre></div>`,13);function m(e,k){return t(),o("div",null,[a("h1",r,[l,d,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}const _=n(p,[["render",m],["__file","hide.html.vue"]]);export{_ as default};
