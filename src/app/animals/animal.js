angular.module('ngBoilerplate.animals', [])

.config(function config( $stateProvider ) {
  $stateProvider
  .state( 'animals', {
    url: '/animal',
    views: {
      "main": {
        controller: 'AnimalListCtrl',
        templateUrl: 'animals/animal_list.tpl.html'
      }
    },
    data: { pageTitle: 'Animals' }
  })
  .state( 'new', {
    url: '/animal/new',
    views: {
      "main": {
        controller: 'AnimalCreateCtrl',
        templateUrl: 'animals/animal_create.tpl.html'
      }
    },
    data: { pageTitle: 'Create Animal' }
  });
});