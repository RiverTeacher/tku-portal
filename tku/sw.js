const SW_VERSION = '2026-04-28';
// インストールして即座にアクティブにする
self.addEventListener('install', (event) => {
    self.skipWaiting();
  });
  
  self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
  });
  
  // 何もキャッシュせず、ネットワークへそのまま通す
  self.addEventListener('fetch', (event) => {
    return; 
  });
