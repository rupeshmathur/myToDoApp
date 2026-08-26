import { useState } from "react";
import Button from "./Button";

function TaskForm({ onAddTask }) {

    const [taskName, setTaskName] = useState("");

    function onValueChange(event) {
        setTaskName(event.target.value);
    }

    function addTaskValues() {

        if (taskName.trim() === "") {
            return;
        }

        onAddTask(taskName);

        setTaskName("");
    }

    return (
        <>
            <h2>Task Name</h2>

            <input
                value={taskName}
                onChange={onValueChange}
            />

            <br />

            <Button onClick={addTaskValues}>
                Add Task
            </Button>
        </>
    );
}

export default TaskForm;