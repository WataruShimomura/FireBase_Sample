!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=0)}([function(e,t){console.log("".concat(new Date,": Service Worker is loaded")),workbox.core.setCacheNameDetails({prefix:"starter-react-flux",suffix:"v1",precache:"install-time",runtime:"run-time",googleAnalytics:"ga"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{'revision':'0b215fd7563593772ad8746a00b73328','url':'/bundle.js'},{'revision':'6c86c6c1a33c878aad88bef6da3a2409','url':'/index.html'}]),workbox.routing.registerRoute("https://fonts.googleapis.com/(.*)",new workbox.strategies.CacheFirst({cacheName:"google-fonts",cacheableResponse:{statuses:[0,200]}})),workbox.routing.registerRoute(/.*(?:gstatic)\.com.*$/,new workbox.strategies.CacheFirst({cacheName:"google-static"})),workbox.routing.registerRoute(/\.(?:png|gif|jpg|svg)$/,new workbox.strategies.CacheFirst({cacheName:"image-content",cacheableResponse:{statuses:[0,200]}})),workbox.routing.registerRoute(/\.(?:js|css)$/,new workbox.strategies.StaleWhileRevalidate({cacheName:"static-resources",cacheableResponse:{statuses:[0,200]}})),workbox.routing.registerRoute(/^http.*/,new workbox.strategies.StaleWhileRevalidate({cacheName:"http-content",cacheableResponse:{statuses:[0,200]}}),"GET")}]);