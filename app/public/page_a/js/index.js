

require.config({
  baseUrl: 'js',
  paths: {
    "react": "http://127.0.0.1:8082/vendor/react_abb62e8eba4b6f09901a",
    "react-dom": "http://127.0.0.1:8082/vendor/react-dom_577522af7791ea7b89e7",
    "regexparam": "http://127.0.0.1:8082/vendor/regexparam_b2f342b10ca93fcde64d",
    "dep_a": "http://127.0.0.1:8082/components/dep_a/dep_a",
    "dep_b": "http://127.0.0.1:8082/components/dep_b/dep_b",
    "header": "http://127.0.0.1:8082/components/header/header"
  }
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


