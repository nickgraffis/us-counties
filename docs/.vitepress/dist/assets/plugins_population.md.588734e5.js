import{_ as s,c as a,o as n,b as o}from"./app.955205ea.js";const C=JSON.parse('{"title":"US Counties Plugin Population","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation and Usage","slug":"installation-and-usage","link":"#installation-and-usage","children":[{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Raw Data and Sources","slug":"raw-data-and-sources","link":"#raw-data-and-sources","children":[]}],"relativePath":"plugins/population.md"}'),l={name:"plugins/population.md"},p=o(`<h1 id="us-counties-plugin-population" tabindex="-1">US Counties Plugin Population <a class="header-anchor" href="#us-counties-plugin-population" aria-hidden="true">#</a></h1><p>This plugin adds population data to the <a href="./.html">US Counties</a> lib.</p><h2 id="installation-and-usage" tabindex="-1">Installation and Usage <a class="header-anchor" href="#installation-and-usage" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">yarn add @nickgraffis/us-counties-plugin-population</span></span>
<span class="line"></span></code></pre></div><p>If you are using typescript you can import the <code>CountyPopulationData</code> type.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> USCounties </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@nickgraffis/us-counties</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> usCountiesPluginPopulation</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CountyPopulationData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@nickgraffis/us-counties-plugin-population</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> counties </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">USCounties</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">CountyPopulationData</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [usCountiesPluginPopulation]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> county </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> counties</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">06001</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(county</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">population2021)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><p>The plugin adds one method to the <code>Counties</code> class.</p><h4 id="sortbypopulation" tabindex="-1"><code>sortByPopulation()</code> <a class="header-anchor" href="#sortbypopulation" aria-hidden="true">#</a></h4><p>Returns the <code>Counties</code> instance sorted by population 2021.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> counties </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">USCounties</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">CountyPopulationData</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [usCountiesPluginPopulation]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sortedCounties </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> counties</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sortByPopulation</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="raw-data-and-sources" tabindex="-1">Raw Data and Sources <a class="header-anchor" href="#raw-data-and-sources" aria-hidden="true">#</a></h2><p>The data comes from the <a href="https://www.census.gov" target="_blank" rel="noreferrer">US Census Bureau</a>.</p><p>More info on the population data can be found <a href="https://www2.census.gov/programs-surveys/popest/technical-documentation/file-layouts/2020-2021/CO-EST2021-ALLDATA.pdf" target="_blank" rel="noreferrer">here</a>.</p><p>You can import the raw serialized data as <code>countiespopulationdata</code>. And if you are using typescript you may want to import the <code>SerializedData</code> type.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">countiespopulationdata</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">SerializedData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@nickgraffis/us-counties-plugin-population</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> map </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">(countiespopulationdata </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SerializedData</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,16),e=[p];function t(c,r,i,D,y,u){return n(),a("div",null,e)}const d=s(l,[["render",t]]);export{C as __pageData,d as default};
