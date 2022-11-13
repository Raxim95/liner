// ---------- APP ----------
function App(props) {
  return (<Root>
    <div className="con">
      <textarea className="a1"></textarea>
      <textarea className="a2"></textarea>
    </div>
  </Root>);
}
// ------------- RENDER ---------------
var react_root = ReactDOM.createRoot(document.getElementById("root"));
react_root.render(<App></App>);
