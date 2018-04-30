

require.config({
  baseUrl: window.__config_static_host__,
  paths: window.__config_paths__
});

require(['dep_a', 'dep_b'], function(Dep_a, Dep_b) {
  //参数和依赖的模块需一一对应
  var dep_a = new Dep_a();
  var dep_b = new Dep_b();
  document.getElementById('module1').appendChild(dep_a.render());
  document.getElementById('module2').appendChild(dep_b.render());
});

require(['header'], function(module) {
  //参数和依赖的模块需一一对应
  module.headerFactory(document.getElementById('header'));
});


