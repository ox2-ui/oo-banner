Package.describe({
  name: 'ox2:banner',
  summary: 'DO NOT USE',
  version: '1.8.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  // Core
  api.use([
    'templating',
    'less',
    'reactive-var'
    ]);
  // 3rd party
  api.use([
    'mquandalle:jade@0.4.9','meteorhacks:subs-manager@1.3.0'
    ]);
  api.addFiles('lib/oo-banner.jade', C);
  api.addFiles('lib/oo-banner.js', C);
  api.addFiles('lib/oo-banner.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:banner');
  api.addFiles('tests/oo-banner-tests.js');
});
