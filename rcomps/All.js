$("*").css("box-sizing", "border-box");
// $("html, body")

const useState = React.useState;
const useEffect = React.useEffect;
const useRef = React.useRef;

// var Button = ReactBootstrap.Button;
// var Alert = ReactBootstrap.Alert;
// var Form = ReactBootstrap.Form;
// var Container = ReactBootstrap.Container;

function Root(props) {
  let my_style = {
    position: "absolute",
    width: "100%",
    height: "100%",
  };
  return <div style={my_style}>{props.children}</div>;
}

function FullButton(props) {
  var _style = {width: "100%", height: "100%"};
  return (
    <button style={{..._style,...props.style}} className={"w3-btn " + props.className} onClick={props.onClick}>
      <i className={"fa fa-"+props.icon+" fa-lg"}>{props.children}</i>
    </button>
  );
}

function Btn(props) {
  return <button onClick={props.onClick} className={props.className + " w3-btn w3-green"}>{props.children}</button>;
}
var Inp = React.forwardRef((props, ref) => (
  <input ref={ref} className="w3-input" type="text" />
))
function Full(props) {
  let style = { width: "100%", height: "100%" };
  return <div style={{ ...style, ...props.style }} className={props.className}>{props.children}</div>;
}
function Row(props) {
  return <div className={"w3-row "+props.className}>{props.children}</div>;
}
function Col(props) {
  const [txt, settxt] = useState("r");
  // ------------------------------
  useEffect(() => {
    switch (props.var) {
      case "1/2": settxt("w3-half"); break;
      case "1/3": settxt("w3-third"); break;
      case "2/3": settxt("w3-twothird"); break;
      case "1/4": settxt("w3-quarter"); break;
      case "3/4": settxt("w3-threequarter"); break;
      case "r": settxt("w3-rest"); break;
      case "col": settxt("w3-col"); break;
      case "mobile": settxt("w3-mobile"); break;
    }
  }, [])
  // ------------------------------
  return <div className={txt}>{props.children}</div>;
}
Col.defaultProps = { var: "col" };