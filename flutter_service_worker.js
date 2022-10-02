'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3475e1871dbff5b35e0fa9edff447c71",
"assets/assets/img/aboutustrash.png": "95c6c93fc48068af654c2c28c9034812",
"assets/assets/img/addmoney.png": "63015beac45db19ba166c6f646d701e1",
"assets/assets/img/asan_pardaz.png": "982931caa01c59e3bef4039ac8687fbd",
"assets/assets/img/back.png": "67c964bca45040ebb9f77e2c1e2278ac",
"assets/assets/img/behrooblogo.png": "37f6ca2889171c56c84898e954fc8127",
"assets/assets/img/bell.png": "a11fe3d626b83161ef47e4644fa16e79",
"assets/assets/img/buy_charge.png": "b0dbef7d3f5b354372910c5535ddb3e7",
"assets/assets/img/cancel.png": "1cbe8c8148cae1fe59bfa5eb11908280",
"assets/assets/img/card.png": "873392fcbdfc4c5a5443b0a9299a0c6f",
"assets/assets/img/coin.png": "de29acf860692e28a5c0d8092a3f2779",
"assets/assets/img/delete.png": "16664eede6238138ac9132163d06ffa4",
"assets/assets/img/digikala2.png": "d9302c9094c99910ca2780b14478fa0f",
"assets/assets/img/donating.png": "321b308b4a225d0d718133bbb50d06cc",
"assets/assets/img/down.png": "b5bb457c885fe3d548144ba8edece0ba",
"assets/assets/img/editprofile.png": "2e917e8d18a89dcd32da0769287e3863",
"assets/assets/img/edit_squre.png": "7a0c3df38353f9906a3000407003f036",
"assets/assets/img/exit.png": "73a5c1ca2a3ff9c74aba1d18903953ef",
"assets/assets/img/gift.png": "88bb9fe8d5f3713a8457de05c0d78a1b",
"assets/assets/img/help.png": "5c4dbe1f816e57938f8d5f92b71ebe81",
"assets/assets/img/history.png": "f3dd142c4329bf2d810baab43382d2a8",
"assets/assets/img/home_payment.png": "292a2b82adf626a021c78f570f2369a7",
"assets/assets/img/image_choose.png": "c1cf8958536969513989349480cd143c",
"assets/assets/img/instagram.png": "804403b14c3f8553cda82551b44fc319",
"assets/assets/img/insurance.png": "090daca062e198d1ba4885d5cec12116",
"assets/assets/img/insurance_buy.png": "f4511d3caae1e7216744ce3c80689130",
"assets/assets/img/location.png": "8ca07cff981036224b587d7565aecfb0",
"assets/assets/img/mashin.png": "ed5cfe6e5de02ae0276709bbec2aee09",
"assets/assets/img/message.png": "e13ef3818b82c7ce419486dd61484672",
"assets/assets/img/message2.png": "d7aef942bf5f4ada6bd93d8672a20798",
"assets/assets/img/microplastics.png": "b126fcba247f5e8c04898ecc8d232f2e",
"assets/assets/img/myLocate.png": "492eaa6fda4c14e042105b6975ce7fb3",
"assets/assets/img/myprofile.png": "df1e687755d8fafa3ee86ec924f3df93",
"assets/assets/img/notification.png": "fbca211b856bee3e3740a71749d10686",
"assets/assets/img/otp.png": "2f6521c875dcb9287bb4bdfe22cc003e",
"assets/assets/img/party.png": "8e00c5d1c8b43269087b186f0ac84071",
"assets/assets/img/pig.png": "0f1958aecc0764aa73d2063cdeedbf9f",
"assets/assets/img/planet.png": "5cb19b84716be35f3df7badc1dcde545",
"assets/assets/img/plastic_bottle.png": "8d698ea91c4589768bc69fd8629c0df8",
"assets/assets/img/pricelist.png": "8f47516bcf585d389466041657aecfe4",
"assets/assets/img/profile.png": "e676ece0f18cd1bbf8ae4dcbc1a8198d",
"assets/assets/img/profilehistory.png": "c901ff06d65776d59a9dc7c3e82a858e",
"assets/assets/img/profile_mobile.png": "46da4740d6d64cb79a5883995350a37c",
"assets/assets/img/rank.png": "f70bd7ed37c248a4e05689a1f6952c96",
"assets/assets/img/rank_star.png": "f366a7fabe6f745f005d482e093a2a71",
"assets/assets/img/services.png": "ef538be9562bc1eff9a0dd311561f113",
"assets/assets/img/setting.png": "92c25f37d91bbc70ba1a197b38c0b57c",
"assets/assets/img/settings.png": "fa189cc88f028fa137a9ced30052d8eb",
"assets/assets/img/site.png": "94bf183b8559a477982df213699c6045",
"assets/assets/img/support.png": "b25606d570ecd0502f54a07c58b14456",
"assets/assets/img/telegram.png": "88c3ad533febe3d0bb6b5d5ba71ef7c1",
"assets/assets/img/time.png": "ae06e6e311df69b4c7b7b76e5779f78c",
"assets/assets/img/trash.png": "765ba6ed6b117ddc75f12c8c9f26831b",
"assets/assets/img/trash_des.png": "386c695dcfaabf9c684bcc110bddd167",
"assets/assets/img/twitter.png": "357fbe7e5064bcb10d6f17834238e6c3",
"assets/assets/img/type.png": "9eb7a11e6acd1b45d22d6607707e57e2",
"assets/assets/img/wallet.png": "d5d58f878fdde876119e87abcdadb510",
"assets/assets/img/whatsapp.png": "8775f3cd9a16951ad3e83aaaeba19168",
"assets/assets/svg/awards.svg": "fcfb986a9e92d14191d7f1464d03fa55",
"assets/assets/svg/back.svg": "de7d9a832e00096cfa46e71c77fa6753",
"assets/assets/svg/buy_charge.svg": "975b97981a72fe7e4156c22b306245d7",
"assets/assets/svg/donating.svg": "206b5000db3a9a8fdb90cfd7f5e9b8f8",
"assets/assets/svg/edit_profile.svg": "db8d1e64a4551aabfd390cbc55edb8bb",
"assets/assets/svg/edit_squre.svg": "6b581dd81b97db76cabd95ee8bf25c37",
"assets/assets/svg/exit.svg": "c2bc30ad2398dc71512f7c174cf58d9e",
"assets/assets/svg/history.svg": "ecc8cb3e99fd00f78fb6ad06f48812f1",
"assets/assets/svg/history_bottombar.svg": "8fea9d63cdd6d7bb6057f230d621b42c",
"assets/assets/svg/home_payment.svg": "b3ed5f22d6e04be800fecf79e30e1d59",
"assets/assets/svg/insurance_buy.svg": "049231e81040565957506936b96cfc34",
"assets/assets/svg/microplastics.svg": "f8efb0b6190288847fb2394dd691cdf4",
"assets/assets/svg/notification.svg": "3425935f756609303f8a092b332939c2",
"assets/assets/svg/otp.svg": "b97d4aa96fec28c3b5357e13698b38b4",
"assets/assets/svg/profile.svg": "5257510d1fcef96bd1b75f7465b8267a",
"assets/assets/svg/profile_mobile.svg": "acd2bb4fe31e5979658b6faa017abd24",
"assets/assets/svg/raise_wallet.svg": "a43d44cb4bc5649f6463a28c6cf6a723",
"assets/assets/svg/rank.svg": "5a20a790bcc6c3c664db9dc7bb92bd66",
"assets/assets/svg/services.svg": "551889c089296382ac53d821058673eb",
"assets/assets/svg/trash.svg": "c1aeae4dc4177f3651b2e2525f87f271",
"assets/assets/svg/type.svg": "ae3c25f07111c74e1ee1a7de847f28e6",
"assets/assets/svg/wallet.svg": "50103c077467d5d43ead8596e822be1b",
"assets/assets/voice/arrivering.mp4": "d77e990d5a7800e6edbbac0daf7eddb3",
"assets/assets/voice/taeedring.mp4": "44ff968bad49221f2451449cc92adcf9",
"assets/FontManifest.json": "bda0e29d58993b7c3ec9ddc699d54295",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Yekan.ttf": "d26ebd09d8af91797d5a577347fdc3ae",
"assets/NOTICES": "d0570ccf01f24207d2590ce3c49e9798",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "dd6e4ad91c56eed64a6e65e15d9624af",
"firebase-messaging-sw.js": "ac5b859918ff9bae0693d8a74bea58f0",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/android-icon-144x144.png": "95e4e8742ef259a3f9bdec3be48b46ed",
"icons/android-icon-192x192.png": "f8d4512d21e2d0f0a755aba5d9f53d3b",
"icons/android-icon-36x36.png": "3d8a7825aaddb3dcc1346ca9645d9653",
"icons/android-icon-48x48.png": "df8ee0feec442f0340930d9015a6402e",
"icons/android-icon-72x72.png": "9c32df04cad6d4c1d372e961a2632c2c",
"icons/android-icon-96x96.png": "b5052782b359f17fe471f797b290274a",
"icons/apple-icon-114x114.png": "b7c271c584ea084faed350da140fa572",
"icons/apple-icon-120x120.png": "3373e4586ff76322169322a743ffaab2",
"icons/apple-icon-144x144.png": "95e4e8742ef259a3f9bdec3be48b46ed",
"icons/apple-icon-152x152.png": "f2deb057dcada2086356bc761e742d0d",
"icons/apple-icon-180x180.png": "cdc22bfeec9c076538b3646c4463d80b",
"icons/apple-icon-57x57.png": "b5329d15f67046df938f62ed9082b901",
"icons/apple-icon-60x60.png": "e1ee4d7a3fbc48a088f2c051828bdbc1",
"icons/apple-icon-72x72.png": "9c32df04cad6d4c1d372e961a2632c2c",
"icons/apple-icon-76x76.png": "abdca4bafba75f5aa8a289634eead1a2",
"icons/apple-icon-precomposed.png": "24ba59e8b687408be9333a43e925ed23",
"icons/apple-icon.png": "24ba59e8b687408be9333a43e925ed23",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "9e6957882d619b679bd9ce58d0ba02dc",
"icons/favicon-32x32.png": "64bc95959e05a343026e79fbe100d781",
"icons/favicon-96x96.png": "b5052782b359f17fe471f797b290274a",
"icons/favicon.ico": "4d47451d1cbbe8c790d6067ce128ad57",
"icons/icon-192.png": "dd6e4ad91c56eed64a6e65e15d9624af",
"icons/icon-512.png": "dd6e4ad91c56eed64a6e65e15d9624af",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "95e4e8742ef259a3f9bdec3be48b46ed",
"icons/ms-icon-150x150.png": "21bd9e873066b7a3674086fc69631e10",
"icons/ms-icon-310x310.png": "d3fde35ce54a9076bacddfaed60b9cd4",
"icons/ms-icon-70x70.png": "4bc333530cc225b7589fc5f854c147f9",
"index.html": "63be490052c9003c95f9f82af242e4f8",
"/": "63be490052c9003c95f9f82af242e4f8",
"main.dart.js": "649468c0663e000dea2503ac5dc57ad3",
"manifest.json": "6f82c8fb6a19c83bc1183d343f482aaf",
"version.json": "1fdf8a83435272f2500ab6f70dab6a4f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
