import{_ as t,o as n,c as o,a,t as s,d as r,e as p}from"./app.c2a61f71.js";const l={},c={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=r(),h={style:{"white-space":"pre-wrap"}},g=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from csv --separator --noheaders --no-infer --trim</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--separator {string}</code>: a character to separate columns, defaults to &#39;,&#39;</li><li><code>--noheaders</code>: don&#39;t treat the first row as column names</li><li><code>--no-infer</code>: no field type inferencing</li><li><code>--trim {string}</code>: drop leading and trailing whitespaces around headers names and/or field values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert comma-separated data to a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv
</code></pre></div><p>Convert comma-separated data to a table, ignoring headers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv <span class="token parameter variable">--noheaders</span>
</code></pre></div><p>Convert comma-separated data to a table, ignoring headers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv <span class="token parameter variable">-n</span>
</code></pre></div><p>Convert semicolon-separated data to a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv <span class="token parameter variable">--separator</span> <span class="token string">&#39;;&#39;</span>
</code></pre></div><p>Convert semicolon-separated data to a table, dropping all possible whitespaces around header names and field values</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv <span class="token parameter variable">--trim</span> all
</code></pre></div><p>Convert semicolon-separated data to a table, dropping all possible whitespaces around header names</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv <span class="token parameter variable">--trim</span> headers
</code></pre></div><p>Convert semicolon-separated data to a table, dropping all possible whitespaces around field values</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv <span class="token parameter variable">--trim</span> fields
</code></pre></div>`,19);function m(e,u){return n(),o("div",null,[a("h1",c,[d,i,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),g])}const f=t(l,[["render",m],["__file","from_csv.html.vue"]]);export{f as default};
