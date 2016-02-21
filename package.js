Package.describe({
  name: 'ox2:typography',
  summary: 'DO NOT USE',
  version: '1.3.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  // 3rd party
  api.use([
    'less'
    ]);
  api.addFiles('lib/oo-font-variables.import.less', C);
  api.addFiles('lib/oo-typography.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:typography');
  api.addFiles('tests/oo-typography-tests.js');
});
