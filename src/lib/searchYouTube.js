var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {key: options.key, q: options.query, maxResults: options.max, part: 'snippet', order: 'date', videoEmbeddable: 'true', type: 'video'},
    contentType: 'application/json',
    success: function(data) {
      callback(data.items);
      console.log(data.items);
    }
  });
};

window.searchYouTube = searchYouTube;
