(function () {
  app.etsy = app.EtsyApi({ apiKey: 'fku6dpuy3xl34o2hflpvjbc5' });

  function processHash() {
    var hash = location.hash || '#';

    if (!app.router.run(hash.slice(1))) {
      app.notFound()
    }
  }

  window.addEventListener('hashchange', processHash);
  processHash();
})();
