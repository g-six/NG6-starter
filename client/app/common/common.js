import angular from 'angular';
import Navbar from './navbar/navbar';
import Sidenav from './sidenav/sidenav';
import Footer from './footer/footer';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Sidenav.name,
  User.name,
  Footer.name
]);

export default commonModule;
