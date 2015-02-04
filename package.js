Package.describe({
  name: 'matteodem:gridster',
  version: '0.0.1',
  summary: 'gridster.js repackaged for Meteor',
  git: 'https://github.com/matteodem/meteor-gridster',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('jquery', 'client');
  api.addFiles('lib/jquery.gridster.js', 'client');
  api.addFiles('lib/jquery.gridster.css', 'client');
});
