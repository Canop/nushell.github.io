import{_ as t,z as o,A as i,X as a,C as s,D as n,a6 as r}from"./framework.3d018c9f.js";const c={},l={id:"frontmatter-title-for-core",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),p={class:"command-title"},h=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; is-admin </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Echo &#39;iamroot&#39; if nushell is running with admin/root privileges, and &#39;iamnotroot&#39; if not.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">if</span> is-admin <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;iamroot&quot;</span> <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;iamnotroot&quot;</span> <span class="token punctuation">}</span>
</code></pre></div>`,5);function u(e,m){return o(),i("div",null,[a("h1",l,[d,s(),a("code",null,n(e.$frontmatter.title),1),s(" for core")]),a("div",p,n(e.$frontmatter.core),1),h])}const _=t(c,[["render",u],["__file","is-admin.html.vue"]]);export{_ as default};