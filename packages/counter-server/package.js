
Package.describe({
  name: 'tokilicious:counter-server',
  version: '0.0.1',
  summary: 'Counter server component',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.1');

  api.use(["tokilicious:counter-base"], ['client', 'server']);
});
