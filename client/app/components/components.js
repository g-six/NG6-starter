import angular from 'angular';
import Home from './home/home';
import Login from './auth/login/login';
import About from './about/about';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Login.name
]);

export default componentModule;
