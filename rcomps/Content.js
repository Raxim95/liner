function Content(props) {

    function copyClick(e) {
        // setNum(0);
    }
    function saveClick(e) {
        // setNum(1);
    }
    function click(e) {
        props.f2();
    }

    return (
        <Display>
            <LayerManager num={props.num}>
                <Layer>
                    Layer2
                    <button onClick={props.fn}>Go To</button>
                </Layer>
                <Layer>
                    <CodeMirrorEditor></CodeMirrorEditor>
                    <TR><CopyButton onClick={copyClick}></CopyButton></TR>
                    <BR><SaveButton onClick={saveClick}></SaveButton></BR>
                </Layer>
                <Layer>Layer3</Layer>
            </LayerManager>
        </Display>
    );
}
