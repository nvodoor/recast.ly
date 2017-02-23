var searchYouTube = (options, callback) => {
  // TODO
  console.log(options.query);
  console.log(callback);
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {key: options.key, query: options.query, max: options.max},
    contentType: 'application/json',
    success: function(data) {
      console.log(data);
    }
  });
};

window.searchYouTube = searchYouTube;
