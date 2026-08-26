import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

function TaskForm({ onAddTask }) {

    const [taskName, setTaskName] = useState("");

    function onValueChange(event) {
        setTaskName(event.target.value);
    }

    function addTaskValues() {

        if (taskName.trim() === "") {
            return;
        }

        onAddTask(taskName.trim());

        setTaskName("");
    }

    return (
        <Box sx={{ mb: 4 }}>

            <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 600 }}
            >
                Add a new task
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center"
                }}
            >

                <TextField
                    fullWidth
                    label="Task name"
                    placeholder="Enter a task"
                    value={taskName}
                    onChange={onValueChange}
                    size="small"
                />

                <Button
                    variant="contained"
                    onClick={addTaskValues}
                    sx={{
                        minWidth: 120,
                        height: 40
                    }}
                >
                    Add Task
                </Button>

            </Box>

        </Box>
    );
}

export default TaskForm;