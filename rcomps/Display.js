function Display(props) {
  var _className = "w3-display-container " + props.className;
  return (<div className={_className} style={props.style}>{props.children}</div>);
}
function TL(props) {
  return (<div className="w3-display-topleft" style={props.style}>{props.children}</div>);
}
function TR(props) {
  return (<div className="w3-display-topright" style={props.style}>{props.children}</div>);
}
function BL(props) {
  return (<div className="w3-display-bottomleft" style={props.style}>{props.children}</div>);
}
function BR(props) {
  return (<div className="w3-display-bottomright" style={props.style}>{props.children}</div>);
}
function L(props) {
  return (<div className="w3-display-left" style={props.style}>{props.children}</div>);
}
function R(props) {
  return (<div className="w3-display-right" style={props.style}>{props.children}</div>);
}
function M(props) {
  console.log(props.style);
  return (<div className="w3-display-middle" style={props.style}>{props.children}</div>);
}
function TM(props) {
  return (<div className="w3-display-topmiddle" style={props.style}>{props.children}</div>);
}
function BM(props) {
  return (<div className="w3-display-bottommiddle" style={props.style}>{props.children}</div>);
}