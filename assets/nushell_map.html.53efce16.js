import{_ as t,o as d,c as r,e}from"./app.c2a61f71.js";const o={},a=e('<h1 id="\u4ED6\u306E\u30B7\u30A7\u30EB\u3068-dsl-\u304B\u3089-nu-\u3078\u306E\u5BFE\u5FDC\u8868" tabindex="-1"><a class="header-anchor" href="#\u4ED6\u306E\u30B7\u30A7\u30EB\u3068-dsl-\u304B\u3089-nu-\u3078\u306E\u5BFE\u5FDC\u8868" aria-hidden="true">#</a> \u4ED6\u306E\u30B7\u30A7\u30EB\u3068 DSL \u304B\u3089 Nu \u3078\u306E\u5BFE\u5FDC\u8868</h1><p>\u3053\u306E\u30C6\u30FC\u30D6\u30EB\u306F Nu \u306E\u7D44\u8FBC\u307F\u30B3\u30DE\u30F3\u30C9\u3084\u30D7\u30E9\u30B0\u30A4\u30F3\u3068\u4ED6\u306E\u30B7\u30A7\u30EB\u3084 DLS(Domain Specific Languages)\u3068\u306E\u5BFE\u5FDC\u95A2\u4FC2\u3092\u7406\u89E3\u3059\u308B\u3053\u3068\u3092\u52A9\u3051\u308B\u305F\u3081\u306E\u3082\u306E\u3067\u3059\u3002\u3053\u3053\u3067\u306F\u5168\u3066\u306E Nu \u30B3\u30DE\u30F3\u30C9\u3068\u305D\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u4ED6\u306E\u8A00\u8A9E\u3067\u3069\u3046\u4F7F\u308F\u308C\u3066\u3044\u308B\u304B\u3092\u30DE\u30C3\u30D4\u30F3\u30B0\u3057\u3066\u3044\u307E\u3059\u3002\u30B3\u30F3\u30C8\u30EA\u30D3\u30E5\u30FC\u30B7\u30E7\u30F3\u6B53\u8FCE\u3067\u3059\u3002</p><p>\u6CE8: Nu \u304C 0.14.1 \u4EE5\u964D\u3067\u3042\u308B\u3053\u3068\u3092\u60F3\u5B9A\u3057\u3066\u3044\u307E\u3059\u3002</p><table><thead><tr><th>Nushell</th><th>SQL</th><th>.Net LINQ (C#)</th><th>PowerShell (without external modules)</th><th>Bash</th></tr></thead><tbody><tr><td>alias</td><td>-</td><td>-</td><td>alias</td><td>alias</td></tr><tr><td>append</td><td>-</td><td>Append</td><td>-Append</td><td></td></tr><tr><td>args</td><td>-</td><td>-</td><td></td><td></td></tr><tr><td>autoview</td><td>-</td><td>-</td><td></td><td></td></tr><tr><td>average(<code>*</code>)</td><td>avg</td><td>Average</td><td>Measure-Object, measure</td><td></td></tr><tr><td>binaryview(<code>*</code>)</td><td>-</td><td></td><td>Format-Hex</td><td></td></tr><tr><td>calc, = math</td><td>math operators</td><td>Aggregate, Average, Count, Max, Min, Sum</td><td></td><td>bc</td></tr><tr><td>cd</td><td>-</td><td>-</td><td>Set-Location, cd</td><td>cd</td></tr><tr><td>clear</td><td>-</td><td>-</td><td>Clear-Host</td><td>clear</td></tr><tr><td>clip</td><td>-</td><td>-</td><td>Set-Clipboard, scb</td><td>clip, clipboard, xclip, pbcopy</td></tr><tr><td>compact</td><td></td><td></td><td></td><td></td></tr><tr><td>config</td><td>-</td><td>-</td><td>$Profile</td><td>vi .bashrc, .profile</td></tr><tr><td>count</td><td>count</td><td>Count</td><td>Measure-Object, measure</td><td>wc</td></tr><tr><td>cp</td><td>-</td><td>-</td><td>Copy-Item, cp, copy</td><td>cp</td></tr><tr><td>date</td><td>NOW() / getdate()</td><td>DateTime class</td><td>Get-Date</td><td>date</td></tr><tr><td>debug</td><td></td><td></td><td></td><td></td></tr><tr><td>= dec</td><td></td><td>x--</td><td></td><td></td></tr><tr><td>default</td><td></td><td></td><td></td><td></td></tr><tr><td>drop</td><td></td><td></td><td></td><td></td></tr><tr><td>du</td><td>-</td><td>-</td><td></td><td>du</td></tr><tr><td>each</td><td>cursor</td><td></td><td>ForEach-Object, foreach, for</td><td></td></tr><tr><td>echo</td><td>print</td><td>-</td><td>Write-Output, write</td><td>echo</td></tr><tr><td>enter</td><td>-</td><td>-</td><td></td><td></td></tr><tr><td>evaluate_by</td><td></td><td></td><td></td><td></td></tr><tr><td>exit</td><td>-</td><td></td><td>exit</td><td>exit</td></tr><tr><td>fetch(<code>*</code>)</td><td>-</td><td>HttpClient,WebClient, HttpWebRequest/Response</td><td>Invoke-WebRequest</td><td>wget</td></tr><tr><td>first</td><td>top, limit</td><td>First, FirstOrDefault</td><td>Select-Object -First</td><td>head</td></tr><tr><td>format</td><td></td><td>String.Format</td><td>String.Format</td><td></td></tr><tr><td>from</td><td>import flatfile, openjson, cast(variable as xml)</td><td>-</td><td>Import/ConvertFrom-{Csv,Xml,Html,Json}</td><td></td></tr><tr><td>get</td><td></td><td>Select</td><td>(cmd).column</td><td></td></tr><tr><td>group_by</td><td>group by</td><td>GroupBy, group</td><td>Group-Object, group</td><td></td></tr><tr><td>headers</td><td></td><td></td><td></td><td></td></tr><tr><td>help</td><td>sp_help</td><td>-</td><td>Get-Help, help, man</td><td>man</td></tr><tr><td>histogram</td><td>-</td><td>-</td><td></td><td></td></tr><tr><td>history</td><td>-</td><td>-</td><td>Get-History, history</td><td>history</td></tr><tr><td>inc(<code>*</code>)</td><td>-</td><td></td><td>-</td><td>-</td></tr><tr><td>insert</td><td></td><td></td><td>Add-Member</td><td></td></tr><tr><td>is_empty</td><td>is null</td><td>String.InNullOrEmpty</td><td>String.InNullOrEmpty</td><td></td></tr><tr><td>keep, =take</td><td>top, limit</td><td>Take</td><td>Select-Object -First</td><td>head</td></tr><tr><td>keep_until</td><td></td><td></td><td></td><td></td></tr><tr><td>keep_while</td><td></td><td>TakeWhile</td><td></td><td></td></tr><tr><td>kill</td><td>-</td><td>-</td><td>Stop-Process, kill</td><td>kill</td></tr><tr><td>last</td><td></td><td>Last, LastOrDefault</td><td>Select-Object -Last</td><td>tail</td></tr><tr><td>lines</td><td>-</td><td>-</td><td>File.ReadAllLines</td><td></td></tr><tr><td>ls</td><td>-</td><td>-</td><td>Get-ChildItem, dir, ls</td><td>ls</td></tr><tr><td>map_max_by</td><td></td><td></td><td></td><td></td></tr><tr><td>match(<code>*</code>)</td><td>case when</td><td>Regex.IsMatch</td><td>[regex]</td><td></td></tr><tr><td>merge</td><td></td><td></td><td></td><td></td></tr><tr><td>mkdir</td><td>-</td><td>-</td><td>mkdir, md</td><td>mkdir</td></tr><tr><td>mv</td><td>-</td><td>-</td><td>Move-Item, mv, move, mi</td><td>mv</td></tr><tr><td>next</td><td></td><td></td><td></td><td></td></tr><tr><td>nth</td><td>limit x offset y, rownumber =</td><td>ElementAt</td><td>[x], indexing operator, ElementAt</td><td></td></tr><tr><td>open</td><td></td><td></td><td>Get-Content, gc, cat, type</td><td>cat</td></tr><tr><td>parse</td><td></td><td></td><td></td><td></td></tr><tr><td>pivot, =transpose</td><td>pivot</td><td>-</td><td></td><td></td></tr><tr><td>post(<code>*</code>)</td><td>-</td><td>HttpClient,WebClient, HttpWebRequest/Response</td><td>Invoke-WebRequest</td><td></td></tr><tr><td>prepend</td><td></td><td></td><td></td><td></td></tr><tr><td>prev</td><td></td><td></td><td></td><td></td></tr><tr><td>ps(<code>*</code>)</td><td>-</td><td>-</td><td>Get-Process, ps, gps</td><td>ps</td></tr><tr><td>pwd</td><td>-</td><td>-</td><td>Get-Location, pwd</td><td>pwd</td></tr><tr><td>range</td><td></td><td>Range</td><td>1..10, &#39;a&#39;..&#39;f&#39;</td><td></td></tr><tr><td>reduce_by</td><td></td><td>Aggregate</td><td></td><td></td></tr><tr><td>reject</td><td></td><td></td><td></td><td></td></tr><tr><td>rename</td><td>-</td><td>-</td><td>Rename-Item, ren, rni</td><td>mv</td></tr><tr><td>reverse</td><td></td><td>Reverse</td><td>[Array]::Reverse($var)</td><td></td></tr><tr><td>rm</td><td>-</td><td>-</td><td>Remove-Item, del, erase, rd, ri, rm, rmdir</td><td>rm</td></tr><tr><td>save</td><td>-</td><td>-</td><td>Write-Output, Out-File</td><td>&gt; foo.txt</td></tr><tr><td>select(<code>***</code>)</td><td>select</td><td>Select</td><td>Select-Object, select</td><td></td></tr><tr><td>shells</td><td>-</td><td>-</td><td>-</td><td></td></tr><tr><td>shuffle</td><td></td><td>Random</td><td>$var</td><td>Sort-Object {Get-Random}</td></tr><tr><td>size</td><td></td><td></td><td>Measure-Object, measure</td><td>wc</td></tr><tr><td>skip</td><td>where row_number()</td><td>Skip</td><td>Select-Object -Skip</td><td></td></tr><tr><td>skip_until</td><td></td><td></td><td></td><td></td></tr><tr><td>skip_while</td><td></td><td>SkipWhile</td><td></td><td></td></tr><tr><td>sort-by</td><td>order by</td><td>OrderBy, OrderByDescending, ThenBy, ThenByDescending</td><td>Sort-Object, sort</td><td></td></tr><tr><td>split_by</td><td></td><td>Split</td><td>Split</td><td></td></tr><tr><td>split_column</td><td></td><td>-</td><td></td><td></td></tr><tr><td>split_row</td><td></td><td>-</td><td></td><td></td></tr><tr><td>str(<code>*</code>)</td><td>string functions</td><td>String class</td><td>String class</td><td></td></tr><tr><td>sum</td><td>sum</td><td>Sum</td><td>Measure-Object, measure</td><td></td></tr><tr><td>sys(<code>*</code>)</td><td>-</td><td>-</td><td>Get-ComputerInfo</td><td>uname, lshw, lsblk, lscpu, lsusb, hdparam, free</td></tr><tr><td>table</td><td></td><td></td><td>Format-Table, ft, Format-List, fl</td><td></td></tr><tr><td>tags</td><td>-</td><td>-</td><td>-</td><td></td></tr><tr><td>textview(<code>*</code>)</td><td>-</td><td>-</td><td>Get-Content, cat</td><td></td></tr><tr><td>tree(<code>*</code>)</td><td>-</td><td>-</td><td>tree</td><td></td></tr><tr><td>to</td><td>-</td><td>-</td><td>Export/ConvertTo-{Csv,Xml,Html,Json}</td><td></td></tr><tr><td>touch</td><td>-</td><td>-</td><td>Set-Content</td><td>touch</td></tr><tr><td>trim</td><td>rtrim, ltrim</td><td>Trim, TrimStart, TrimEnd</td><td>Trim</td><td></td></tr><tr><td>uniq</td><td>distinct</td><td>Distinct</td><td>Get-Unique, gu</td><td>uniq</td></tr><tr><td>update(<code>**</code>)</td><td>As</td><td>-</td><td></td><td></td></tr><tr><td>version</td><td>select @@version</td><td>-</td><td>$PSVersionTable</td><td></td></tr><tr><td>with_env</td><td>-</td><td>-</td><td>$env:FOO = &#39;bar&#39;</td><td>export foo = &quot;bar&quot;</td></tr><tr><td>what</td><td></td><td></td><td></td><td></td></tr><tr><td>where</td><td>where</td><td>Where</td><td>Where-Object, where, &quot;?&quot; operator</td><td></td></tr><tr><td>which</td><td>-</td><td>-</td><td>-</td><td>which</td></tr><tr><td>wrap</td><td></td><td></td><td></td><td></td></tr></tbody></table><ul><li><code>*</code> - these commands are part of the standard plugins</li><li><code>**</code> - renamed from <code>edit</code> to <code>update</code> in 0.13.1</li><li><code>***</code> - renamed from <code>pick</code> to <code>select</code> in 0.13.1</li></ul>',5),c=[a];function i(s,l){return d(),r("div",null,c)}const p=t(o,[["render",i],["__file","nushell_map.html.vue"]]);export{p as default};
