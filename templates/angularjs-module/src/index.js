import angular from 'angular'
import template from './index.html'
import './index.scss'

const someAngularjsModule = angular.module('SomeAngularjsModule', [])
someAngularjsModule.directive('someAngularjsModule', () => {
  return {
    templateUrl: template,
    controller: 'SomeAngularjsModuleCtrl'
  }
})
someAngularjsModule.controller('SomeAngularjsModuleCtrl', ['$scope', ($scope) => {
  $scope.hello = 'world'
}])
