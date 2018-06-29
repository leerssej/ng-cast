angular.module('video-player')
  .component('videoListEntry', {
    templateUrl: 'src/templates/videoListEntry.html',
  
    controller: function($scope) {
      this.video = $scope.$parent.video;
    }
  
  });
