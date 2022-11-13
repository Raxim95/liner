function CopyButton(props) {
  var _className = "w3-btn w3-border w3-small w3-ripple w3-text-white";
  var _style = {right: "20px"};
  return <button className={_className} style={_style} onClick = {props.onClick}>copy</button>
}
function SaveButton(props) {
  var _className = "w3-btn w3-green w3-border w3-small w3-ripple w3-text-white";
  var _style = {right: "20px"};
  return <button className={_className} style={_style} onClick = {props.onClick}>save</button>
}