"use strict";var precacheConfig=[["/m_avato/index.html","1e31c7f8a18193e00ebb4525a19b9377"],["/m_avato/static/css/main.52e2fda5.css","7f5c289468fea1e307980070426b0ede"],["/m_avato/static/js/main.ff25c620.js","ada97ea30a269d957fe79f719b5aaa28"],["/m_avato/static/media/add.81e254ce.svg","81e254cefd9111e0e78e55cdd7e926bb"],["/m_avato/static/media/autosearch.e81c463a.svg","e81c463ae6372d152fcaf0399aa7328b"],["/m_avato/static/media/avatar.534bb814.svg","534bb814771233bf0212c27a8c753ee7"],["/m_avato/static/media/avito.fb7d9385.svg","fb7d9385a5a15945e646ccf1829e403c"],["/m_avato/static/media/favorites.68949cee.svg","68949cee5dd2a5e3c7808ad876cc47f4"],["/m_avato/static/media/footer_logo.2e8b3c61.svg","2e8b3c61254e6db9b1a5b7fbeb6bb40c"],["/m_avato/static/media/menu.3a259ee0.svg","3a259ee037535bfbcc319b2384a0cf12"],["/m_avato/static/media/messenger.b22d90b6.svg","b22d90b6f50b8c660239fad235a60178"],["/m_avato/static/media/plus.2a6fb41f.svg","2a6fb41f123f083992512de8895e1ec7"],["/m_avato/static/media/profile.fec710b0.svg","fec710b01546e5ea5dd6c92b5856ab12"],["/m_avato/static/media/search.6c1c9900.svg","6c1c990093d93c31e22f75e7780fffd6"],["/m_avato/static/media/settings.327480fe.svg","327480febb9a3cd1b05171097d7fe73c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/m_avato/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});