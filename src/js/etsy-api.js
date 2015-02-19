app.EtsyApi = function (spec) {
  if (!spec.apiKey) {
    throw new Error('An API key is required!');
  }

  var baseUrl = 'https://openapi.etsy.com/' + (spec.apiVersion || 'v2');

  function fetchUrl(url) {
    var promise = $.Deferred();

    var req = $.getJSON(url).done(function(data) {
      if(!data.ok) {
        promise.reject(req,'Unknown error', data);
      } else {
        promise.resolve(data);
      }
    });

    return promise
  }

  var self = {
    listings: function () {
      var url = baseUrl + '/listings/active.js?includes=MainImage&api_key=' + spec.apiKey + '&callback=?';

      return fetchUrl(url);
    },

    userDetail: function (userId) {
      var url = baseUrl + '/users/' + userId + '/profile.js?api_key=' + spec.apiKey + '&callback=?';

      return fetchUrl(url);
    }
  };

  return self;
};
