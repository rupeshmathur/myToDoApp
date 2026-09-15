import {
    Box,
    Checkbox,
    Chip,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Tooltip,
    Button
} from "@mui/material";



import {
    MdCheckCircleOutline,
    MdDeleteOutline,
    MdEdit,
    MdSave,
    MdClose,
    MdUndo
} from "react-icons/md";


function TaskList({
    taskNames,
    onDeleteTask,
    onCompleted,
    onUpdate,
    editTaskId,
    editTaskName,
    setEditTaskName,
    save,
    reset,
    editTaskPriority,
    onEditPriorityChange
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

                                {task.id === editTaskId ? (

                                    <BasicSelect
                                        taskPriority={editTaskPriority}
                                        onPriorityChange={onEditPriorityChange}
                                    />

                                ) : (

                                    <Chip
                                        label={task.priority}
                                        size="small"
                                        color={
                                            task.priority === "HIGH"
                                                ? "error"
                                                : task.priority === "MEDIUM"
                                                    ? "warning"
                                                    : "success"
                                        }
                                    />
                                )}

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

                                    // EDIT MODE
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            alignItems: "center",
                                            gap: 0.5
                                        }}
                                    >

                                        {/* SAVE */}
                                        <Tooltip title="Save changes">
                                            <IconButton
                                                size="small"
                                                color="primary"
                                                onClick={save}
                                                sx={{
                                                    border: "1px solid",
                                                    borderColor: "divider",
                                                    "&:hover": {
                                                        backgroundColor: "action.hover"
                                                    }
                                                }}
                                            >
                                                <MdSave size={20} />
                                            </IconButton>
                                        </Tooltip>


                                        {/* CANCEL */}
                                        <Tooltip title="Cancel">
                                            <IconButton
                                                size="small"
                                                onClick={reset}
                                                sx={{
                                                    border: "1px solid",
                                                    borderColor: "divider",
                                                    "&:hover": {
                                                        backgroundColor: "action.hover"
                                                    }
                                                }}
                                            >
                                                <MdClose size={20} />
                                            </IconButton>
                                        </Tooltip>

                                    </Box>

                                ) : (

                                    // NORMAL MODE
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            alignItems: "center",
                                            gap: 0.5
                                        }}
                                    >

                                        {/* COMPLETE / UNDO */}
                                        <Tooltip
                                            title={
                                                task.completed
                                                    ? "Mark as pending"
                                                    : "Mark as completed"
                                            }
                                        >
                                            <IconButton
                                                size="small"
                                                color={task.completed ? "success" : "default"}
                                                onClick={() => onCompleted(task.id)}
                                            >
                                                {task.completed ? (
                                                    <MdUndo size={20} />
                                                ) : (
                                                    <MdCheckCircleOutline size={20} />
                                                )}
                                            </IconButton>
                                        </Tooltip>


                                        {/* EDIT */}
                                        <Tooltip title="Edit task">
                                            <IconButton
                                                size="small"
                                                color="primary"
                                                onClick={() =>
                                                    onUpdate(
                                                        task.id,
                                                        task.name,
                                                        task.priority
                                                    )
                                                }
                                            >
                                                <MdEdit size={20} />
                                            </IconButton>
                                        </Tooltip>


                                        {/* DELETE */}
                                        <Tooltip title="Delete task">
                                            <IconButton
                                                size="small"
                                                color="error"
                                                onClick={() => onDeleteTask(task)}
                                            >
                                                <MdDeleteOutline size={20} />
                                            </IconButton>
                                        </Tooltip>

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