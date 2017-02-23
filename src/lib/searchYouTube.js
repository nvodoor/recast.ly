var searchYouTube = (options, callback) => {
  // TODO
  console.log(options.query);
  console.log(callback);
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {key: options.key, q: options.query, maxResults: options.max},
    contentType: 'application/json',
    success: function(data) {
      console.log(data);
    }
  });
};

window.searchYouTube = searchYouTube;
