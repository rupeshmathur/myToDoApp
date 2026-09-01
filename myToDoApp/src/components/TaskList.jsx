import {
    Box,
    Button,
    Checkbox,
    Chip,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import BasicSelect from "./BasicSelect";

function TaskList({
    taskNames,
    onDeleteTask,
    onCompleted,
    onUpdate,
    editTaskId,
    editTaskName,
    setEditTaskName,
    save,
    reset
}) {

    return (
        <TableContainer
            component={Paper}
            elevation={1}
        >

            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell sx={{ fontWeight: 600 }}>
                            Task
                        </TableCell>

                        <TableCell sx={{ fontWeight: 600 }}>
                            Priority
                        </TableCell>

                        <TableCell sx={{ fontWeight: 600 }}>
                            Status
                        </TableCell>

                        <TableCell sx={{ fontWeight: 600 }}>
                            Task Date
                        </TableCell>

                        <TableCell
                            align="right"
                            sx={{ fontWeight: 600 }}
                        >
                            Actions
                        </TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {taskNames.map((task) => (

                        <TableRow key={task.id}>

                            <TableCell>

                                {task.id === editTaskId ? (

                                    <TextField
                                        size="small"
                                        fullWidth
                                        value={editTaskName}
                                        onChange={(event) =>
                                            setEditTaskName(
                                                event.target.value
                                            )
                                        }
                                    />

                                ) : (

                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center"
                                        }}
                                    >

                                        <Checkbox
                                            checked={task.completed}
                                            onChange={() =>
                                                onCompleted(task.id)
                                            }
                                        />

                                        <Box
                                            component="span"
                                            sx={{
                                                textDecoration:
                                                    task.completed
                                                        ? "line-through"
                                                        : "none",
                                                color:
                                                    task.completed
                                                        ? "text.secondary"
                                                        : "text.primary"
                                            }}
                                        >
                                            {task.name}
                                        </Box>

                                    </Box>

                                )}

                            </TableCell>

                            <TableCell>

                                <BasicSelect priority={task.priority}/>

                            </TableCell>

                            <TableCell>

                                <Chip
                                    label={
                                        task.completed
                                            ? "Completed"
                                            : "Pending"
                                    }
                                    size="small"
                                    color={
                                        task.completed
                                            ? "success"
                                            : "default"
                                    }
                                />

                            </TableCell>

                            

                            <TableCell>

                                <Chip
                                    label={
                                        task.taskDate

                                    }
                                />

                            </TableCell>

                            <TableCell align="right">

                                {task.id === editTaskId ? (

                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            justifyContent: "flex-end"
                                        }}
                                    >

                                        <Button
                                            variant="contained"
                                            size="small"
                                            onClick={save}
                                        >
                                            Save
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            size="small"
                                            onClick={reset}
                                        >
                                            Cancel
                                        </Button>

                                    </Box>

                                ) : (

                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            justifyContent: "flex-end"
                                        }}
                                    >

                                        <Button
                                            variant="outlined"
                                            size="small"
                                            onClick={() =>
                                                onCompleted(task.id)
                                            }
                                        >
                                            {task.completed
                                                ? "Undo"
                                                : "Complete"}
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            size="small"
                                            onClick={() =>
                                                onUpdate(
                                                    task.id,
                                                    task.name
                                                )
                                            }
                                        >
                                            Update
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            color="error"
                                            size="small"
                                            onClick={() =>
                                                onDeleteTask(task)
                                            }
                                        >
                                            Delete
                                        </Button>

                                    </Box>

                                )}

                            </TableCell>

                        </TableRow>

                    ))}

                </TableBody>

            </Table>

        </TableContainer>
    );
}

export default TaskList;