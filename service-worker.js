/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "64446b41a74f5c331b1305ec14873452"
  },
  {
    "url": "adv_bg.jpg",
    "revision": "ad2f1725407aeec1ae9c5c00ff9b1e47"
  },
  {
    "url": "assets/css/0.styles.b6b8f0ff.css",
    "revision": "d861ac84287c3e51b52ea3e851847792"
  },
  {
    "url": "assets/img/adv_bg.ad2f1725.jpg",
    "revision": "ad2f1725407aeec1ae9c5c00ff9b1e47"
  },
  {
    "url": "assets/img/photo.b6dac963.jpg",
    "revision": "b6dac963d3eb7b7fbcc0712efc296281"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b2674951.js",
    "revision": "80853a031adb02e471c7a7575cfedcd3"
  },
  {
    "url": "assets/js/11.758a44cf.js",
    "revision": "e5a9300bd659ec0e9f1a0acb58b17a7a"
  },
  {
    "url": "assets/js/12.5dcab2f3.js",
    "revision": "39990e266ddc5ecf5ac4743ba6a71de0"
  },
  {
    "url": "assets/js/13.ccafcdd5.js",
    "revision": "deea1d846e2640be9281fd9669eb56a5"
  },
  {
    "url": "assets/js/14.6cf93aa0.js",
    "revision": "67bf0a6591091cf54ee1ee1b40ce08ab"
  },
  {
    "url": "assets/js/15.788055a7.js",
    "revision": "a589c9429dbb95f49e9ad797974cd8d2"
  },
  {
    "url": "assets/js/16.53b0d5e6.js",
    "revision": "e05a2ff388abbb41429b18f48cf99baf"
  },
  {
    "url": "assets/js/2.22127595.js",
    "revision": "c44edd58d2be6f2305e743343d573ceb"
  },
  {
    "url": "assets/js/3.9e3b7d42.js",
    "revision": "57b139c564807840d9444a8f54dfa497"
  },
  {
    "url": "assets/js/4.34973d24.js",
    "revision": "7bbe7237ae20a6d5505ad485aed0b192"
  },
  {
    "url": "assets/js/5.efb4c11d.js",
    "revision": "6c8ee034053528dacc0620febe2acd74"
  },
  {
    "url": "assets/js/6.55e263cd.js",
    "revision": "aa9e21c18ae4e185535668958ddacf07"
  },
  {
    "url": "assets/js/7.e9eba7f5.js",
    "revision": "db343e67022078b6504dd84d80d4f5d4"
  },
  {
    "url": "assets/js/8.bbfd0666.js",
    "revision": "9cf58ec4e6c7cf6ac4c9d448301f3b19"
  },
  {
    "url": "assets/js/9.452850de.js",
    "revision": "cb8e5ba03738fd9680108c384f5a691f"
  },
  {
    "url": "assets/js/app.af16a96f.js",
    "revision": "e1babfdd5227ae43d4a1b310d592fbad"
  },
  {
    "url": "index.html",
    "revision": "f0d73d084a78f29fb758214741ac2d12"
  },
  {
    "url": "MyLife/index.html",
    "revision": "1c5570a484d4823229d241e21a104a08"
  },
  {
    "url": "MyLife/life.html",
    "revision": "d300b32c7f880ccb38f0aba0fc0e3252"
  },
  {
    "url": "notes/be/php.html",
    "revision": "7fc36e07ce08f0454f866d4ae8841b10"
  },
  {
    "url": "notes/fe/es6.html",
    "revision": "b3a713e17a6932c71251be12fbfd7a46"
  },
  {
    "url": "notes/fe/index.html",
    "revision": "c077263690f80546e2d3d6a82184d14f"
  },
  {
    "url": "notes/fe/js.html",
    "revision": "5033454e5e7543b64dcdee84765e268a"
  },
  {
    "url": "notes/fe/mobile.html",
    "revision": "f60eaccdf6feb874ba572ac40ce2d9b7"
  },
  {
    "url": "notes/fe/vue.html",
    "revision": "50a1a8d91f480af21a15a34db4dc16f7"
  },
  {
    "url": "notes/other/git.html",
    "revision": "3f0dff3f00aa7943772733cefe4c70f9"
  },
  {
    "url": "notes/other/index.html",
    "revision": "508265f56e074cb218b747085ab26652"
  },
  {
    "url": "photo.jpg",
    "revision": "b6dac963d3eb7b7fbcc0712efc296281"
  },
  {
    "url": "README.1xxxxxxx.html",
    "revision": "70c15bd9229bee26ce5ac66027a5bd52"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
