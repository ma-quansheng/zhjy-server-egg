module.exports = {
	getUserList() {
		const sql = `
			select * from user where status<>-1
		`
		const list = this.app.mysql.query(sql);
		return list;
	}
}
