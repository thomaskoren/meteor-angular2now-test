
Package.describe({
  name: 'tokilicious:counter-base',
  version: '0.0.1',
  summary: 'Base package for all counter apps',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.1');

  api.imply('meteor-base');        // Packages every Meteor app needs to have
  api.imply('mobile-experience');  // Packages for a great mobile UX

  api.imply('standard-minifiers'); // JS/CSS minifiers run for production mode
  api.imply('es5-shim');           // ECMAScript 5 compatibility for older browsers.

  api.imply('mongo');

  api.imply('insecure');

  api.imply('angular');

  api.imply('pbastowski:angular2-now');
  api.imply('pbastowski:ecmascript-extras');
  api.imply('pbastowski:require');

});
