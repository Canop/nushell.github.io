import{_ as t,r as o,o as r,c as p,a,b as s,d as e,e as l}from"./app.c2a61f71.js";const c={},i=a("h1",{id:"nushell-0-5-0",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#nushell-0-5-0","aria-hidden":"true"},"#"),e(" Nushell 0.5.0")],-1),h=a("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),d=a("p",null,"Today, we're happy to announce the 0.5.0 release for Nu. We've got lots of new features, including some long-requested ones, in this release.",-1),u=a("h1",{id:"where-to-get-it",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),g=e("Nu 0.5.0 is available as "),m={href:"https://github.com/nushell/nushell/releases/tag/0_5_0",target:"_blank",rel:"noopener noreferrer"},b=e("pre-built binaries"),k=e(" or from "),f={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},v=e("crates.io"),_=e(". If you have Rust installed you can install it using "),w=a("code",null,"cargo +beta install nu",-1),y=e(" (or if you want all the features "),x=a("code",null,"cargo +beta install nu --all-features",-1),N=e(")."),j=l(`<h1 id="nu-as-a-login-shell-jonathandturner" tabindex="-1"><a class="header-anchor" href="#nu-as-a-login-shell-jonathandturner" aria-hidden="true">#</a> Nu as a login shell (jonathandturner)</h1><p>One of the key features that landed in 0.5.0 is set of new capabilities that work together to allow you to use Nu as a login shell, completely independent of bash or other hosting shells. For this, we&#39;ve built in support for querying and updating the environment variables and the path.</p><p>To get started, you&#39;ll need to first copy the environment you&#39;re using into the config. Luckily, we&#39;ve also made some improvements there:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> config <span class="token parameter variable">--set</span> <span class="token punctuation">[</span>path <span class="token variable">$nu</span>:path<span class="token punctuation">]</span>
<span class="token operator">&gt;</span> config <span class="token parameter variable">--set</span> <span class="token punctuation">[</span>env <span class="token variable">$nu</span>:env<span class="token punctuation">]</span>
</code></pre></div><p>Version 0.7.2 and later (added: Dec 24, 2019) :</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> config <span class="token builtin class-name">set</span> <span class="token punctuation">[</span>path <span class="token variable">$nu</span>.path<span class="token punctuation">]</span>
<span class="token operator">&gt;</span> config <span class="token builtin class-name">set</span> <span class="token punctuation">[</span>env <span class="token variable">$nu</span>.env<span class="token punctuation">]</span>
</code></pre></div><p>Once these values are set, you&#39;ll be able to use Nu as your login shell.</p><h2 id="new-variables" tabindex="-1"><a class="header-anchor" href="#new-variables" aria-hidden="true">#</a> New variables</h2><p>As you saw above, we&#39;ve added a few new built-in variables. These will let you know what the current values that Nu can see are for your environment, path, and the config itself.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$nu</span>:env
<span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$nu</span>:path
<span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$nu</span>:config
</code></pre></div><p>Version 0.7.2 and later:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$nu</span>.env
<span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$nu</span>.path
<span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$nu</span>.config
</code></pre></div><h2 id="adding-paths-to-your-path" tabindex="-1"><a class="header-anchor" href="#adding-paths-to-your-path" aria-hidden="true">#</a> Adding paths to your PATH</h2><p>One of the first things you&#39;ll notice is that the new $nu:path is structured. If you run the echo above, you might see something like this:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$nu</span>:path
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 &lt;value&gt;</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 /usr/local/sbin
 <span class="token number">1</span> \u2502 /usr/local/bin
 <span class="token number">2</span> \u2502 /usr/sbin
 <span class="token number">3</span> \u2502 /usr/bin
 <span class="token number">4</span> \u2502 /sbin
 <span class="token number">5</span> \u2502 /bin
 <span class="token number">6</span> \u2502 /usr/games
 <span class="token number">7</span> \u2502 /usr/local/games
 <span class="token number">8</span> \u2502 /snap/bin
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>Version 0.7.2 and later:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$nu</span>.path
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 &lt;value&gt;</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 /usr/local/sbin
 <span class="token number">1</span> \u2502 /usr/local/bin
 <span class="token number">2</span> \u2502 /usr/sbin
 <span class="token number">3</span> \u2502 /usr/bin
 <span class="token number">4</span> \u2502 /sbin
 <span class="token number">5</span> \u2502 /bin
 <span class="token number">6</span> \u2502 /usr/games
 <span class="token number">7</span> \u2502 /usr/local/games
 <span class="token number">8</span> \u2502 /snap/bin
\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div><p>We&#39;ve added two new commands: <code>prepend</code> for adding items to the start of a table and <code>append</code> for adding items to the end of a table. With these commands, we can now query out the path, update it, and save it back.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$nu</span>:path <span class="token operator">|</span> prepend <span class="token string">&quot;/my/new/directory&quot;</span> <span class="token operator">|</span> config <span class="token parameter variable">--set_into</span> path
</code></pre></div><p>Version 0.7.2 and later:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$nu</span>.path <span class="token operator">|</span> prepend <span class="token string">&quot;/my/new/directory&quot;</span> <span class="token operator">|</span> config set_into path
</code></pre></div><h2 id="adding-variables-to-your-environment" tabindex="-1"><a class="header-anchor" href="#adding-variables-to-your-environment" aria-hidden="true">#</a> Adding variables to your environment</h2><p>You can use a similar set of steps to add new variables, or change existing variables, in your environment.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$nu</span>:env <span class="token operator">|</span> insert GREETING hello_world <span class="token operator">|</span> config <span class="token parameter variable">--set_into</span> <span class="token function">env</span>
</code></pre></div><p>Version 0.7.2 and later:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$nu</span>.env <span class="token operator">|</span> insert GREETING hello_world <span class="token operator">|</span> config set_into <span class="token function">env</span>
</code></pre></div><p><em>Note: the previous <code>add</code> command of previous releases has been renamed <code>insert</code> to remove confusion with mathematical functions.</em></p><h1 id="on-going-improvements" tabindex="-1"><a class="header-anchor" href="#on-going-improvements" aria-hidden="true">#</a> On-going improvements</h1><p>We&#39;re continuing to improve the commands we currently ship as part of Nu. Here are a few you might find helpful:</p><h2 id="substrings-flare576" tabindex="-1"><a class="header-anchor" href="#substrings-flare576" aria-hidden="true">#</a> Substrings (Flare576)</h2><p>The <code>str</code> command now supports being able to retrieve a substring from the strings given, so you could return, for example, the first 5 characters and stop after that.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get name
\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment">#  \u2502 &lt;value&gt;</span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  <span class="token number">0</span> \u2502 target
  <span class="token number">1</span> \u2502 CODE_OF_CONDUCT.md
  <span class="token number">2</span> \u2502 .cargo
  <span class="token number">3</span> \u2502 src
  <span class="token number">4</span> \u2502 features.toml
  <span class="token number">5</span> \u2502 rustfmt.toml
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get name <span class="token operator">|</span> str <span class="token parameter variable">--substring</span> <span class="token string">&quot;0,3&quot;</span>
\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment">#  \u2502 &lt;value&gt;</span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  <span class="token number">0</span> \u2502 <span class="token function">tar</span>
  <span class="token number">1</span> \u2502 COD
  <span class="token number">2</span> \u2502 .ca
  <span class="token number">3</span> \u2502 src
  <span class="token number">4</span> \u2502 fea
  <span class="token number">5</span> \u2502 rus
</code></pre></div><h2 id="recycling-jdvr" tabindex="-1"><a class="header-anchor" href="#recycling-jdvr" aria-hidden="true">#</a> Recycling (jdvr)</h2><p>Ever wish you could <code>rm</code> things, but not forever? You can now tell <code>rm</code> to send items to your platform&#39;s recycle bin rather than deleting them forever. As with our other commands, this works across all the platforms that Nu supports.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">rm</span> myfile.txt <span class="token parameter variable">--trash</span>
</code></pre></div><h2 id="parameter-descriptions-jonathandturner" tabindex="-1"><a class="header-anchor" href="#parameter-descriptions-jonathandturner" aria-hidden="true">#</a> Parameter descriptions (jonathandturner)</h2><p>We&#39;re also continuing to improve the built-in help system. New in this release are descriptions for the flags and parameters that the command uses. For example, here&#39;s a look at what the help for <code>rm</code> now looks like:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> <span class="token function">rm</span>
Remove a <span class="token function">file</span>

Usage:
  <span class="token operator">&gt;</span> <span class="token function">rm</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>

parameters:
  <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span> the <span class="token function">file</span> path to remove

flags:
  --trash: use the recycle bin on the platform instead of permanently deleting
  --recursive: delete subdirectories recursively
</code></pre></div><h1 id="new-commands" tabindex="-1"><a class="header-anchor" href="#new-commands" aria-hidden="true">#</a> New commands</h1><p>In addition to the new <code>append</code> and <code>prepend</code> we mentioned earlier, we&#39;ve added a few new commands to Nu.</p><h2 id="average-notryanb" tabindex="-1"><a class="header-anchor" href="#average-notryanb" aria-hidden="true">#</a> Average (notryanb)</h2><p>Growing our set of mathematics functions for working with numbers, we now have an <code>average</code> command which will take the average of values given to it.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get size <span class="token operator">|</span> average
</code></pre></div><h2 id="read-jonathandturner" tabindex="-1"><a class="header-anchor" href="#read-jonathandturner" aria-hidden="true">#</a> Read (jonathandturner)</h2><p>We&#39;ve also introduced a new command to load in strings as tables. This new <code>read</code> command will take a pattern that describes the columns, their names, and where they are in each row of the string.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> .editorconfig
root <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token punctuation">[</span>*<span class="token punctuation">]</span>
indent_style <span class="token operator">=</span> space
indent_size <span class="token operator">=</span> <span class="token number">4</span>
charset <span class="token operator">=</span> utf-8
trim_trailing_whitespace <span class="token operator">=</span> <span class="token boolean">true</span>
insert_final_newline <span class="token operator">=</span> <span class="token boolean">false</span>
end_of_line <span class="token operator">=</span> lf
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> .editorconfig <span class="token operator">|</span> <span class="token builtin class-name">read</span> <span class="token string">&quot;{variable} = {value}&quot;</span>
\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 <span class="token comment"># \u2502 variable                 \u2502 value</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 root                     \u2502 <span class="token boolean">true</span>
 <span class="token number">1</span> \u2502 indent_style             \u2502 space
 <span class="token number">2</span> \u2502 indent_size              \u2502 <span class="token number">4</span>
 <span class="token number">3</span> \u2502 charset                  \u2502 utf-8
 <span class="token number">4</span> \u2502 trim_trailing_whitespace \u2502 <span class="token boolean">true</span>
 <span class="token number">5</span> \u2502 insert_final_newline     \u2502 <span class="token boolean">false</span>
 <span class="token number">6</span> \u2502 end_of_line              \u2502 lf
</code></pre></div><h1 id="bugfixes-jonathandturner-jesterornot-thegedge-andrasio-wycats-notryanb-detegr-t-hart" tabindex="-1"><a class="header-anchor" href="#bugfixes-jonathandturner-jesterornot-thegedge-andrasio-wycats-notryanb-detegr-t-hart" aria-hidden="true">#</a> Bugfixes (jonathandturner, JesterOrNot, thegedge, andrasio, wycats, notryanb, Detegr, t-hart)</h1><p>As always, we&#39;ve had lots of bugfixes. A <em>huge</em> &quot;thank you!&quot; to folks who reported issues, fixed issues, and just generally shared their experience with the shell. It&#39;s much appreciated and helps to continue making Nu that much better.</p><h1 id="survey" tabindex="-1"><a class="header-anchor" href="#survey" aria-hidden="true">#</a> Survey</h1>`,51),$=e("If you haven't already taken it, we'd love to hear your feedback in a quick (roughly 3 question) "),q={href:"https://t.co/nujSjnI0dr?amp=1",target:"_blank",rel:"noopener noreferrer"},T=e("survey"),I=e("."),E=a("h1",{id:"looking-forward",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#looking-forward","aria-hidden":"true"},"#"),e(" Looking forward")],-1),O=a("p",null,[e("There are a bunch of areas we're currently working on to make Nu more stable and feature complete. Until this work is finished, please consider Nu to be somewhere in the "),a("em",null,"pre-alpha"),e(" to "),a("em",null,"alpha"),e(" quality level.")],-1),V=a("p",null,"That said, we're excited to merge this work and continue to take steps towards a more full-featured shell. Soon to be coming will be Nu working on stable Rust(!!), some improvements in the Nu internal engine which will make it possible to have better streaming and cleaner commands, and features like aliases.",-1);function A(R,W){const n=o("ExternalLinkIcon");return r(),p("div",null,[i,h,d,u,a("p",null,[g,a("a",m,[b,s(n)]),k,a("a",f,[v,s(n)]),_,w,y,x,N]),j,a("p",null,[$,a("a",q,[T,s(n)]),I]),E,O,V])}const D=t(c,[["render",A],["__file","2019-11-05-nushell-0_5_0.html.vue"]]);export{D as default};
