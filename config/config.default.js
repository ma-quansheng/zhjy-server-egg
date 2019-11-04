/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1572574184466_7766';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    myAppName: '智慧家园',
  };

  config.security = {
    csrf: {
      enable: false,
      queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
      bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
      headerName: 'x-csrf-token',
    },
  };

  config.mysql = {
    client: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'zhjy'
    },
    app: true
  };

  config.view = {
    mapping: {
      '.html': 'art',
      '.htm': 'art'
    },
    defaultViewEngine: 'egg-view-art',
    defaultExtension: '.html'
  };

  return {
    ...config,
    ...userConfig,
  };
};
