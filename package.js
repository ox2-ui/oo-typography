Package.describe({
  name: 'ox2:typography',
  summary: 'TESTING_DO_NOT_USE Base typographic styles',
  version: '1.1.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  // 3rd party
  api.use([
    'lauricio:less-autoprefixer@2.5.0_3'
    ]);
  api.addFiles('lib/oo-typography.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:typography');
  api.addFiles('tests/oo-typography-tests.js');
});
