app.etsyPage = function () {
  var api = app.EtsyApi({ apiKey: 'fku6dpuy3xl34o2hflpvjbc5' });
  var listTemplate = _.template($('#etsyList').html(), { variable: 'm' });

  api.listings()
    .done(function (data) {
      // Let's put the data in the console so we can
      // explore it...
      console.log(data);
      $('.main-content').html(listTemplate({ items: data.results }));

      $('.about-user').mouseenter(function(api) {

        var item = $(this);
        var userId = item.data('userid');
        var thisUser = $(item).next('.user-modal');

        // console.log(userId);
        // app.userDetail(userId);
        $(thisUser).addClass('show-user-modal');

        var api = app.EtsyApi({ apiKey: 'fku6dpuy3xl34o2hflpvjbc5' });
        var userTemplate = _.template($('#userModal').html(), { variable: 'm' });

        api.userDetail(userId)
          .done(function (data) {
            // Let's put the data in the console so we can
            // explore it...
            console.log(data);

            $(thisUser).html(userTemplate(data.results[0]));
          })
          .fail(function (req, status, err) {
            console.log(err);
            $('.main-content').text(err.error);
          });

        // $('body').click(function (e) {
        //   e.stopPropagation();
        //   $('.user-modal').removeClass('show-user-modal');
        // });
      });
      
      $('.user-modal').mouseleave(function (e) {
        e.stopPropagation();
        $('.user-modal').removeClass('show-user-modal');
      });
    })
    .fail(function (req, status, err) {
      console.log(err);
      $('.main-content').text(err.error);
    });
};
