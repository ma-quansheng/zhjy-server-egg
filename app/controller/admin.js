'use static';

const Controller = require('egg').Controller;

module.exports = class AdminController extends Controller {
  async index() {

  }

  async list() {
    const adminList = await this.app.mysql.query('select * from admin where status<>-1');
    await this.ctx.render('admin/list.html', { list: adminList });
  }
}
