import{_ as t,z as o,A as r,X as a,C as s,D as n,a6 as c}from"./framework.3d018c9f.js";const p={},l={id:"frontmatter-title-for-core",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; for (var_name) (range) (block) --numbered</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>var_name</code>: name of the looping variable</li><li><code>range</code>: range of the loop</li><li><code>block</code>: the block to run</li><li><code>--numbered</code>: returned a numbered item ($it.index and $it.item)</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Echo the square of each integer</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">for</span> <span class="token for-or-select variable">x</span> <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token variable">$x</span> * <span class="token variable">$x</span> <span class="token punctuation">}</span>
</code></pre></div><p>Work with elements of a range</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">for</span> <span class="token variable">$x</span> <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">..</span><span class="token number">3</span> <span class="token punctuation">{</span> <span class="token variable">$x</span> <span class="token punctuation">}</span>
</code></pre></div><p>Number each item and echo a message</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">for</span> <span class="token variable">$it</span> <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token string">&#39;bob&#39;</span> <span class="token string">&#39;fred&#39;</span><span class="token punctuation">]</span> <span class="token parameter variable">--numbered</span> <span class="token punctuation">{</span> $<span class="token string">&quot;(<span class="token variable">$it</span>.index) is (<span class="token variable">$it</span>.item)&quot;</span> <span class="token punctuation">}</span>
</code></pre></div>`,13);function h(e,k){return o(),r("div",null,[a("h1",l,[i,s(),a("code",null,n(e.$frontmatter.title),1),s(" for core")]),a("div",d,n(e.$frontmatter.core),1),u])}const b=t(p,[["render",h],["__file","for.html.vue"]]);export{b as default};