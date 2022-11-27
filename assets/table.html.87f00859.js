import{_ as t,o,c as p,a,t as s,d as e,e as c}from"./app.73604c08.js";const l={},r={id:"frontmatter-title-for-viewers",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-viewers","aria-hidden":"true"},"#",-1),u=e(),d=e(" for viewers"),h={class:"command-title"},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; table --start-number --list --width --expand --expand-deep --flatten --flatten-separator --collapse</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--start-number {int}</code>: row number to start viewing from</li><li><code>--list</code>: list available table modes/themes</li><li><code>--width {int}</code>: number of terminal columns wide (not output columns)</li><li><code>--expand</code>: expand the table structure in a light mode</li><li><code>--expand-deep {int}</code>: an expand limit of recursion which will take place</li><li><code>--flatten</code>: Flatten simple arrays</li><li><code>--flatten-separator {string}</code>: sets a seperator when &#39;flatten&#39; used</li><li><code>--collapse</code>: expand the table structure in colapse mode. Be aware collapse mode currently doesn&#39;t support width controll</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>If the table contains a column called &#39;index&#39;, this column is used as the table index instead of the usual continuous index
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>List the files in current directory, with indexes starting from 1.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> table <span class="token parameter variable">-n</span> <span class="token number">1</span>
</code></pre></div><p>Render data in table view</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> table
</code></pre></div><p>Render data in table view (expanded)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> table <span class="token parameter variable">--expand</span>
</code></pre></div><p>Render data in table view (collapsed)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> table <span class="token parameter variable">--collapse</span>
</code></pre></div>`,15);function b(n,m){return o(),p("div",null,[a("h1",r,[i,u,a("code",null,s(n.$frontmatter.title),1),d]),a("div",h,s(n.$frontmatter.viewers),1),k])}const f=t(l,[["render",b],["__file","table.html.vue"]]);export{f as default};