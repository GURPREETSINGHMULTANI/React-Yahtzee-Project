"use strict";var precacheConfig=[["/React-Yahtzee-Project/index.html","e594290ec7fef00e8e27786573e70205"],["/React-Yahtzee-Project/static/css/main.2e68ed50.css","4d80764e1fc2b44bffbf4bb4c0bd27b2"],["/React-Yahtzee-Project/static/js/main.0bc8b4ea.js","a59b2e0cc56dcc44607057b93d72c7fb"],["/React-Yahtzee-Project/static/media/fa-brands-400.099a9556.woff","099a9556e1a63ece24f8a99859c94c7d"],["/React-Yahtzee-Project/static/media/fa-brands-400.30cc681d.eot","30cc681d4487d2f561035ba24a68c629"],["/React-Yahtzee-Project/static/media/fa-brands-400.3b89dd10.ttf","3b89dd103490708d19a95adcae52210e"],["/React-Yahtzee-Project/static/media/fa-brands-400.ba7ed552.svg","ba7ed552362f64d30f6d844974d89114"],["/React-Yahtzee-Project/static/media/fa-brands-400.f7307680.woff2","f7307680c7fe85959f3ecf122493ea7d"],["/React-Yahtzee-Project/static/media/fa-regular-400.0bb42845.svg","0bb428459c8ecfa61b22a03def1706e6"],["/React-Yahtzee-Project/static/media/fa-regular-400.1f77739c.ttf","1f77739ca9ff2188b539c36f30ffa2be"],["/React-Yahtzee-Project/static/media/fa-regular-400.7124eb50.woff","7124eb50fc8227c78269f2d995637ff5"],["/React-Yahtzee-Project/static/media/fa-regular-400.7630483d.eot","7630483dd4b0c48639d2ac54a894b450"],["/React-Yahtzee-Project/static/media/fa-regular-400.f0f82301.woff2","f0f8230116992e521526097a28f54066"],["/React-Yahtzee-Project/static/media/fa-solid-900.1042e8ca.eot","1042e8ca1ce821518a2d3e7055410839"],["/React-Yahtzee-Project/static/media/fa-solid-900.376c1f97.svg","376c1f97f6553dea1ca9b3f9081889bd"],["/React-Yahtzee-Project/static/media/fa-solid-900.605ed792.ttf","605ed7926cf39a2ad5ec2d1f9d391d3d"],["/React-Yahtzee-Project/static/media/fa-solid-900.9fe5a17c.woff","9fe5a17c8ab036d20e6c5ba3fd2ac511"],["/React-Yahtzee-Project/static/media/fa-solid-900.e8a427e1.woff2","e8a427e15cc502bef99cfd722b37ea98"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),r=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var r="/React-Yahtzee-Project/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});