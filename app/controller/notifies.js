'use static';

const Controller = require('egg').Controller;

module.exports = class NotifiesController extends Controller {
  async index() {

  }

  async lst() {
    let sql = `
      select n.id,
        n.type_id,
        c.name,
        n.title,
        n.description,
        n.author,
        a.username,
        n.create_time
      from notifies n,admin a,category c
      where (n.author=a.id and n.type_id=c.id) and n.status<>-1
      order by create_time desc
    `
    const list = await this.app.mysql.query(sql);

    sql = `select * from category where status<>-1`;
    const catelist = await this.app.mysql.query(sql);

    await this.ctx.render('notifies/lst.html', {
      list, count: list.length, catelist
    });
  }

  async add() {
    await this.ctx.render('notifies/add.html')
  }

  async edit() {
    if (this.ctx.request.method === 'POST') {
      this.ctx.body = 'post data';
    } else if (this.ctx.request.method === 'GET') {
      let sql = `
      select * from notifies where id=${this.ctx.query.id}
    `;
      let data = await this.app.mysql.query(sql);

      sql = `select * from category where status<>-1`;
      let catelist = await this.app.mysql.query(sql);

      await this.ctx.render('/notifies/edit.html', { data: data[0], catelist });
    }
  }

  async delete() {
    this.ctx.body = this.ctx.query.id
  }
}