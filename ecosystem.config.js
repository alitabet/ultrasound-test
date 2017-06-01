module.exports = {
  apps: [{
    name: 'ultrasound-aws',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-58-174-10.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/ultrasound-key.pem',
      ref: 'origin/master',
      repo: 'git@github.com:alitabet/ultrasound-test.git',
      path: '/home/ubuntu/ultrasound-aws',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}