function Latex(props) {
  const el = useRef(null);
  // ------------------------------
  const defaultProps = {
    children: "",
    displayMode: false,
    output: "html",
    leqno: false,
    fleqn: false,
    throwOnError: true,
    errorColor: "#cc0000",
    macros: {},
    minRuleThickness: 0,
    colorIsTextColor: false,
    strict: "warn",
    trust: false,
};
const style = {
  overflow: "auto"
}
// ------------------------------
  useEffect(() => {
    katex.render(props.children, el.current, {...defaultProps, ...props.options});
  }, []);

  useEffect(() => {
    katex.render(props.children, el.current, {...defaultProps, ...props.options});
  }, [props.children]);
  // ------------------------------
  return (<span style={style} ref={el}></span>);
}