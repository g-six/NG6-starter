import UserService from './userService';

describe('UserService service', () => {

  /** @type {UserService} */
  var user;

  beforeEach(() => {
    user = new UserService();
  });

  it('correctly handles login', () => {
    const login = user.login('test@email.com', 'testpass');

    expect(login).to.eq(true);
  });

  describe('Filtering', () => {

    beforeEach(() => {
      const first = todos.add('test 1');
      first.complete = true;
      todos.add('test 2');
    });

    it('can show all tasks', () => {
      todos.showAll();
      expect(todos.filteredList.length).to.have.length.eq(2);
    });

    it('can show pending tasks', () => {
      todos.showActive();
      expect(todos.filteredList.length).to.have.length.eq(1);
    });

    it('can show completed tasks', () => {
      todos.showCompleted();
      expect(todos.filteredList.length).to.have.length.eq(1);
    });

  });

});
