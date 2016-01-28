class NavbarController {
  constructor(UserService, $state) {
    "ngInject";
    this.name = '';
    this.UserService = UserService;
    this.loadUserInfo();
    this.state = $state;
  }

  loadUserInfo() {
    this.UserService.me().then((response) => {
      if ( typeof response.error !== 'undefined' ) {
        localStorage.clear();
        this.state.go('login');
      }
      else
      {
        this.name = this.UserService.data.email;
      }
    }.bind(this));
  }

  logout() {
    this.UserService.logout().then((response) => {
      localStorage.clear();
      this.state.go('login');
    });
  }
}

export default NavbarController;
