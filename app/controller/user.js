'use static';

const Controller = require('egg').Controller;

module.exports = class UserController extends Controller {
	async index() {
		this.ctx.body = 'user index';
	}

	async lst() {
		const list = await this.ctx.helper.getUserList();
		
		await this.ctx.render('user/list.html',{list,count:list.length})
	}


}
