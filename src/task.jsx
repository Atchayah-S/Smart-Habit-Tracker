function Task(){
    const styles={
        
    }

    return(
        <div className="Tasks">
            
        </div>
    )
}
function CreateTask(){
    return(<div className="taskForm">
        <form>
        <table>        
        <tr>
            <td><label htmlFor="name">Task</label></td><td><input type="text" id="name"placeholder="Enter the task"></input></td></tr>
        <tr><td><label htmlFor="freq">Task Frequency</label></td>
        <td><select id="freq" name="frequency">
        <option disabled selected value> -- select an Frequency Eg.: Daily, Weekly, etc. -- </option>
            <option value="hourly">Hourly</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            </select></td></tr>
            </table>
        </form>        
    </div>);
}
export default Task
export { CreateTask }