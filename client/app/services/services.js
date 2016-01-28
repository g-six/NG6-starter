import angular from 'angular';
import SitemapService from './sitemapService';
import UserService from './userService';

let serviceModule = angular
  .module('app.services', [])
  .constant('api', {
    'url': 'http://m3.dev.api.idearobin.com/1.0/'
  })
  .service({ UserService, SitemapService });

export default serviceModule;