function Joke (props) {
    return (
        <div className="joke">
            {props.setup && <h3 classname="setup">Setup: {props.setup}</h3>}
            <p classname="punchline">Punchline: {props.punchline}</p>
        </div>
    )
}

export default Joke