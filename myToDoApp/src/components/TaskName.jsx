import { Box, Container, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import DatePickerLocal from "./DatePickerLocal";
import BasicSelect from "./BasicSelect";

function TaskName() {

    const [taskNames, setTaskNames] = useState([]);
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [taskPriority, setTaskPriority] = useState("");
    const [editTaskId, setEditTaskId] = useState(null);
    const [editTaskName, setEditTaskName] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    function onDateChange(date) {
        setSelectedDate(date);
        console.log(selectedDate.format("YYYY-MM-DD"));

    }
    function onPriorityChange(event) {
        setTaskPriority(event.target.value);
    }
    const filteredTasks = taskNames.filter(
        task =>
            task.taskDate === selectedDate.format("YYYY-MM-DD")
    );

    function addTask(taskName) {

        const taskObj = {
            id: crypto.randomUUID(),
            name: taskName,
            completed: false,
            taskDate: selectedDate.format("YYYY-MM-DD"),
            priority: taskPriority

        };



        setTaskNames(tasks => [
            ...tasks,
            taskObj
        ]);
    }

    useEffect(() => {

        if (!isLoaded) {
            return;
        }

        localStorage.setItem(
            "tasks",
            JSON.stringify(taskNames)
        );

    }, [taskNames, isLoaded]);

    useEffect(() => {

        const savedTasks = localStorage.getItem("tasks");

        if (savedTasks) {
            setTaskNames(JSON.parse(savedTasks));
        }

        setIsLoaded(true);

    }, []);

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

    function updateTask(id, name, priority) {

        setEditTaskId(id);
        setEditTaskName(name);
        setTaskPriority(priority);
    }

    function save() {

        setTaskNames(tasks =>
            tasks.map(task =>
                task.id === editTaskId
                    ? {
                        ...task,
                        name: editTaskName,
                        priority: taskPriority
                    }
                    : task
            )
        );

        reset();
    }

    function reset() {
        setEditTaskId(null);
        setEditTaskName("");
        setTaskPriority("");
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

                    <DatePickerLocal selectedDate={selectedDate}
                        onDateChange={onDateChange} />

                    <BasicSelect taskPriority={taskPriority}
                        onPriorityChange={onPriorityChange} />

                    <TaskList
                        taskNames={filteredTasks}
                        onDeleteTask={removeFromList}
                        onCompleted={markComplete}
                        onUpdate={updateTask}
                        editTaskId={editTaskId}
                        editTaskName={editTaskName}
                        setEditTaskName={setEditTaskName}
                        save={save}
                        reset={reset}
                        taskPriority={taskPriority}

                    />

                </Paper>

            </Box>

        </Container>
    );
}

export default TaskName;