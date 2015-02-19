app.routingPage = function () {

  var r = Rlite();

  // default
  r.add('', showListing);

  // #users
  r.add('users', showUsers);

  // #users/chris -> r.params.name will equal 'chris'
  r.add('users/:name', function (match) {
    showUser(match.params.name);
  });

  // #users/joe/edit -> r.params.name will be 'joe'
  r.add('users/:name/edit', function (match) {
    $('.main-content').html('<h2>Editing ' + match.params.name + '</h2>');
  });

  function show404Page() {
    $('.main-content').html('<h1>404 Not Found</h1>');
  }

  function showUsers() {
    $.get('views/users.html').done(function (html) {
      $('.main-content').html(html);
    });
  }

  function showUser(username) {
    $.get('views/user.html').done(function (html) {
      var template = _.template(html, { variable: 'm' });

      $('.main-content').html(template({ name: username }));
    });
  }

  // Hash-based routing
  function processHash() {
    // location.hash might look like: '#users/joe'
    // or it might look like this: ''
    // In this last case, we add the '#' so we can
    // just call slice without checking to see if
    // the string is empty or not
    var hash = location.hash || '#';

    // string.slice is a method that slices off chars
    // so, '#users/joe'.slice(1) === 'users/joe'
    if (!r.run(hash.slice(1))) {
      // With Rlite, it's run function returns false
      // if the URL had no matching routes. In this
      // case, we are in a 404 (not found) condition
      show404Page();
    }
  }

  // The browser window emits a 'hashchange' event
  // any time the hash portion of the URL changes.
  // We'll handle that event and call our processHash
  // function.
  window.addEventListener('hashchange', processHash);

  // When the app first loads, run our routing logic
  // to display the current route.
  processHash();

  // TODO: We could improve this in many ways.
  //
  // One, every time we go to the #users or #users/foo route,
  // we are requesting the HTML again. We ought to cache them,
  // instead into an object (or hash table).
  //
  // Another thing, is we are recompiling the user.html template
  // every time we show a user... We could cache the compiled
  // templates, too, so they are compiled once they are downloaded
  // and never again!
};
