function Joke (props) {
    return (
        <div className={!props.isShown && "joke joke--shown" || "joke"} onClick={props.state}>
            {props.setup && <h3 className="setup">Setup: {props.setup}</h3>}
            <p className="punchline">Punchline: {props.punchline}</p>
        </div>
    )
}

export default Joke
