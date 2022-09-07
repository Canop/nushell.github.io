import{_ as d,r as l,o as r,c as u,a as e,b as t,w as s,e as o,d as n}from"./app.c2a61f71.js";const h={},c=o(`<h1 id="pipelines" tabindex="-1"><a class="header-anchor" href="#pipelines" aria-hidden="true">#</a> Pipelines</h1><p>Eine der grundlegenden Funktionen in Nu ist die Pipeline. Ein Konzept, welches seine Wurzeln tief in der Unix Philosophie hat. So wie Nu die Arbeit mit Texten als dem Basis Datentyp in Unix erweitert, erweitert sie auch die Idee der Pipeline, um mehr als nur Text zu verarbeiten.</p><h2 id="grundlagen" tabindex="-1"><a class="header-anchor" href="#grundlagen" aria-hidden="true">#</a> Grundlagen</h2><p>Eine Pipeline besteht aus drei Teilen: Dem Input, dem Filter und dem Output.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open &quot;Cargo.toml&quot; | inc package.version --minor | save &quot;Cargo_new.toml&quot;
</code></pre></div>`,5),_=n("Der erste Befehl, "),p=e("code",null,'open "Cargo.toml"',-1),m=n(', ist der Input (manchmal auch als "source" oder "producer" bezeichnet). Dieser kreiert oder ladet Daten und speist sie in die Pipeline ein. Von hier aus hat Nu etwas zum damit arbeiten. Befehle wie '),f=e("code",null,"ls",-1),b=n(" sind ebenfalls Inputs, da sie Daten aus dem Dateisystem ziehen und in die Pipeline einspeisen."),g=n("Der zweite Befehl, "),x=e("code",null,"inc package.version --minor",-1),w=n(", ist ein Filter. Filter verarbeiten die Daten auf eine bestimmte Weise. Vielleicht \xE4ndern sie Teile (wie der "),k=e("code",null,"inc",-1),v=n(" im Beispiel), oder sie f\xFChren eine andere Operation aus wie Loggen."),z=o(`<p>Der letzte Befehl, <code>save &quot;Cargo_new.toml&quot;</code>, ist ein Output (manchmal auch &quot;sink&quot; genannt). Ein Output nimmt die Daten aus der Pipeline entgegen und f\xFChrt eine abschliessende Operation daran aus. Im Beispiel wird der Inhalt der Pipeline als letzten Schritt in eine Datei gespeichert. Andere Arten von Output geben die Daten aus der Pipeline zum Beispiel auf der Kommandozeile aus.</p><p>Die <code>$in</code> Variable sammelt die Daten in der Pipeline in einen Wert, um den ganzen Strom als Parameter verwenden zu k\xF6nnen:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>&gt; echo 1 2 3 | $in.1 * $in.2
6
</code></pre></div><h2 id="mehrzeilen-pipelines" tabindex="-1"><a class="header-anchor" href="#mehrzeilen-pipelines" aria-hidden="true">#</a> Mehrzeilen Pipelines</h2><p>Wenn eine Pipeline etwas lange wird f\xFCr eine Zeile, kann sie mit <code>(</code> und <code>)</code> zu Unterausdr\xFCcken unterteilt werden:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>(
    &quot;01/22/2021&quot; |
    parse &quot;{month}/{day}/{year}&quot; |
    get year
)
</code></pre></div>`,6),B=n("Siehe auch "),D={href:"https://www.nushell.sh/book/variables_and_subexpressions.html#subexpressions",target:"_blank",rel:"noopener noreferrer"},P=n("Subexpressions"),N=e("h2",{id:"mit-externen-befehlen-arbeiten",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mit-externen-befehlen-arbeiten","aria-hidden":"true"},"#"),n(" Mit externen Befehlen arbeiten")],-1),q=n("Nu Befehle kommunizieren miteinander \xFCber die Nu Datentypen (see "),O=n("types of data"),T=n("), was aber ist mit Befehlen ausserhalb Nu? Hier einige Beispiele im Umgang mit externen Befehlen:"),y=e("p",null,[e("code",null,"interner_befehl| externer_befehl")],-1),I=e("p",null,[n("Die Daten fliessen vom internen zum externen Befehl und werden dawischen zu Texten konvertiert, so dass der externe Befehl diese von "),e("code",null,"stdin"),n(" lesen kann.")],-1),W=e("p",null,[e("code",null,"externer_befehl | interner_befehl")],-1),E=e("p",null,"Daten die von einem externen Befehl in Nu ankommen, werden als Bytes verarbeitet, die Nushell automatisch in UTF-8 konvertieren versucht. Wenn dies gelingt, wird ein Textstrom an den internen Befehl gesendet. Wenn nicht, wird ein Strom von bin\xE4ren Daten weitergeleitet.",-1),S=n("Befehle wie "),V=e("code",null,"lines",-1),C=n(" helfen dabei, mit externen Daten zu arbeiten, da er diskrete Zeilen der Daten zur\xFCckgibt."),F=e("p",null,[e("code",null,"externer_befehl_1 | externer_befehl_2")],-1),L=e("p",null,[n("Wird zwischen zwei externen Befehlen eine Pipeline aufgebaut, so verhaltet sich Nushell gleich wie es z.B. Bash tun w\xFCrde. Der "),e("code",null,"stdout"),n(" des externen_befehl_1 wiird mit dem "),e("code",null,"stdin"),n(" des externen_befehl_2 verbunden. Dies l\xE4sst die Daten nat\xFCrlich zwischen den Befehlen fliessen.")],-1),U=e("h2",{id:"hinter-den-kulissen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hinter-den-kulissen","aria-hidden":"true"},"#"),n(" Hinter den Kulissen")],-1),A=n("Warum gibt dann der "),K=e("code",null,"ls",-1),$=n(" Befehl eine Tabelle zur\xFCck, wenn er doch ein Input ist und kein Output? Nu f\xFCgt diesen Output automatisch hinzu, indem sie den Befehl "),H=e("code",null,"table",-1),M=n(" verwendet. Der "),R=e("code",null,"table",-1),Z=n(" Befehl wird an jede Pipeline angef\xFCgt, die keinen eigenen Output besitzen. Dies erlaubt es den Output in dieser Form zu sehen. Tats\xE4chlich ist der Befehl:"),j=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ls
`)])],-1),G=e("p",null,"und die Pipeline,",-1),J=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | table
`)])],-1),Q=e("p",null,"ein und dasselbe.",-1);function X(Y,ee){const i=l("RouterLink"),a=l("ExternalLinkIcon");return r(),u("div",null,[c,e("p",null,[_,p,m,t(i,{to:"/book/commands/ls.html"},{default:s(()=>[f]),_:1}),b]),e("p",null,[g,x,w,t(i,{to:"/book/commands/inc.html"},{default:s(()=>[k]),_:1}),v]),z,e("p",null,[B,e("a",D,[P,t(a)])]),N,e("p",null,[q,t(i,{to:"/de/book/types_of_data.html"},{default:s(()=>[O]),_:1}),T]),y,I,W,E,e("p",null,[S,t(i,{to:"/book/commands/lines.html"},{default:s(()=>[V]),_:1}),C]),F,L,U,e("p",null,[A,t(i,{to:"/book/commands/ls.html"},{default:s(()=>[K]),_:1}),$,t(i,{to:"/book/commands/table.html"},{default:s(()=>[H]),_:1}),M,t(i,{to:"/book/commands/table.html"},{default:s(()=>[R]),_:1}),Z]),j,G,J,Q])}const te=d(h,[["render",X],["__file","pipeline.html.vue"]]);export{te as default};
