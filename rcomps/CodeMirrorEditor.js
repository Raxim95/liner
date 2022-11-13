function CodeMirrorEditor(props) {
  const editorRef = useRef(null);
  const [options, setoptions] = useState(props);
  // var editor = null;

  var _style = {
    width: "100%",
    height: "100%",
  };

  useEffect(() => {
    editor = CodeMirror.fromTextArea($(editorRef.current).get(0), {...options, ...props.options});
    editor.setSize("100%", "100%");
    editor.refresh();
  }, []);
  
  return (
    <>
      <textarea ref={editorRef} style={_style}></textarea>
    </>
  );
}

CodeMirrorEditor.defaultProps = {
  lineNumbers: true,
  mode: "jsx",
  matchBrackets: true,
  theme: "darcula",
  lineWrapping: true
}