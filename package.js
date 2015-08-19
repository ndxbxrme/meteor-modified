Package.describe({
  name: 'ndxbxrme:modified',
  version: '0.0.1',
  summary: 'Simply adds updatedBy/At and createdBy/At to a collection',
  git: 'https://github.com/ndxbxrme/meteor-modified',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use(['coffeescript', 'matb33:collection-hooks@0.7.6']);
  api.versionsFrom('1.1.0.3');
  api.addFiles('modified.coffee');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ndxbxrme:modified');
  api.addFiles('modified-tests.js');
});
