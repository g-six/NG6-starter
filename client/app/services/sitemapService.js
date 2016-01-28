export default class SitemapService {
  constructor() {
    "ngInject";
    this.data = {
      pages: []
    };
    this.addPage('home', 'Users Management');
    this.addPage('home', 'Reports Access Management');
    this.addPage('home', 'Wallet Creation Report');
    this.addPage('home', 'Card Link Report');
    this.addPage('home', 'Transfer Report');
    this.addPage('home', 'Fees Report');
  }

  addPage(name, title, icon) {
    this.data.pages.push({ name: name, title: title, icon: icon });
  }
}
