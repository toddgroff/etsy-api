(function () {
  app.etsy = app.EtsyApi({ apiKey: 'fku6dpuy3xl34o2hflpvjbc5' });

  function processHash() {
    var hash = location.hash || #;

    if (!app.route.run(hash.slice(1))) {
      app.notFound()
    }
  }

  window.addEventListener('hashchange', processHash);
}();

// // app.userDetail();
//
//
// (function () {
//   // Set up a single instance of our Etsy API.
//   app.etsy = app.EtsyApi({ apiKey: 'jgeqmbakgybo48lww24232km' });
//
//   // Set up our routing 'n such
//   function processHash() {
//     var hash = location.hash || '#';
//
//     // hash === '#users/132'
//     // hash.slice(1) === 'users/132'
//     if (!app.router.run(hash.slice(1))) {
//       app.notFound();
//     }
//   }
//
//   window.addEventListener('hashchange', processHash);
//   processHash();
// })();
