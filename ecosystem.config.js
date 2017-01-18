module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'Bundler',
      script: 'build/index.js',
      env: {
        COMMON_VARIABLE: 'true',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'bundler',
      host: 'ssh@codesandbox.io',
      ref: 'origin/master',
      repo: 'git@github.com:CompuIves/codesandbox-bundler.git',
      path: '/home/bundler/',
      'post-deploy': 'npm install && npm run build && pm2 startOrRestart ecosystem.json --env production',
    },
  },
};
