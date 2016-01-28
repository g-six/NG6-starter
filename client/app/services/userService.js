export default class UserService {
  constructor($http, api) {
    "ngInject";
    this.http = $http;
    this.url = api.url;
    this.data = {};
    this.information = {};
  }

  login(email, password) {
    return this.http.post(`${this.url}login`, {
      email: email,
      password: password
    }).then((response) => {
      return { data: response.data, status: response.status };
    }).catch((e) => {
      return { error: e.data, status: e.status };
    })
  }

  logout() {
    return this.http.get(`${this.url}logout`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then((response) => {
      this.data = {};
      this.information = {};
      return { data: response.data.data, status: response.status };
    }).catch((e) => {
      return { error: e.data, status: e.status };
    })
  }

  me() {
    return this.http.get(`${this.url}users/me?include=information`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then((response) => {
      this.data = response.data.data;
      this.information = response.data.data.information.data;
      delete this.data['information'];
      return { data: response.data.data, status: response.status };
    }).catch((e) => {
      return { error: e.data, status: e.status };
    })
  }
}
