angular.module('Avertra', []);

function MainCtrl($scope) {
  
}


angular.module('Avertra').directive('averteramenu', function(){
 
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    templateUrl: 'averteramenu_template.html',
    controller: function($scope) {
       
    },
    replace: true, //replace the directive element with the output of the template.
  };
});