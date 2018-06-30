angular.module('video-player')
  .component('app', {   
    templateUrl: 'src/templates/app.html',
    controller: function($scope) {
      this.videos = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];
      
      this.selectVideo = video => {
        this.currentVideo = video;
      };
    }
  
  });
