class LoginController {
  constructor(UserService, $state, $timeout) {
    "ngInject";
    this.name = 'login';
    this.resetErrors();
    this.resetUser();
    this.UserService = UserService;
    this.state = $state;
    this.timeout = $timeout;
  }

  resetErrors() {
  	this.errors = {};
    this.error = '';
  }

  resetUser() {
  	this.user = {};
  }

  doLogin() {
  	this.resetErrors();
  	if ( !this.user.email ) {
  		this.errors.email = 'Please enter e-mail';
  	}
  	if ( !this.user.password ) {
  		this.errors.password = 'Please enter password';
  	}
    if ( this.user.email && this.user.password ) {
      this.UserService.login(this.user.email, this.user.password)
      .then((response) => {
        if ( typeof response.error !== 'undefined' ) {
          this.error = response.error.message;
        }
        else
        {
          localStorage.setItem('token', response.data.token);
          this.timeout(() => {this.state.go('home');}, 100);
        }
      })
    }
  }
}

export default LoginController;
