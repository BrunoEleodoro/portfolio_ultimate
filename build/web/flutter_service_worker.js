'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "f5ca0c012ce1244e88205d5c1ce0d6c3",
"/": "f5ca0c012ce1244e88205d5c1ce0d6c3",
"main.dart.js": "1aad7819160d973e686b87c96df28f6f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "786a450a7c14b208b9f09db020083638",
"assets/LICENSE": "2838286d322aa7910034b3cc7c1cff20",
"assets/AssetManifest.json": "eaba7d19e1278e80e9df4cef88f733f2",
"assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/talk-geolocation.png": "ce3ca101e077ef0db8a0ebad208dcb56",
"assets/assets/hack-in-sampa2.jpeg": "4bc0c2d3ccb7abaabfc9211e3dd143f5",
"assets/assets/hack-in-sampa3.jpg": "bdb7fccbc757cb94aa8a6f70127d3e09",
"assets/assets/hack-campinas.jpg": "bad10c1e292e74b663e27ac5527f19e5",
"assets/assets/hack-synvia.jpg": "3446cc08b27d074d31fe3314c95460bc",
"assets/assets/hack-sherlock.png": "9b56445eaf3911f724c4bc849bbd60f2",
"assets/assets/hack-ima.jpg": "4b495a5c3ac0b0773ae3038445df408e",
"assets/assets/language-flutter.png": "1581778e963a224c0cd47e08b27c0eea",
"assets/assets/hack-ibm.jpg": "a2753d18bfebbf2b6f157fcfc6e8b288",
"assets/assets/hack-dplasma.jpg": "d6839f77a2077647180d3dfea7a16262",
"assets/assets/talk-fluttertalks.jpg": "35e280295ea1d75e432cc7b03675a210",
"assets/assets/language-mongo.png": "4dd5973612e521132d61ef050d1f4488",
"assets/assets/language-docker.png": "15c490e97ec5f2e412f80ef6c4252848",
"assets/assets/hack-santos.jpg": "f624bd5aa6dd68be4489651c7f5e60be",
"assets/assets/language-node.png": "b3370842b0743c371f81a26385c70912",
"assets/assets/hack-callforcode.jpg": "64e8632c856acdfa6783689698236983",
"assets/assets/language-react.png": "4c37725dbd3c2eb9a8e00899b5d3c9fd",
"assets/assets/hack-nasa.jpg": "10ce01c1e65ac41db509b43010546f89",
"assets/assets/hack-cvlatam.jpg": "223147c3f2128f184ed6e2001370a1a6",
"assets/assets/talk-unicamp.jpg": "b82a66db3dc9c1d928305a8a46ff26d8",
"assets/assets/hack-flutter.jpg": "2473fb2be029f370f65d28930fb961a1",
"assets/assets/hack-callforcode2.jpeg": "bebfce127a576a081966a21b1a38edcb",
"assets/assets/talk-movile.png": "5a7693e0a6edcb93efdf97f59ad94dfc"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
