import{_ as e,z as n,A as t,a6 as i}from"./framework.3d018c9f.js";const s={},l=i(`<h1 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> Plugins</h1><p>Die Funktionen von Nushell können mittels Plugins erweitert werden. Diese Plugins können einen Großteil der selben Operationen ausführen, wie die internen Befehle. Noch dazu haben Plugins den Vorteil, dass sie separat und flexibel zu Nushell hinzugefügt werden können.</p><p>Um ein Plugin hinzuzufügen, muss es erstellt werden und dann der Befehl <code>register</code> auf dieses Plugin aufgerufen werden. Wenn das getan wird, muss Nushell auch mitgeteilt werden, welches Protokoll vom Plugin verwendet wird.</p><p>Ein Beispiel:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; register ./my_plugins/nu-plugin-inc -e capnp
</code></pre></div><p>Wenn der Befehl registriert wurde, kann er als Teil der internen Befehle verwendet werden.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; inc --help
</code></pre></div>`,7),r=[l];function a(d,u){return n(),t("div",null,r)}const g=e(s,[["render",a],["__file","plugins.html.vue"]]);export{g as default};