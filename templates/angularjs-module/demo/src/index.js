import angular from 'angular'
import template from './index.html'
import '../../src/index'
import './index.scss'

const demo = angular.module('Demo', ['SomeAngularjsModule'])
demo.directive('demo', () => {
  return {
    templateUrl: template,
    controller: 'DemoCtrl'
  }
})
demo.controller('DemoCtrl', ['$scope', '$log', ($scope, $log) => {
  $log.info('Demo loaded')
}])

angular.module('App', ['Demo']);
const appElement = document.getElementById('demo');
const demoElement = document.createElement('demo');
appElement.setAttribute('ng-app', 'App');
appElement.appendChild(demoElement);
