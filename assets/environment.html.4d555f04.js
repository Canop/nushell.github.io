import{_ as d,r as i,o as r,c,a as e,b as t,w as a,d as n,e as s}from"./app.c2a61f71.js";const h={},u=e("h1",{id:"environment",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#environment","aria-hidden":"true"},"#"),n(" Environment")],-1),v=e("p",null,"A common task in a shell is to control the environment that external applications will use. This is often done automatically, as the environment is packaged up and given to the external application as it launches. Sometimes, though, we want to have more precise control over what environment variables an application sees.",-1),_=n("You can see the current environment variables using the "),m=e("code",null,"env",-1),g=n(" command:"),p=s(`<div class="language-text ext-text"><pre class="language-text"><code>   #           name                 type                value                 raw
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  16   DISPLAY              string               :0                   :0
  17   EDITOR               string               nvim                 nvim
  28   LANG                 string               en_US.UTF-8          en_US.UTF-8
  35   PATH                 list&lt;unknown&gt;        [list 16 items]      /path1:/path2:/...
  36   PROMPT_COMMAND       block                &lt;Block 197&gt;
</code></pre></div><p>In Nushell, environment variables can be any value and have any type (see the <code>type</code> column). The actual value of the env. variable used within Nushell is under the <code>value</code> column. You can query the value directly using the <code>$env</code> variable, for example, <code>$env.PATH | length</code>. The last <code>raw</code> column shows the actual value that will be sent to external applications (see <a href="#environment-variable-conversions">Environment variable conversions</a> for details).</p>`,2),f=n("The environment is initially created from the Nu "),b=n("configuration file"),x=n(" and from the environment that Nu is run inside of."),O=e("h2",{id:"setting-environment-variables",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#setting-environment-variables","aria-hidden":"true"},"#"),n(" Setting environment variables")],-1),w=e("p",null,"There are several ways to set an environment variable:",-1),y={id:"let-env",tabindex:"-1"},N=e("a",{class:"header-anchor",href:"#let-env","aria-hidden":"true"},"#",-1),k=n(),A=e("code",null,"let-env",-1),F=s(`<p>Using the <code>let-env</code> command is the most straightforward method</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let-env FOO = &#39;BAR&#39;
</code></pre></div><p>&#39;let-env&#39; is similar to the <strong>export</strong> command in bash.</p><p>So if you want to extend the <code>PATH</code> variable for example, you could do that as follows.</p><div class="language-text ext-text"><pre class="language-text"><code>let-env PATH = ($env.PATH | prepend &#39;/path/you/want/to/add&#39;)
</code></pre></div><p>Here we&#39;ve prepended our folder to the existing folders in the PATH, so it will have the highest priority. If you want to give it the lowest priority instead, you can use the <code>append</code> command.</p>`,6),R={id:"load-env",tabindex:"-1"},S=e("a",{class:"header-anchor",href:"#load-env","aria-hidden":"true"},"#",-1),B=n(),E=e("code",null,"load-env",-1),T=e("p",null,[n("If you have more than one environment variable you'd like to set, you can use "),e("code",null,"load-env"),n(" to create a table of name/value pairs and load multiple variables at the same time:")],-1),I=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> load-env { "BOB": "FOO", "JAY": "BAR" }
`)])],-1),V=e("h3",{id:"one-shot-environment-variables",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#one-shot-environment-variables","aria-hidden":"true"},"#"),n(" One-shot environment variables")],-1),P=n("These are defined to be active only temporarily for a duration of executing a code block. See "),$=n("Single-use environment variables"),C=n(" for details."),H={id:"calling-a-command-defined-with-def-env",tabindex:"-1"},Y=e("a",{class:"header-anchor",href:"#calling-a-command-defined-with-def-env","aria-hidden":"true"},"#",-1),q=n(" Calling a command defined with "),M=e("code",null,"def-env",-1),D=n("See "),L=n("Defining environment from custom commands"),U=n(" for details."),W=e("h3",{id:"using-module-s-exports",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-module-s-exports","aria-hidden":"true"},"#"),n(" Using module's exports")],-1),Z=n("See "),G=n("Modules"),J=n(" for details."),j=s(`<h2 id="reading-environment-variables" tabindex="-1"><a class="header-anchor" href="#reading-environment-variables" aria-hidden="true">#</a> Reading environment variables</h2><p>Individual environment variables are fields of a record that is stored in the <code>$env</code> variable and can be read with <code>$env.VARIABLE</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; $env.FOO
BAR
</code></pre></div><h2 id="scoping" tabindex="-1"><a class="header-anchor" href="#scoping" aria-hidden="true">#</a> Scoping</h2><p>When you set an environment variable, it will be available only in the current scope (the block you&#39;re in and any block inside of it).</p><p>Here is a small example to demonstrate the environment scoping:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let-env FOO = &quot;BAR&quot;
&gt; do {
    let-env FOO = &quot;BAZ&quot;
    $env.FOO == &quot;BAZ&quot;
}
true
&gt; $env.FOO == &quot;BAR&quot;
true
</code></pre></div><h2 id="changing-directory" tabindex="-1"><a class="header-anchor" href="#changing-directory" aria-hidden="true">#</a> Changing directory</h2>`,8),z=n("Common task in a shell is to change directory with the "),K=e("code",null,"cd",-1),Q=n(" command. In Nushell, calling "),X=e("code",null,"cd",-1),ee=n(" is equivalent to setting the "),ne=e("code",null,"PWD",-1),te=n(" environment variable. Therefore, it follows the same rules as other environment variables (for example, scoping)."),oe=e("h2",{id:"single-use-environment-variables",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#single-use-environment-variables","aria-hidden":"true"},"#"),n(" Single-use environment variables")],-1),ae=e("p",null,"A common shorthand to set an environment variable once is available, inspired by Bash and others:",-1),se=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> FOO=BAR echo $env.FOO
BAR
`)])],-1),ie=n("You can also use "),le=e("code",null,"with-env",-1),de=n(" to do the same thing more explicitly:"),re=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> with-env { FOO: BAR } { echo $env.FOO }
BAR
`)])],-1),ce=n("The "),he=e("code",null,"with-env",-1),ue=n(' command will temporarily set the environment variable to the value given (here: the variable "FOO" is given the value "BAR"). Once this is done, the '),ve=n("block"),_e=n(" will run with this new environment variable set."),me=e("h2",{id:"permanent-environment-variables",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#permanent-environment-variables","aria-hidden":"true"},"#"),n(" Permanent environment variables")],-1),ge=n("You can also set environment variables at startup so they are available for the duration of Nushell running. To do this, set an environment variable inside "),pe=n("the Nu configuration file"),fe=n(". For example:"),be=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`# In config.nu
let-env FOO = 'BAR'
`)])],-1),xe=e("h2",{id:"defining-environment-from-custom-commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defining-environment-from-custom-commands","aria-hidden":"true"},"#"),n(" Defining environment from custom commands")],-1),Oe=n("Due to the scoping rules, any environment variables defined inside a custom command will only exist inside the command's scope. However, a command defined as "),we=e("code",null,"def-env",-1),ye=n(" instead of "),Ne=e("code",null,"def",-1),ke=n(" (it applies also to "),Ae=e("code",null,"export def",-1),Fe=n(", see "),Re=n("Modules"),Se=n(") will preserve the environment on the caller's side:"),Be=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> def-env foo [] {
    let-env FOO = 'BAR'
}

> foo

> $env.FOO
BAR
`)])],-1),Ee=e("h2",{id:"environment-variable-conversions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#environment-variable-conversions","aria-hidden":"true"},"#"),n(" Environment variable conversions")],-1),Te=n("You can set the "),Ie=e("code",null,"ENV_CONVERSIONS",-1),Ve=n(" environment variable to convert other environment variables between a string and a value. For example, the "),Pe={href:"https://github.com/nushell/nushell/blob/main/crates/nu-utils/src/sample_config/default_env.nu",target:"_blank",rel:"noopener noreferrer"},$e=n("default environment config"),Ce=n(" includes conversion of PATH (and Path used on Windows) environment variables from a string to a list. After both "),He=e("code",null,"env.nu",-1),Ye=n(" and "),qe=e("code",null,"config.nu",-1),Me=n(" are loaded, any existing environment variable specified inside "),De=e("code",null,"ENV_CONVERSIONS",-1),Le=n(" will be translated according to its "),Ue=e("code",null,"from_string",-1),We=n(" field into a value of any type. External tools require environment variables to be strings, therefore, any non-string environment variable needs to be converted first. The conversion of value -> string is set by the "),Ze=e("code",null,"to_string",-1),Ge=n(" field of "),Je=e("code",null,"ENV_CONVERSIONS",-1),je=n(" and is done every time an external command is run."),ze=s(`<p>Let&#39;s illustrate the conversions with an example. Put the following in your config.nu:</p><div class="language-text ext-text"><pre class="language-text"><code>let-env ENV_CONVERSIONS = {
    # ... you might have Path and PATH already there, add:
    FOO : {
        from_string: { |s| $s | split row &#39;-&#39; }
        to_string: { |v| $v | str collect &#39;-&#39; }
    }
}
</code></pre></div><p>Now, within a Nushell instance:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; with-env { FOO : &#39;a-b-c&#39; } { nu }  # runs Nushell with FOO env. var. set to &#39;a-b-c&#39;

&gt; $env.FOO
  0   a
  1   b
  2   c
</code></pre></div><p>You can see the <code>$env.FOO</code> is now a list in a new Nushell instance with the updated config. You can also test the conversion manually by</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; do $env.ENV_CONVERSIONS.FOO.from_string &#39;a-b-c&#39;
</code></pre></div><p>Now, to test the conversion list -&gt; string, run:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; nu -c &#39;$env.FOO&#39;
a-b-c
</code></pre></div><p>Because <code>nu</code> is an external program, Nushell translated the <code>[ a b c ]</code> list according to <code>ENV_CONVERSIONS.FOO.to_string</code> and passed it to the <code>nu</code> process. Running commands with <code>nu -c</code> does not load the config file, therefore the env conversion for <code>FOO</code> is missing and it is displayed as a plain string -- this way we can verify the translation was successful. You can also run this step manually by <code>do $env.ENV_CONVERSIONS.FOO.to_string [a b c]</code></p>`,9),Ke=n("If we look back at the "),Qe=e("code",null,"env",-1),Xe=s(" command, the <code>raw</code> column shows the value translated by <code>ENV_CONVERSIONS.&lt;name&gt;.to_string</code> and the <code>value</code> column shows the value used in Nushell (the result of <code>ENV_CONVERSIONS.&lt;name&gt;.from_string</code> in the case of <code>FOO</code>). If the value is not a string and does not have <code>to_string</code> conversion, it is not passed to an external (see the <code>raw</code> column of <code>PROMPT_COMMAND</code>). One exception is <code>PATH</code> (<code>Path</code> on Windows): By default, it converts the string to a list on startup and from a list to a string when running externals if no manual conversions are specified.",21),en=e("p",null,[e("em",null,[n("(Important! The environment conversion string -> value happens "),e("strong",null,"after"),n(" the env.nu and config.nu are evaluated. All environment variables in env.nu and config.nu are still strings unless you set them manually to some other values.)")])],-1),nn=e("h2",{id:"removing-environment-variables",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#removing-environment-variables","aria-hidden":"true"},"#"),n(" Removing environment variables")],-1),tn=n("You can remove an environment variable only if it was set in the current scope via "),on=e("code",null,"hide-env",-1),an=n(":"),sn=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> let-env FOO = 'BAR'
...
> hide-env FOO
`)])],-1),ln=e("p",null,"The hiding is also scoped which both allows you to remove an environment variable temporarily and prevents you from modifying a parent environment from within a child scope:",-1),dn=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> let-env FOO = 'BAR'
> do {
    hide-env FOO
    # $env.FOO does not exist
  }
> $env.FOO
BAR
`)])],-1),rn=n("You can check "),cn=n("Modules"),hn=n(" for more details about hiding.");function un(vn,_n){const o=i("RouterLink"),l=i("ExternalLinkIcon");return r(),c("div",null,[u,v,e("p",null,[_,t(o,{to:"/book/commands/env.html"},{default:a(()=>[m]),_:1}),g]),p,e("p",null,[f,t(o,{to:"/book/configuration.html"},{default:a(()=>[b]),_:1}),x]),O,w,e("h3",y,[N,k,t(o,{to:"/book/commands/let-env.html"},{default:a(()=>[A]),_:1})]),F,e("h3",R,[S,B,t(o,{to:"/book/commands/load-env.html"},{default:a(()=>[E]),_:1})]),T,I,V,e("p",null,[P,t(o,{to:"/book/environment.html#single-use-environment-variables"},{default:a(()=>[$]),_:1}),C]),e("h3",H,[Y,q,t(o,{to:"/book/commands/def-env.html"},{default:a(()=>[M]),_:1})]),e("p",null,[D,t(o,{to:"/book/environment.html#defining-environment-from-custom-commands"},{default:a(()=>[L]),_:1}),U]),W,e("p",null,[Z,t(o,{to:"/book/modules.html"},{default:a(()=>[G]),_:1}),J]),j,e("p",null,[z,t(o,{to:"/book/commands/cd.html"},{default:a(()=>[K]),_:1}),Q,X,ee,ne,te]),oe,ae,se,e("p",null,[ie,t(o,{to:"/book/commands/with-env.html"},{default:a(()=>[le]),_:1}),de]),re,e("p",null,[ce,t(o,{to:"/book/commands/with-env.html"},{default:a(()=>[he]),_:1}),ue,t(o,{to:"/book/types_of_data.html#blocks"},{default:a(()=>[ve]),_:1}),_e]),me,e("p",null,[ge,t(o,{to:"/book/configuration.html"},{default:a(()=>[pe]),_:1}),fe]),be,xe,e("p",null,[Oe,t(o,{to:"/book/commands/def-env.html"},{default:a(()=>[we]),_:1}),ye,t(o,{to:"/book/commands/def.html"},{default:a(()=>[Ne]),_:1}),ke,Ae,Fe,t(o,{to:"/book/modules.html"},{default:a(()=>[Re]),_:1}),Se]),Be,Ee,e("p",null,[Te,Ie,Ve,e("a",Pe,[$e,t(l)]),Ce,He,Ye,qe,Me,De,Le,Ue,We,Ze,Ge,Je,je]),ze,e("p",null,[Ke,t(o,{to:"/book/commands/env.html"},{default:a(()=>[Qe]),_:1}),Xe]),en,nn,e("p",null,[tn,t(o,{to:"/book/commands/hide_env.html"},{default:a(()=>[on]),_:1}),an]),sn,ln,dn,e("p",null,[rn,t(o,{to:"/book/modules.html"},{default:a(()=>[cn]),_:1}),hn])])}const gn=d(h,[["render",un],["__file","environment.html.vue"]]);export{gn as default};
