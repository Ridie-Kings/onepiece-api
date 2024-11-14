
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('api-cache').then(cache => {
            console.log("Service Worker instalado y caché inicial creada");
            return cache.addAll([
                // Añadir aqui el logo y demas imagenes que se quieran cachear y sean multipagina
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    if (event.request.destination === 'image') {
        event.respondWith(
            caches.match(event.request).then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(event.request)
                    .then(response => {
                        return caches.open('api-cache').then(cache => {
                            cache.put(event.request, response.clone());
                            return response;
                        });
                    })
                    .catch(error => {
                        console.error('Fetch failed; returning offline image', error);
                    });
            })
        );
        // } else if (event.returnValue.param = '/api/characters') ||  {

    }
    else {
        event.respondWith(
            caches.match(event.request)
                .then(cachedResponse => {
                    return cachedResponse || fetch(event.request);
                })
                .catch(error => {
                    console.error('Fetch failed; returning fallback content', error);
                })
        );
    }
});

