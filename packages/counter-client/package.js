
Package.describe({
  name: 'tokilicious:counter-client',
  version: '0.0.1',
  summary: 'base package for counter clients',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.1');

  api.use('session');   // Client-side reactive dictionary for your app
  api.use('jquery');    // Helpful client-side library
  api.use('tracker');   // Meteor's client-side reactive programming library

  api.use('angularui:angular-ui-router');

  api.use(["tokilicious:counter-base"]);

  api.use('pbastowski:angular2-now');

  api.addFiles([
    'client/lib/app.js',

    'client/counter/counter.js',
    'client/counter/counter.ng.html',

    'client/index.html'
  ], ['client']);

});
