require.config({
  baseUrl: window.__config_static_host__,
  paths: window.__config_paths__
});


const store = {
  name: 'rainie'
};


require(['/public/page_a/conditioner-core.js'], function (conditioner) {

  // apply custom settings
  conditioner.addPlugin({

    // converts module aliases to paths
    moduleSetName: name => name,

    moduleGetConstructor: module => module.mount,

    moduleGetDestructor: module => module.unmount,

    //
    moduleSetConstructorArguments: ((store, name, element) => [element, store]).bind(this, store),

    // setup AMD require
    moduleImport: function (name) {
      return new Promise(function (resolve) {
        require([name], function (module) {
          resolve(module);
        });
      });
    }

  });

  // lets go!
  conditioner.hydrate(document.documentElement);

});
