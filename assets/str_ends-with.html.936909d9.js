import{_ as s,o as r,c as n,a as e,t,d as o,e as i}from"./app.c2a61f71.js";const c={},d={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=o(),p={style:{"white-space":"pre-wrap"}},_=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str ends-with (pattern) ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: the pattern to match</li><li><code>...rest</code>: optionally matches suffix of text by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Checks if string ends with &#39;.rb&#39; pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str ends-with <span class="token string">&#39;.rb&#39;</span>
</code></pre></div><p>Checks if string ends with &#39;.txt&#39; pattern</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str ends-with <span class="token string">&#39;.txt&#39;</span>
</code></pre></div>`,9);function g(a,u){return r(),n("div",null,[e("h1",d,[h,l,e("code",null,t(a.$frontmatter.title),1)]),e("div",p,t(a.$frontmatter.usage),1),_])}const f=s(c,[["render",g],["__file","str_ends-with.html.vue"]]);export{f as default};
