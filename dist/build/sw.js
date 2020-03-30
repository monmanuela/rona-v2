self.paw__env={"PAW_CACHE":"true","PAW_ENV":"production","PAW_HOT":"false","PAW_VERBOSE":"false"};importScripts("/precache-manifest.ac8919510502bc342c8a9d294653306b.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// eslint-disable-next-line
const serviceWorker = self;

serviceWorker.addEventListener('install', () => {
  serviceWorker.skipWaiting();
});
serviceWorker.addEventListener('activate', () => {
  serviceWorker.clients.claim();
});

serviceWorker.workbox.setConfig({
  debug: serviceWorker.paw__env.PAW_ENV !== 'production',
});

const getOfflineHtml = () => {
  const scripts = serviceWorker.paw__offline_assets.filter(a => a.endsWith('.js')).map(js => `<script type="text/javascript" src="${js}" async></script>`).join('');
  return `<!DOCTYPE html><html><head></head><body><div id="${serviceWorker.paw__injected_variables.clientRootElementId}"></div>${scripts}</body></html>`;
};

serviceWorker.workbox.routing.registerRoute(
  new RegExp(`^${serviceWorker.location.origin}/.*__hmm_update.*`),
  serviceWorker.workbox.strategies.networkOnly(),
);

const assetsRegExp = /\.(css|js|jpg|png|jpeg|gif|woff|woff2|ttf|eot|ico|mp4|avi)$/;

const networkFirstHandler = serviceWorker.workbox.strategies.networkFirst();
const cacheFirstHandler = serviceWorker.workbox.strategies.cacheFirst();
const staleHandler = serviceWorker.workbox.strategies.staleWhileRevalidate();

serviceWorker.workbox.routing.setDefaultHandler(({ event }) => {
  const { request } = event;
  const requestMethod = request.method.toUpperCase();

  if (requestMethod !== 'GET') {
    return fetch(event.request);
  }

  if (
    request.url.indexOf(serviceWorker.location.origin) !== -1
    && assetsRegExp.test(request.url)
  ) {
    return cacheFirstHandler.handle({ event });
  }

  if (
    request.url.indexOf(serviceWorker.location.origin) === -1
    && assetsRegExp.test(request.url)
  ) {
    return staleHandler.handle({ event });
  }

  if (
    request.url.indexOf(serviceWorker.location.origin) !== -1
    && request.headers.get('accept').indexOf('html') !== -1
    && request.mode === 'navigate'
  ) {
    return networkFirstHandler.handle({ event }).then((response) => {
      if (!response) {
        return new Response(
          getOfflineHtml(),
          { headers: { 'Content-Type': 'text/html' } },
        );
      }
      return response;
    }).catch(() => new Response(
      getOfflineHtml(),
      { headers: { 'Content-Type': 'text/html' } },
    ));
  }

  return networkFirstHandler.handle({ event });
});

// eslint-disable-next-line
serviceWorker.workbox.precaching.precacheAndRoute(serviceWorker.__precacheManifest);

;self.paw__offline_assets = ["/css/99c7a5a6688eecf730d8.css","/js/99c7a5a6688eecf730d8.js","/css/7d82b48c62af3c06d3c3.css","/js/7d82b48c62af3c06d3c3.js"];self.paw__injected_variables = {"workboxDebug":true,"port":"3003","host":"0.0.0.0","appRootUrl":"","cdnUrl":"","serverSideRender":true,"serviceWorker":true,"singlePageApplication":false,"asyncCSS":true,"polyfill":"internal","react":"internal","clientRootElementId":"app","assetsMaxAge":2592000000,"hstsEnabled":true,"hstsMaxAge":31536000,"hstsIncludeSubDomains":false,"hstsPreload":false,"noJS":false,"hashedRoutes":false,"resourcesBaseUrl":"/"};