function Layer(props) {
    var _style = {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        display: "none",
    };
    return (
        <div style={{..._style,...props.style}}>{props.children}</div>
    );
}

function LayerManager(props) {
    const [prevnum, setprevNum] = useState(props.num);    
    const lmRef = useRef(null)
    
    var _style = {
        position: "relative",
        width: "100%",
        height: "100%",
    };

    useEffect(() => {
        $(lmRef.current.children[prevnum]).css("display", "none");
        $(lmRef.current.children[props.num]).css("display", "block");
        setprevNum(props.num);
    }, [props.num])
    

    return (
        <div ref = {lmRef} style={{..._style,...props.style}}>{props.children}</div>
    );
}