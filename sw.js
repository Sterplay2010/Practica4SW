self.addEventListener('install',(event)=>{
    console.log("Service Worker => Installed")
    const respCache = caches.open('cache-v1')
        .then((cache)=>{
            return cache.addAll([
                './',
                './index.html',
                './css/style.css',
                './js/app.js',
                'https://cdn.jsdelivr.net/npm/daisyui@2.31.0/dist/full.css',
                'https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css',
                'https://reqres.in/api/users?page=1'
            ]);
        });
    event.waitUntil(respCache);
})

self.addEventListener('fetch',(event)=>{
    const resp = caches.match(event.request)
    event.respondWith(resp)
})