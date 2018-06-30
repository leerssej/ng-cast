angular.module('video-player')
  .component('app', {   
    templateUrl: 'src/templates/app.html',
    // template: require('src/templates/app.html') --> COME BACK (NEEDS DEBUGGING)
    controller: function($scope) {
      this.videos = window.exampleVideoData;
      this.video = window.exampleVideoData[0];
      
      console.log(this);
      
      this.changeVideo = video => {
        //console.log('changeVideo Called in App.js', video);
        console.log(this);
        this.video = video;
      };
    }
  
  });
