define(['regexparam'], function (regexparam) { 'use strict';

  regexparam = regexparam && regexparam.hasOwnProperty('default') ? regexparam['default'] : regexparam;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var Dep_a =
  /*#__PURE__*/
  function () {
    function Dep_a() {
      _classCallCheck(this, Dep_a);

      this.router = regexparam('dep_a/*').pattern;
    }

    _createClass(Dep_a, [{
      key: "render",
      value: function render() {
        var div = document.createElement('div');
        div.innerHTML = 'dep_a';
        return div;
      }
    }]);

    return Dep_a;
  }();

  return Dep_a;

});
