(function () {
  const useState = React.useState;
  const useRef = React.useRef;
  const useContext = React.useContext;

  var adds = [
    // ---------- Libs ----------
    "rcomps/All.js",
    "rcomps/ErrorBoundary.js",
    "rcomps/HV.js",
    "rcomps/RGB.js",
    "rcomps/Flex.js",
    "rcomps/Display.js",
    "rcomps/Latex.js",
    "rcomps/Fa.js",
    "rcomps/LayerManager.js",
    "rcomps/RGB.js",
  ]

  let _body = document.getElementsByTagName("body");
  $.each(adds, function (index, val) {
    let _script = document.createElement("script");
    _script.type = "text/babel"
    _script.src = val;
    $(_body).append(_script);
  });

})();
