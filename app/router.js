'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/home/welcome', controller.home.welcome);

  router.get('/notifies/list', controller.notifies.lst);
  router.get('/notifies/add', controller.notifies.add);
  router.get('/notifies/edit', controller.notifies.edit);
  router.get('/notifies/delete', controller.notifies.delete);

  router.get('/admin/list', controller.admin.list);
	
	router.get('/user/list',controller.user.lst);
};
