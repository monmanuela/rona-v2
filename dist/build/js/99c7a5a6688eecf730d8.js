!function(e){function t(t){for(var n,o,s=t[0],l=t[1],c=t[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(m&&m(t);p.length;)p.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={0:0},a={0:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{2:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+{2:"830f168c16d194170d50",3:"23e7f15994970114651d",4:"427bda1d741dd1fd5b7b"}[e]+".css",a=s.p+n,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=(m=i[l]).getAttribute("data-href")||m.getAttribute("href");if("stylesheet"===m.rel&&(c===n||c===a))return t()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){var m;if((c=(m=u[l]).getAttribute("data-href"))===n||c===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],p.parentNode.removeChild(p),r(i)},p.href=a,document.getElementsByTagName("head")[0].appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=function(e){return s.p+"js/"+{2:"830f168c16d194170d50",3:"23e7f15994970114651d",4:"427bda1d741dd1fd5b7b"}[e]+".js"}(e);var c=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(u);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,r[1](c)}a[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var m=c;i.push([251,1]),r()}({157:function(e,t,r){"use strict";t.a={title:"ReactPWA",description:"A highly scalable & plug-able, Progressive Web Application foundation with the best Developer Experience.",keywords:[],image:"",site_name:"ReactPWA",twitter:{site:"",creator:""},facebook:{admins:[]},type:"article",type_details:{section:"",published_time:"",modified_time:""}}},161:function(e,t,r){"use strict";t.a={name:"ReactPWA",short_name:"ReactPWA",dir:"ltr",lang:"en-US",orientation:"any",start_url:"/",background_color:"#fff",theme_color:"#fff",display:"standalone",description:"A highly scalable & plug-able, Progressive Web Application foundation with the best Developer Experience.",icons:[{src:"/images/e2b8677902c8baaa889021c8648d8d4b-pwa-icon-192x192.png",sizes:"192x192"},{src:"/images/eca67df1dd7e1c5e7a6572137deea725-pwa-icon-512x512.png",sizes:"512x512"}]}},236:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r(439),r(440),r(441);function n(e,t,r,n,o,a,i){try{var s=e[a](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function s(e){n(i,o,a,s,l,"next",e)}function l(e){n(i,o,a,s,l,"throw",e)}s(void 0)}))}}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.advertiseTimeout=0}var t,r,n;return t=e,n=[{key:"googleTrack",value:function(){"function"==typeof window.gtag&&window.gtag("config","UA-108804791-2",{page_path:window.location.pathname})}}],(r=[{key:"clearAdvertiseTimeout",value:function(){this.advertiseTimeout&&clearTimeout(this.advertiseTimeout),this.advertiseTimeout=0}},{key:"advertise",value:function(){this.clearAdvertiseTimeout(),this.advertiseTimeout=setTimeout((function(){var e=document.getElementById("codefund_ad");if(e){var t=document.getElementById("js-codefund");if(t)if(t.src){var r=document.createElement("script");setTimeout((function(){r.src="".concat(t.getAttribute("data-src")),r.id=t.id,r.setAttribute("data-src",t.getAttribute("data-src")),t.remove(),document.body.append(r)}),100)}else t.src=t.getAttribute("data-src")}else{(e=document.createElement("div")).id="codefund";var n=document.querySelector("footer.footer");if(n){var o=document.getElementById("js-codefund");if(o)if(n.appendChild(e),o.src){var a=document.createElement("script");setTimeout((function(){a.src="".concat(o.getAttribute("data-src"),"?v=").concat((new Date).getTime()),a.id=o.id,a.setAttribute("data-src",o.getAttribute("data-src")),o.remove(),document.body.append(a)}),100)}else o.src=o.getAttribute("data-src")}}}),100)}},{key:"apply",value:function(t){var r=this;t.hooks.locationChange.tapPromise("ReloadAds",o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r.advertise());case 1:case"end":return e.stop()}}),e)})))),t.hooks.locationChange.tapPromise("ReloadGoogleTrack",o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.googleTrack());case 1:case"end":return t.stop()}}),t)})))),t.hooks.renderComplete.tap("ReloadAds",o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r.advertise());case 1:case"end":return e.stop()}}),e)}))))}}])&&a(t.prototype,r),n&&a(t,n),e}()},250:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=[{path:"/",exact:!0,component:function(){return Promise.all([r.e(2),r.e(4)]).then(r.bind(null,609))},seo:{title:"RoNA",description:"RoNA is a compilation of things companies are doing during this lockdown period.",image:"/images/e7226e02d87a56055616f91de81531de-features.png"},modules:["../components/home"]}];function o(e,t,r,n,o,a,i){try{var s=e[a](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,o)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function s(e){o(i,n,a,s,l,"next",e)}function l(e){o(i,n,a,s,l,"throw",e)}s(void 0)}))}}function i(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,o;return t=e,(r=[{key:"apply",value:function(e){var t=i(n);e.hooks.initRoutes.tapPromise("AppRoutes",a(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.addRoutes(t);case 1:case"end":return r.stop()}}),r)}))))}}])&&l(t.prototype,r),o&&l(t,o),e}()},251:function(e,t,r){r(252),e.exports=r(438)},440:function(e,t,r){e.exports={"m-none":"m-none","p-none":"p-none","m-t-none":"m-t-none","p-t-none":"p-t-none","m-r-none":"m-r-none","p-r-none":"p-r-none","m-b-none":"m-b-none","p-b-none":"p-b-none","m-l-none":"m-l-none","p-l-none":"p-l-none","m-xxs":"m-xxs","p-xxs":"p-xxs","m-t-xxs":"m-t-xxs","p-t-xxs":"p-t-xxs","m-r-xxs":"m-r-xxs","p-r-xxs":"p-r-xxs","m-b-xxs":"m-b-xxs","p-b-xxs":"p-b-xxs","m-l-xxs":"m-l-xxs","p-l-xxs":"p-l-xxs","m-xs":"m-xs","p-xs":"p-xs","m-t-xs":"m-t-xs","p-t-xs":"p-t-xs","m-r-xs":"m-r-xs","p-r-xs":"p-r-xs","m-b-xs":"m-b-xs","p-b-xs":"p-b-xs","m-l-xs":"m-l-xs","p-l-xs":"p-l-xs","m-sm":"m-sm","p-sm":"p-sm","m-t-sm":"m-t-sm","p-t-sm":"p-t-sm","m-r-sm":"m-r-sm","p-r-sm":"p-r-sm","m-b-sm":"m-b-sm","p-b-sm":"p-b-sm","m-l-sm":"m-l-sm","p-l-sm":"p-l-sm","m-md":"m-md","p-md":"p-md","m-t-md":"m-t-md","p-t-md":"p-t-md","m-r-md":"m-r-md","p-r-md":"p-r-md","m-b-md":"m-b-md","p-b-md":"p-b-md","m-l-md":"m-l-md","p-l-md":"p-l-md","m-lg":"m-lg","p-lg":"p-lg","m-t-lg":"m-t-lg","p-t-lg":"p-t-lg","m-r-lg":"m-r-lg","p-r-lg":"p-r-lg","m-b-lg":"m-b-lg","p-b-lg":"p-b-lg","m-l-lg":"m-l-lg","p-l-lg":"p-l-lg","m-xl":"m-xl","p-xl":"p-xl","m-t-xl":"m-t-xl","p-t-xl":"p-t-xl","m-r-xl":"m-r-xl","p-r-xl":"p-r-xl","m-b-xl":"m-b-xl","p-b-xl":"p-b-xl","m-l-xl":"m-l-xl","p-l-xl":"p-l-xl","m-xxl":"m-xxl","p-xxl":"p-xxl","m-t-xxl":"m-t-xxl","p-t-xxl":"p-t-xxl","m-r-xxl":"m-r-xxl","p-r-xxl":"p-r-xxl","m-b-xxl":"m-b-xxl","p-b-xxl":"p-b-xxl","m-l-xxl":"m-l-xxl","p-l-xxl":"p-l-xxl"}},441:function(e,t,r){e.exports={"green-background":"green-background","skeleton-blink":"skeleton-blink",blink:"blink",header:"header",footer:"footer",title:"title",cardText:"cardText",feather:"feather"}}});