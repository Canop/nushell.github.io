import{_ as n,z as o,A as r,X as a,C as s,D as t,a6 as p}from"./framework.3d018c9f.js";const l={},c={id:"frontmatter-title-for-formats",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),i={class:"command-title"},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from csv --separator --noheaders --no-infer --trim</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--separator {string}</code>: a character to separate columns, defaults to &#39;,&#39;</li><li><code>--noheaders</code>: don&#39;t treat the first row as column names</li><li><code>--no-infer</code>: no field type inferencing</li><li><code>--trim {string}</code>: drop leading and trailing whitespaces around headers names and/or field values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert comma-separated data to a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv
</code></pre></div><p>Convert comma-separated data to a table, ignoring headers</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv <span class="token parameter variable">--noheaders</span>
</code></pre></div><p>Convert comma-separated data to a table, ignoring headers</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv <span class="token parameter variable">-n</span>
</code></pre></div><p>Convert semicolon-separated data to a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv <span class="token parameter variable">--separator</span> <span class="token string">&#39;;&#39;</span>
</code></pre></div><p>Convert semicolon-separated data to a table, dropping all possible whitespaces around header names and field values</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv <span class="token parameter variable">--trim</span> all
</code></pre></div><p>Convert semicolon-separated data to a table, dropping all possible whitespaces around header names</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv <span class="token parameter variable">--trim</span> headers
</code></pre></div><p>Convert semicolon-separated data to a table, dropping all possible whitespaces around field values</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv <span class="token parameter variable">--trim</span> fields
</code></pre></div>`,19);function m(e,g){return o(),r("div",null,[a("h1",c,[d,s(),a("code",null,t(e.$frontmatter.title),1),s(" for formats")]),a("div",i,t(e.$frontmatter.formats),1),h])}const u=n(l,[["render",m],["__file","from_csv.html.vue"]]);export{u as default};