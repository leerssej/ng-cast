angular.module('video-player')
  .service('youTube', function() {
    config = {
      part: 'snippet',
      key: window.YOUTUBE_API_KEY,
      maxResults: 5,
      q: 'Hello',
      videoEmbeddable: true
    },
    $http.get('https://www.googleapis.com/youtube/v3/search', config)
      .then(function(data) {
        console.log(data);
      },
      function(error) {
        console.log(error);
      });
  });
