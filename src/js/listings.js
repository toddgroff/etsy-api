app.router.add('', function () {
  var listTemplate = _.template($('#etsyList').html(), { variable: 'm' });

  app.etsy.listings()
    .done(function (data) {
      $('.main-content').html(listTemplate({ items: data.results }));
    })
    .fail(function (req, status, err) {
      console.log(err);
      $('.main-content').text(err.error);
    });

});
