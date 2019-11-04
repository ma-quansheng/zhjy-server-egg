'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('home/index.html');
  }

  async welcome() {
    await this.ctx.render('home/welcome.html');
  }


}

module.exports = HomeController;
