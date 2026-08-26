import { Box, Container, Paper, Typography } from "@mui/material";
import { useState } from "react";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function TaskName() {

    const [taskNames, setTaskNames] = useState([]);
    const [index, setIndex] = useState(0);

    const [editTaskId, setEditTaskId] = useState(null);
    const [editTaskName, setEditTaskName] = useState("");

    function addTask(taskName) {

        const taskObj = {
            id: index,
            name: taskName,
            completed: false
        };

        setIndex(index + 1);

        setTaskNames(tasks => [
            ...tasks,
            taskObj
        ]);
    }

    function removeFromList(task) {

        const newTasks =
            taskNames.filter(tasks => tasks !== task);

        setTaskNames(newTasks);
    }

    function markComplete(id) {

        setTaskNames(tasks =>
            tasks.map(task =>
                task.id === id
                    ? {
                        ...task,
                        completed: !task.completed
                    }
                    : task
            )
        );
    }

    function updateTask(id, name) {

        setEditTaskId(id);
        setEditTaskName(name);
    }

    function save() {

        setTaskNames(tasks =>
            tasks.map(task =>
                task.id === editTaskId
                    ? {
                        ...task,
                        name: editTaskName
                    }
                    : task
            )
        );

        reset();
    }

    function reset() {
        setEditTaskId(null);
        setEditTaskName("");
    }

    return (

        <Container maxWidth="md">

            <Box sx={{ mt: 6 }}>

                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 600,
                        mb: 1
                    }}
                >
                    Task Manager
                </Typography>

                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 4 }}
                >
                    Manage and track your tasks
                </Typography>

                <Paper
                    elevation={1}
                    sx={{
                        p: 4,
                        borderRadius: 2
                    }}
                >

                    <TaskForm
                        onAddTask={addTask}
                    />

                    <TaskList
                        taskNames={taskNames}
                        onDeleteTask={removeFromList}
                        onCompleted={markComplete}
                        onUpdate={updateTask}
                        editTaskId={editTaskId}
                        editTaskName={editTaskName}
                        setEditTaskName={setEditTaskName}
                        save={save}
                        reset={reset}
                    />

                </Paper>

            </Box>

        </Container>
    );
}

export default TaskName;