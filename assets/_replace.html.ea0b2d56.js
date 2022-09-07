import{_ as s,o as r,c as n,a as e,t,d as c,e as o}from"./app.c2a61f71.js";const i={},p={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),h={style:{"white-space":"pre-wrap"}},u=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; replace --pattern --replace</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--pattern {string}</code>: Regex pattern to be matched</li><li><code>--replace {string}</code>: replacing string</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Replaces string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>abc abc abc<span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> replace <span class="token parameter variable">-p</span> ab <span class="token parameter variable">-r</span> AB
</code></pre></div>`,7);function _(a,m){return r(),n("div",null,[e("h1",p,[l,d,e("code",null,t(a.$frontmatter.title),1)]),e("div",h,t(a.$frontmatter.usage),1),u])}const g=s(i,[["render",_],["__file","_replace.html.vue"]]);export{g as default};
