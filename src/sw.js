var token = "";
self.addEventListener('fetch', event => {
  if(event.request?.url?.includes('grafana')){
    const modifiedHeaders = new Headers(event.request.headers);
    modifiedHeaders.set('Authorization', 'Bearer ' + token);
    const newRequest = new Request(event.request, {
      headers: modifiedHeaders,
      mode: 'cors'  
    });
    event.respondWith(fetch(newRequest));
  
  }else{
    event.respondWith(fetch(event.request));
  }
 
});

self.addEventListener('message', event => {
  token = event.data.token
});

// Any other custom service worker logic can go here.
