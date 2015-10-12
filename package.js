Package.describe({
  name: 'ox2:banner',
  summary: 'TESTING_DO_NOT_USE Banner component',
  version: '1.2.1',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  // Core
  api.use([
    'templating'
    ]);
  // 3rd party
  api.use([
    'lauricio:less-autoprefixer@2.5.0_3','mquandalle:jade@0.4.1','meteorhacks:subs-manager@1.3.0'
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
