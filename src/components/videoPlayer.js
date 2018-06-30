angular.module('video-player')
  .component('videoPlayer', {
    bindings: {
      video: '<'
    },
    
    templateUrl: 'src/templates/videoPlayer.html',
    
    controller: function($scope) {
      //this.video = window.exampleVideoData[0];
      // this.videoId = `https://www.youtube.com/embed/${this.video.id.videoId}`;
    }
  });
