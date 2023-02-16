import{_ as s,c as n,o as a,b as p}from"./app.955205ea.js";const A=JSON.parse('{"title":"Version 0.0.1","description":"","frontmatter":{},"headers":[],"relativePath":"v001.md"}'),l={name:"v001.md"},e=p(`<h1 id="version-0-0-1" tabindex="-1">Version 0.0.1 <a class="header-anchor" href="#version-0-0-1" aria-hidden="true">#</a></h1><p>All methods from the first version.</p><h4 id="getcountybynameinclues" tabindex="-1"><code>getCountyByNameInclues</code> <a class="header-anchor" href="#getcountybynameinclues" aria-hidden="true">#</a></h4><p>Get an array of the counties where their name includes the given string.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getCountyByNameIncludes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@nickgraffis/us-counties</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getCountyByNameIncludes</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Los</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">* [</span></span>
<span class="line"><span style="color:#676E95;">*   {</span></span>
<span class="line"><span style="color:#676E95;">*     name: &#39;Los Angeles&#39;,</span></span>
<span class="line"><span style="color:#676E95;">*     FIPS: &#39;64723&#39;,</span></span>
<span class="line"><span style="color:#676E95;">*     state: &#39;CA&#39;</span></span>
<span class="line"><span style="color:#676E95;">*   }</span></span>
<span class="line"><span style="color:#676E95;">* ]</span></span>
<span class="line"><span style="color:#676E95;">*/</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h4 id="getcountybynamestartswith" tabindex="-1"><code>getCountyByNameStartsWith</code> <a class="header-anchor" href="#getcountybynamestartswith" aria-hidden="true">#</a></h4><p>Get an array of the counties where their name starts with the given string.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getCountyByNameStartsWith</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@nickgraffis/us-counties</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getCountyByNameStartsWith</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Los</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">* [</span></span>
<span class="line"><span style="color:#676E95;">*   {</span></span>
<span class="line"><span style="color:#676E95;">*     name: &#39;Los Angeles&#39;,</span></span>
<span class="line"><span style="color:#676E95;">*     FIPS: &#39;64723&#39;,</span></span>
<span class="line"><span style="color:#676E95;">*     state: &#39;CA&#39;</span></span>
<span class="line"><span style="color:#676E95;">*   }</span></span>
<span class="line"><span style="color:#676E95;">* ]</span></span>
<span class="line"><span style="color:#676E95;">*/</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span></code></pre></div><h4 id="getcountybyfips" tabindex="-1"><code>getCountyByFips</code> <a class="header-anchor" href="#getcountybyfips" aria-hidden="true">#</a></h4><p>Get a county by its FIPS code.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getCountyByFips</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@nickgraffis/us-counties</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getCountyByFips</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">64723</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">* {</span></span>
<span class="line"><span style="color:#676E95;">*   name: &#39;Los Angeles&#39;,</span></span>
<span class="line"><span style="color:#676E95;">*   FIPS: &#39;64723&#39;,</span></span>
<span class="line"><span style="color:#676E95;">*   state: &#39;CA&#39;</span></span>
<span class="line"><span style="color:#676E95;">* }</span></span>
<span class="line"><span style="color:#676E95;">*/</span></span>
<span class="line"></span></code></pre></div><h4 id="getcountybystate" tabindex="-1"><code>getCountyByState</code> <a class="header-anchor" href="#getcountybystate" aria-hidden="true">#</a></h4><p>Get an array of counties by their state.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getCountyByState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@nickgraffis/us-counties</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">getCountyByState</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">CA</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">* [</span></span>
<span class="line"><span style="color:#676E95;">*   {</span></span>
<span class="line"><span style="color:#676E95;">*     name: &#39;Los Angeles&#39;,</span></span>
<span class="line"><span style="color:#676E95;">*     FIPS: &#39;64723&#39;,</span></span>
<span class="line"><span style="color:#676E95;">*     state: &#39;CA&#39;</span></span>
<span class="line"><span style="color:#676E95;">*   }</span></span>
<span class="line"><span style="color:#676E95;">* ]</span></span>
<span class="line"><span style="color:#676E95;">*/</span></span>
<span class="line"></span></code></pre></div>`,14),o=[e];function t(c,r,y,i,D,F){return a(),n("div",null,o)}const d=s(l,[["render",t]]);export{A as __pageData,d as default};
