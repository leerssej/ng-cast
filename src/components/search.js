angular.module('video-player')
  .component('search', {
    templateUrl: 'src/templates/search.html',
    bindings: {
      onClick: '<'
    },
    
    controller: function() {
      this.newSearch = '';
    }
  
  });
