import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularAria from 'angular-aria';
import angularAnimate from 'angular-animate';
import angularComponent from 'angular-component';
import angularMaterial from 'angular-material';
import Common from './common/common';
import Components from './components/components';
import services from './services/services';
import 'normalize.css';

import AppComponent from './app.component';

angular.module('app', [
  uiRouter,
  angularMaterial,
  Common.name,
  Components.name,
  services.name
]).config(($mdThemingProvider) => {
  "ngInject";

  $mdThemingProvider.definePalette('idearobin', {
    '50': 'F3EDF3',
    '100': 'E2D3E1',
    '200': 'D0B9CF',
    '300': 'BD9CBB',
    '400': 'AF87AD',
    '500': 'A1729F',
    '600': '926790',
    '700': '825C81',
    '800': '725171',
    '900': '543B53',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'dark',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': undefined,
    'contrastLightColors': ['400', '500', //hues which contrast should be 'dark' by default
     '600', '700', '800', '900']    // could also specify this if default was 'dark'
  });
  $mdThemingProvider.theme('default')
    .primaryPalette('idearobin');
})

.component('app', AppComponent);
