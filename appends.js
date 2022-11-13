(function () {
  var funcs = {
    "js": function (_head, src) {
      let _script = document.createElement("script");
      _script.src = src;
      $(_head).append(_script);
    },
    "css": function (_head, href) {
      let _link = document.createElement("link");
      _link.rel = "stylesheet";
      _link.href = href;
      $(_head).append(_link);
    }
  }

  var adds = [
    // ---------- React ----------
    ["libs/react/babel.min.js", "js"],
    ["libs/react/react.development.js", "js"],
    ["libs/react/react-dom.development.js", "js"],
    // ---------- W3 ----------
    ["libs/w3.css", "css"],
    ["libs/w3.js", "js"],
    // ---------- Lodash ----------
    ["libs/lodash.min.js", "js"],
    // ---------- Custom ----------
    ["main.css", "css"],
    ["libs/functions.js", "js"],
  ]

  $.each(adds, function (index, item) {
    let _head = document.getElementsByTagName("head");
    funcs[item[1]](_head, item[0]);
  });
})();
