import{_ as t,o as n,c as o,a,t as s,d as r,e as c}from"./app.9dc4563a.js";const l={},i={id:"frontmatter-title",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; split column (separator) ...rest --collapse-empty</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>separator</code>: the character or string that denotes what separates columns</li><li><code>...rest</code>: column names to give the new columns</li><li><code>--collapse-empty</code>: remove empty columns</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Split a string into columns by the specified separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;a--b--c&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&#39;--&#39;</span>
</code></pre></div><p>Split a string into columns of char and remove the empty columns</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;abc&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> -c <span class="token string">&#39;&#39;</span>
</code></pre></div>`,9);function m(e,g){return n(),o("div",null,[a("h1",i,[p,d,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}var f=t(l,[["render",m],["__file","split_column.html.vue"]]);export{f as default};