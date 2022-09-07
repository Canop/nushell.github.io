import{_ as t,o as n,c as r,a,t as s,d as o,e as c}from"./app.c2a61f71.js";const d={},p={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=o(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from ods --sheets</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--sheets {list&lt;string&gt;}</code>: Only convert specified sheets</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert binary .ods data to a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> <span class="token parameter variable">--raw</span> test.ods <span class="token operator">|</span> from ods
</code></pre></div><p>Convert binary .ods data to a table, specifying the tables</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> <span class="token parameter variable">--raw</span> test.ods <span class="token operator">|</span> from ods <span class="token parameter variable">-s</span> <span class="token punctuation">[</span>Spreadsheet1<span class="token punctuation">]</span>
</code></pre></div>`,9);function f(e,m){return n(),r("div",null,[a("h1",p,[i,l,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}const g=t(d,[["render",f],["__file","from_ods.html.vue"]]);export{g as default};
