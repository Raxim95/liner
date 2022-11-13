function SearchBar(props) {
  var _style = {
    width: "80%",
  };

  var _className = "w3-orange";

  function keyUp(e) {
    if(e.key == "Enter"){
      props.fn();
    }
  }
  return (
    <Display className = {_className}>
        <input type="text" placeholder="Search..." className="w3-display-middle" style={_style} onKeyUp={keyUp}></input>
    </Display>
  );
}