function Flex(props) {
  var _parent = useRef(null);
  var _direction = {
    "r": "row",
    "c": "column",
    "rr": "row-reverse",
    "cr": "column-reverse"
  }
  var _justify_content = {
    "c" : "center",
    "l" : "flex-start",
    "r" : "flex-end",
    "a" : "space-around",
  }
  var _align_items = {
    "c" : "center",
    "l" : "flex-start",
    "r" : "flex-end",
    "s" : "stretch",
    "b" : "baseline",
  }
  var _style = {
    display: "flex",
    flexDirection: _direction[props.d],
    flexWrap: props.w,
    justifyContent : _justify_content[props.j],
    alignItems : _align_items[props.a],
  }
  // ------------------------------
  useEffect(() => {
    if(props.m.length>0){
      let m = props.m.split(",");
      $.each($(_parent.current.children), function (index, el) {
        el.style.flex = m[index];
      });
    }
  }, []);

  return (
    <div ref={_parent} style = {{..._style,...props.style}} className={props.className}>
      {props.children}
    </div>
  );
}
Flex.defaultProps  = {
  d: "r", //row
  w: "wrap",
  j: "c",
  a: "c",
  m: ""
}