if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,o)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let c={};const l=e=>n(e,t),s={module:{uri:t},exports:c,require:l};i[t]=Promise.all(r.map((e=>s[e]||l(e)))).then((e=>(o(...e),c)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"126aaa42896b3037f951.jpg",revision:null},{url:"17b6a73166cc7adca9a1.woff",revision:null},{url:"d01657cb4825a5f07246.woff",revision:null},{url:"index.html",revision:"829c914b931aaa10a2df8909ecabed31"},{url:"main.bundle.js",revision:"ed8e8e6072701c9376cb6489a8c4fa03"},{url:"main.bundle.js.LICENSE.txt",revision:"dca2216dcfc4f9591480833c2418b5cd"}],{})}));
