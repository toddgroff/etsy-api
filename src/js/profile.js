app.router.add('profiles/:userId', function (url) {
  var profileTemplate = _.template($('#etsyProfile').html(), { variable: 'm' });

  app.etsy.userDetail(url.params.userId)
    .done(function (data) {
      $('.main-content').html(profileTemplate(data.results[0]));
    })
    .fail(function (req, status, err) {
      console.log('Failed');
      console.log(err);
      $('.main-content').html(err.error);
    });

});
