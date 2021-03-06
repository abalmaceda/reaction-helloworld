Package.describe({
  summary: "Reaction Hello World - example package for Reaction",
  name: "reactioncommerce:reaction-helloworld",
  version: "0.1.3",
  git: "https://github.com/ongoworks/reaction-helloworld.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@0.9.0');
  api.use([
    "standard-app-packages",
    "templating",
    "coffeescript",
    "reactioncommerce:core@0.1.6",
  ], ["client", "server"]);

  api.add_files([
    "common/register.coffee"
  ]);

  api.add_files([
    "client/routing.coffee",

    "client/templates/helloworld/helloworld.html",
    "client/templates/helloworld/helloworld.coffee",
    "client/templates/helloworld/helloworld.less",

    "client/templates/dashboard/widget/widget.html",
    "client/templates/dashboard/widget/widget.coffee",
    "client/templates/dashboard/widget/widget.less"
  ], ["client"]);
});
