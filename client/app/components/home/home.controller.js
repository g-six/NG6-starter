class HomeController {
  constructor(UserService, $state) {
  	"ngInject";
    this.UserService = UserService;
    this.name = 'home';
    this.state = $state;
  }
}

export default HomeController;
