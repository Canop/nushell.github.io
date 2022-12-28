import{_ as t,z as p,A as o,X as a,C as n,D as e,a6 as c}from"./framework.3d018c9f.js";const r={},l={id:"frontmatter-title-for-default",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-default","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; reduce (closure) --fold --numbered</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>closure</code>: reducing function</li><li><code>--fold {any}</code>: reduce with initial value</li><li><code>--numbered</code>: iterate with an index (deprecated; use a 3-parameter closure instead)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Sum values of a list (same as &#39;math sum&#39;)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token punctuation">]</span> <span class="token operator">|</span> reduce <span class="token punctuation">{</span><span class="token operator">|</span>it, acc<span class="token operator">|</span> <span class="token variable">$it</span> + <span class="token variable">$acc</span> <span class="token punctuation">}</span>
</code></pre></div><p>Sum values of a list, plus their indexes</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span> <span class="token number">8</span> <span class="token number">7</span> <span class="token number">6</span> <span class="token punctuation">]</span> <span class="token operator">|</span> reduce <span class="token punctuation">{</span><span class="token operator">|</span>it, acc, ind<span class="token operator">|</span> <span class="token variable">$acc</span> + <span class="token variable">$it</span> + <span class="token variable">$ind</span> <span class="token punctuation">}</span>
</code></pre></div><p>Sum values with a starting value (fold)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token punctuation">]</span> <span class="token operator">|</span> reduce <span class="token parameter variable">-f</span> <span class="token number">10</span> <span class="token punctuation">{</span><span class="token operator">|</span>it, acc<span class="token operator">|</span> <span class="token variable">$acc</span> + <span class="token variable">$it</span> <span class="token punctuation">}</span>
</code></pre></div><p>Replace selected characters in a string with &#39;X&#39;</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span> i o t <span class="token punctuation">]</span> <span class="token operator">|</span> reduce <span class="token parameter variable">-f</span> <span class="token string">&quot;Arthur, King of the Britons&quot;</span> <span class="token punctuation">{</span><span class="token operator">|</span>it, acc<span class="token operator">|</span> <span class="token variable">$acc</span> <span class="token operator">|</span> str replace <span class="token parameter variable">-a</span> <span class="token variable">$it</span> <span class="token string">&quot;X&quot;</span> <span class="token punctuation">}</span>
</code></pre></div><p>Add ascending numbers to each of the filenames, and join with semicolons.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;foo.gz&#39;</span>, <span class="token string">&#39;bar.gz&#39;</span>, <span class="token string">&#39;baz.gz&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> reduce <span class="token parameter variable">-f</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">{</span><span class="token operator">|</span>str all ind<span class="token operator">|</span> $<span class="token string">&quot;(<span class="token variable">$all</span>)(if <span class="token variable">$ind</span> != 0 {&#39;; &#39;})(<span class="token variable">$ind</span> + 1)-(<span class="token variable">$str</span>)&quot;</span> <span class="token punctuation">}</span>
</code></pre></div>`,15);function k(s,h){return p(),o("div",null,[a("h1",l,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for default")]),a("div",u,e(s.$frontmatter.default),1),d])}const m=t(r,[["render",k],["__file","reduce.html.vue"]]);export{m as default};
