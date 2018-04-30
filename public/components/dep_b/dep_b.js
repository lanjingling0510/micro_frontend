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

  var Dep_b =
  /*#__PURE__*/
  function () {
    function Dep_b() {
      _classCallCheck(this, Dep_b);

      this.router = regexparam('dep_b/*').pattern;
    }

    _createClass(Dep_b, [{
      key: "render",
      value: function render() {
        var div = document.createElement('div');
        div.innerHTML = 'dep_b';
        return div;
      }
    }]);

    return Dep_b;
  }();

  return Dep_b;

});
