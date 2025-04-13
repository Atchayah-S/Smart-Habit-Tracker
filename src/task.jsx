
function Task(props){
    return(
        <div className="Tasks">
            <h3>{props.Task}</h3>
            <p>{props.frequency}</p>
        </div>
    )
}

export default Task