self.addEventListener("install",(e=>{e.waitUntil(caches.open("fox-store").then((e=>e.addAll([]))))})),self.addEventListener("fetch",(e=>{console.log(e.request.url),e.respondWith(caches.match(e.request).then((t=>t||fetch(e.request))))}));
//# sourceMappingURL=sw.js.map
