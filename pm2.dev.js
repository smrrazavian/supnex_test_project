module.exports = {
  apps: [
    {
      name: 'http',
      script: 'src/main.ts',
      instances: 1,
      watch: ['src'],
      autorestart: true,
      watch_delay: 1000,
      max_memory_restart: '256M',
      ignore_watch: ['node_modules', 'coverage'],
    },
  ],
};
