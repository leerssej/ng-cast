angular.module('video-player')
  .component('app', {  
    templateUrl: 'src/templates/app.html',
    // template: require('src/templates/app.html') --> COME BACK (NEEDS DEBUGGING)
    controller: function() {
      this.videos = window.exampleVideoData;
      this.video = window.exampleVideoData[0];
    }
  
  });
