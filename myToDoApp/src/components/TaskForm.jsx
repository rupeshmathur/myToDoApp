import { useState } from "react";
import Button from "./Button";

function TaskForm() {
    const [taskName, setTaskName] = useState("");
    const [taskNames, setTaskNames] = useState([]);
    const [index, setIndex] = useState(0);


    function addTaskValues() {
        if (taskName.trim() === "") {
            return;
        }

        const taskObj = {
            id: index,
            name: taskName,
            completed: false
        }

        setIndex(index + 1);

        setTaskNames(taskNames => [
            ...taskNames,
            taskObj
        ]);

        clearInput();
    }
    function onValueChange(event) {
        if (event.target.value != null) {
            setTaskName(event.target.value);

        }

    }
    function clearInput() {
        setTaskName("");
    }
    return (
        <>
            <h2>Task Name</h2><br />
            <input value={taskName} onChange={onValueChange} /><br />
            <Button onClick={addTaskValues} >Add Task</Button>
        </>
    );
}
export default TaskForm;