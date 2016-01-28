import angular from 'angular';
import Home from './home/home';
import Login from './auth/login/login';

let componentModule = angular.module('app.components', [
  Home.name,
  Login.name
]);

export default componentModule;
