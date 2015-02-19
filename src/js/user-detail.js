//I was originally going to separate the userDetail function
//but I could not determine how to get pass both the userId and $this to only

app.userDetail = function (userId) {
  var api = app.EtsyApi({ apiKey: 'fku6dpuy3xl34o2hflpvjbc5' });
  var userTemplate = _.template($('#userModal').html(), { variable: 'm' });
  var thisUser = $(item).next('.user-modal');

  api.userDetail(userId)
    .done(function (data) {
      // Let's put the data in the console so we can
      // explore it...
      console.log(data);

      $(thisUser).html(userTemplate(data.results[0]));
      $(thisUser).toggleClass('show-user-modal');
    })
    .fail(function (req, status, err) {
      console.log(err);
      $('.main-content').text(err.error);
    });

  $('body').click(function () {
    $('.user-modal').toggleClass('show-user-modal');
  });
}


// var modalToggle = $('.user-modal').toggleClass('show-user-modal');

// var thisUser = $(this).next('.user-modal');
