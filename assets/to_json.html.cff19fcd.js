import{_ as s,o as n,c as o,a,t,d as r,e as p}from"./app.c2a61f71.js";const i={},c={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),h={style:{"white-space":"pre-wrap"}},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; to json --raw --indent --tabs</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--raw</code>: remove all of the whitespace</li><li><code>--indent {number}</code>: specify indentation width</li><li><code>--tabs {number}</code>: specify indentation tab quantity</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Outputs a JSON string, with default indentation, representing the contents of this table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>a b c<span class="token punctuation">]</span> <span class="token operator">|</span> to json
</code></pre></div><p>Outputs a JSON string, with 4-space indentation, representing the contents of this table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>Joe Bob Sam<span class="token punctuation">]</span> <span class="token operator">|</span> to json <span class="token parameter variable">-i</span> <span class="token number">4</span>
</code></pre></div><p>Outputs an unformatted JSON string representing the contents of this table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> to json <span class="token parameter variable">-r</span>
</code></pre></div>`,11);function g(e,m){return n(),o("div",null,[a("h1",c,[l,d,a("code",null,t(e.$frontmatter.title),1)]),a("div",h,t(e.$frontmatter.usage),1),u])}const f=s(i,[["render",g],["__file","to_json.html.vue"]]);export{f as default};
