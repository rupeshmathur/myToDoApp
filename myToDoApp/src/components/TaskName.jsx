import { use, useState } from "react";
import Button from "./Button";


function TaskName() {

    const [taskName, setTaskName] = useState("");
    const [taskNames, setTaskNames] = useState([]);
    const [index, setIndex] = useState(0);
    const [editTaskId, setEditTaskId] = useState(null);
    const [editTaskName, setEditTaskName] = useState("");


    function onValueChange(event) {
        if (event.target.value != null) {
            setTaskName(event.target.value);

        }

    }

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

    function markComplete(id) {

        setTaskNames(tasks => tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
    }

    function updateTask(id, name) {
        setEditTaskId(id);
        setEditTaskName(name);

    }

    function save() {
        setTaskNames(tasks => tasks.map((task) => task.id === editTaskId ? { ...task, name: editTaskName } : task));
        reset();
    }

    function reset() {
        setEditTaskId(null);
        setEditTaskName("");
    }

    function removeFromList(task) {

        const newTasks = taskNames.filter(tasks => tasks !== task);
        setTaskNames(newTasks);

    }

    function clearInput() {
        setTaskName("");
    }

    return (
        <>

            <h2>Task Name</h2><br />
            <input value={taskName} onChange={onValueChange} /><br />
            <Button onClick={addTaskValues} >Add Task</Button>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {taskNames.map((task) => (
                        <tr key={task.id}>
                            <td>
                                {task.id === editTaskId ? (
                                    // EDIT MODE
                                    <input value={editTaskName}
                                        onChange={(event) => setEditTaskName(event.target.value)} />
                                ) : (
                                    // NORMAL MODE
                                    <>
                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={() => markComplete(task.id)}
                                        />
                                        {task.name}
                                    </>
                                )}
                            </td>

                            <td>
                                {
                                    task.id === editTaskId ? (
                                        // EDIT MODE
                                        <>
                                            <button onClick={() => save()} >Save</button>
                                            <button onClick={() => reset()} >Cancel</button>
                                        </>
                                    ) :
                                        (
                                            <>
                                                <button onClick={() => markComplete(task.id)} >Complete </button>
                                                <button onClick={() => removeFromList(task)} >Delete</button>
                                                <button onClick={() => updateTask(task.id, task.name)} >Update</button>
                                            </>
                                        )}

                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>


        </>

    );
}
export default TaskName;