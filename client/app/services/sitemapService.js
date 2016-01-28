export default class SitemapService {
  constructor() {
    "ngInject";
    this.data = {
      pages: []
    };
    this.addPage('home', 'Users');
    this.addPage('home', 'Users');
    this.addPage('home', 'Users');
    this.addPage('home', 'Users');
    this.addPage('home', 'Users');
  }

  addPage(name, title) {
    this.data.pages.push({ name: name, title: title });
  }
}
