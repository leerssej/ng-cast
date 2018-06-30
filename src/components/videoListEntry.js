angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      onClick: '<',
      video: '='
    }, 
    
    templateUrl: 'src/templates/videoListEntry.html',
  
    controller: function($scope) {
      //this.video = $scope.$parent.video;
    }
    
    // changeVideo: function(something) {
    //   console.log(something);
    //   console.log('made it');
    // }
  
  });
