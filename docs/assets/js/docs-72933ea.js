!function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],h=0,f=[];h<s.length;h++)a=s[h],o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(u&&u(e);f.length;)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={3:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([10,0,1]),n()}([function(t,e,n){},function(t,e,n){"use strict";class r{constructor(t){this.routers=Object.create(null),this.url="",this.onchange=t}static getPath(t){return t=(t=t||window.location.hash).replace(/^#/,"").replace(/^\/*|\/*$/g,"").trim()}set(t,e){return t=r.getPath(t),this.routers[t]=e&&"function"==typeof e?e:function(){},this}refresh(){let t=this.url;this.url=r.getPath();let e=this.routers[this.url];if(e)return this.onchange&&this.onchange.call(this,this.url,t),setTimeout(()=>{e&&e.call(this,this.url,t)},0),this;window.location.hash="#/"}init(){this.url=r.getPath(),window.addEventListener("load",this.refresh.bind(this),!1),window.addEventListener("hashchange",this.refresh.bind(this),!1)}}e.a=r},,function(t,e){t.exports='<div class="app-head__inner">\n  <a class="app-logo">NOVA UI</a>\n  <nav class="app-nav">\n    <ul>\n      <li>\n        <a href="/">首页</a>\n      </li>\n      <li>\n        <a class="app-nav--components" href="/components/#/button">组件</a>\n      </li>\n      <li>\n        <a class="app-nav--docs" href="/docs/">开发文档</a>\n      </li>\n      <li>\n        <a href="http://ux.vnnox.net/" target="_blank">设计规范</a>\n      </li>\n    </ul>\n  </nav>\n</div>'},,,,,,,function(t,e,n){n(2),n(0),document.getElementById("head").innerHTML=n(3),n(11)},function(t,e,n){"use strict";n.r(e),n.d(e,"router",function(){return u});var r=n(1);const o=n(4),i=n(5),a=n(6),s=n(7),c=document.getElementById("container");function l(t,e,n){return function(){c.innerHTML=t,document.title=`${e} | Nova UI Components`,setTimeout(()=>{n&&"function"==typeof n&&n()})}}const u=new r.a(function(t,e){e!==t&&(window.instances.forEach(t=>{t.destroy&&t.destroy()}),window.instances.length=0,window.scrollTo(0,0))});u.set("/").set("/button",l(o,"Button")).set("/input",l(i,"Input")).set("/checkbox",l(a,"Checkbox")).set("/modal",l(s,"Modal",function(){let t=document.querySelectorAll(".code-view");Array.prototype.slice.call(t).forEach(t=>{let e=JSON.parse(t.getAttribute("data-eval"));e.script&&new Function(e.script)()})})).init(),document.addEventListener("click",function(t){var e,n=t.target,r=Array.prototype.slice.call(document.querySelectorAll(".code-view__ctrl"));for(let t=0,o=r.length;t<o;t++){const o=r[t];if(o===n||o.contains(n)){e=o;break}}e&&e.parentNode.classList.toggle("source-opened")}),e.default=u}]);