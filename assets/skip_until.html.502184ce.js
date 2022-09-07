import{_ as s,o as n,c as r,a as e,t,d as i,e as o}from"./app.c2a61f71.js";const c={},p={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=i(),h={style:{"white-space":"pre-wrap"}},u=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; skip until (predicate)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>predicate</code>: the predicate that skipped element must not match</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Skip until the element is positive</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>-2 <span class="token number">0</span> <span class="token number">2</span> -1<span class="token punctuation">]</span> <span class="token operator">|</span> skip <span class="token keyword">until</span> <span class="token variable">$it</span> <span class="token operator">&gt;</span> <span class="token number">0</span>
</code></pre></div>`,7);function m(a,_){return n(),r("div",null,[e("h1",p,[l,d,e("code",null,t(a.$frontmatter.title),1)]),e("div",h,t(a.$frontmatter.usage),1),u])}const f=s(c,[["render",m],["__file","skip_until.html.vue"]]);export{f as default};
