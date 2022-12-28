import{_ as t,z as o,A as p,X as a,C as s,D as e,a6 as c}from"./framework.3d018c9f.js";const r={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; move ...rest --after --before</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the columns to move</li><li><code>--after {string}</code>: the column that will precede the columns moved</li><li><code>--before {string}</code>: the column that will be the next after the columns moved</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Move a column before the first column</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name value index<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>foo a <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>bar b <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>baz c <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> move index <span class="token parameter variable">--before</span> name
</code></pre></div><p>Move multiple columns after the last column and reorder them</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name value index<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>foo a <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>bar b <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>baz c <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> move value name <span class="token parameter variable">--after</span> index
</code></pre></div><p>Move columns of a record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span> name: foo, value: a, index: <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token operator">|</span> move name <span class="token parameter variable">--before</span> index
</code></pre></div>`,11);function m(n,h){return o(),p("div",null,[a("h1",l,[i,s(),a("code",null,e(n.$frontmatter.title),1),s(" for filters")]),a("div",u,e(n.$frontmatter.filters),1),d])}const f=t(r,[["render",m],["__file","move.html.vue"]]);export{f as default};
