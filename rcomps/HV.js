// ---------- HORISONTAL LAYOUT ----------
function H(props) {
  var parent = useRef(null);

  useEffect(() => {
    $(parent.current).css("width", "100%").css("height", "100%");

    $.each(parent.current.children, function (index, child) {
      $(child).css("width", props.m[index] + "%").css("float", "left");
    });
  }, []);
  return (<div ref={parent} style={props.style} className={props.className}>{props.children}</div>);
}
// ---------- VERTICAL LAYOUT ----------
function V(props) {
  var parent = useRef(null);

  useEffect(() => {
    $(parent.current).css("width", "100%").css("height", "100%");

    $.each(parent.current.children, function (index, child) {
      $(child).css("height", props.m[index] + "%");
    }, []);
  });
  return (<div ref={parent} style={props.style} className={props.className}>{props.children}</div>);
}