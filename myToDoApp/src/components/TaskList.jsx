function TaskList({ taskNames, onDeleteTask, onCompleted, onUpdate, editTaskId, editTaskName, setEditTaskName, save, reset }) {

    return (
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
                                        onChange={() => onCompleted(task.id)}
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
                                ) : <>
                                    <button onClick={() => onCompleted(task.id)}>
                                        Complete
                                    </button>
                                    <button onClick={() => onDeleteTask(task)}>
                                        Delete
                                    </button>
                                    <button onClick={() => onUpdate(task.id, task.name)} >
                                        Update</button>
                                </>
                            }

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>
    );
}

export default TaskList;