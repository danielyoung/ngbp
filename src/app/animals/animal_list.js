angular.module('ngBoilerplate.animals')
.controller( 'AnimalListCtrl', function AnimalListCtrl( $scope ) {
  $scope.animals = ['Dog', 'Cat', 'Koala', 'Panda'];
});