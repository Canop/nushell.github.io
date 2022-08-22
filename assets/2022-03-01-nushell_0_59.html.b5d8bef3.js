import{_ as r,o as i,c as s,a as e,b as o,e as a,d as t,r as l}from"./app.9dc4563a.js";const h={},c=a('<h1 id="nushell-0-59-aka-0-60-beta" tabindex="-1"><a class="header-anchor" href="#nushell-0-59-aka-0-60-beta" aria-hidden="true">#</a> Nushell 0.59 (aka 0.60 beta)</h1><p>Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.</p><p>Today, we&#39;re releasing a beta release of 0.60 of Nu. This is to get early feedback on 0.60 before it&#39;s full release in three weeks.</p><h1 id="where-to-get-it" tabindex="-1"><a class="header-anchor" href="#where-to-get-it" aria-hidden="true">#</a> Where to get it</h1><p>Nu 0.59 is available only as pre-built binaries.</p><ul><li><a href="/binaries/nushell_0_59_windows.msi">Windows .msi</a></li><li><a href="/binaries/nushell_0_59_windows.zip">Windows .zip</a></li><li><a href="/binaries/nushell_0_59_linux.tar.gz">Linux .zip</a></li><li><a href="/binaries/nushell_0_59_macOS.zip">macOS .zip</a></li></ul><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s new</h1><p>We&#39;ll wait until the full release for the final set of features going into 0.60, but suffice to say it&#39;s a <em>lot</em>.</p><p>Some of the main things we want to cover for this beta release: the new engine, language improvements, new plugin infrastructure, and more.</p><h1 id="new-engine" tabindex="-1"><a class="header-anchor" href="#new-engine" aria-hidden="true">#</a> New Engine</h1><p>You can now try out the improvements that came with engine-q as part of a Nushell release. The engine offers a lot of improvements over the previous one. You can now get much better errors, run code in parallel, run code generally faster, and more correctly.</p><p>We&#39;ll be talking about this more in the full release announcement, but we&#39;d also love your help in testing the engine as you port your code over to it. Crashes, incorrect answers, or just plain weirdness are things we&#39;d like to work on.</p><h1 id="language-improvements" tabindex="-1"><a class="header-anchor" href="#language-improvements" aria-hidden="true">#</a> Language improvements</h1><p>We&#39;ve made a bunch of improvements to the language, from the change to <code>if</code> to allow <code>else</code>, to modules and imports, operator short-circuiting, and much more.</p>',14),d=t("We're working to bring the "),u={href:"https://www.nushell.sh/book/",target:"_blank",rel:"noopener noreferrer"},p=t("book up to date"),m=t(", and it's a good place to find explanations of these improvements. Be sure to also look at the "),g={href:"https://www.nushell.sh/book/command_reference.html",target:"_blank",rel:"noopener noreferrer"},_=t("updated command documentation"),f=t(" for more information on the updated commands."),w=a(`<h1 id="new-plugin-architecture" tabindex="-1"><a class="header-anchor" href="#new-plugin-architecture" aria-hidden="true">#</a> New plugin architecture</h1><p>The new plugin architecture is now multi-protocol, allowing you to pick the right protocol for your plugin. We currently support json and capnp.</p><p>Rather that scanning for all new plugins on startup like we did with 0.44, there is also a new <code>register</code> command you use a plugin for use:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; register -e capnp ~/.cargo/bin/nu_plugin_extra_query
</code></pre></div><h1 id="and-more" tabindex="-1"><a class="header-anchor" href="#and-more" aria-hidden="true">#</a> And more</h1>`,5),b=t("We're still hard at work finishing up the 0.60 release, and we're excited to tell you everything it can do. You'll notice some new chapters in the "),k={href:"https://www.nushell.sh/book/",target:"_blank",rel:"noopener noreferrer"},y=t("book"),x=t(" on some of these, including: support for exit codes, better stderr support, new language literals for dates and binary data, a whole new line editor with an improved interface, and much more."),v=e("h1",{id:"one-more-thing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#one-more-thing","aria-hidden":"true"},"#"),t(" One more thing")],-1),N=e("p",null,"Before we go, we thought we should mention that Nushell now supports completions for external commands. When you first start up nushell, you'll notice that it asks if you want to create a default configuration. If you say yes, and look at the file, you'll see a few of these:",-1),W=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`def "nu-complete git branches" [] {
  ^git branch | lines | each { |line| $line | str find-replace "\\* " "" | str trim }
}

def "nu-complete git remotes" [] {
  ^git remote | lines | each { |line| $line | str trim }
}

extern "git checkout" [
  branch?: string@"nu-complete git branches" # name of the branch to checkout
  -b: string                                 # create and checkout a new branch
  -B: string                                 # create/reset and checkout a branch
`)])],-1),z=t("These are completions for external commands (here "),B=e("code",null,"git checkout",-1),I=t(") written all in Nushell. We're already getting contributions for "),T={href:"https://github.com/nushell/nu_scripts/tree/main/custom-completions",target:"_blank",rel:"noopener noreferrer"},L=t("other completions"),E=t(", too!"),S=e("h1",{id:"looking-forward",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-forward","aria-hidden":"true"},"#"),t(" Looking forward")],-1),V=t("It's time to polish 0.60 and get it to a nice shine. Your help in testing this beta release is invaluable to help making that happen. If you'd like to help us with docs, samples, code, or anything else that crosses your mind, come join us on the "),Y={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},j=t("discord"),O=t(".");function q(A,C){const n=l("ExternalLinkIcon");return i(),s("div",null,[c,e("p",null,[d,e("a",u,[p,o(n)]),m,e("a",g,[_,o(n)]),f]),w,e("p",null,[b,e("a",k,[y,o(n)]),x]),v,N,W,e("p",null,[z,B,I,e("a",T,[L,o(n)]),E]),S,e("p",null,[V,e("a",Y,[j,o(n)]),O])])}var G=r(h,[["render",q],["__file","2022-03-01-nushell_0_59.html.vue"]]);export{G as default};