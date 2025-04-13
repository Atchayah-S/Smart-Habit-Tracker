import {CreateTask} from './task'
function CreateButton(){
    const styles={
        borderRadius: "5px",
        padding:"10px 20px",
        boxSizing:"border-box",
        fontWeight:"bold"
    }
    return(<>
    <button style={styles}>Create new Task</button>
    </>);
}
export default CreateButton