import template from './sidenav.html';
import controller from './sidenav.controller';
import './sidenav.scss';

let sidenavComponent = {
  restrict: 'E',
  replace: true,
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default sidenavComponent;
