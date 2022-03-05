import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import TaskListBlock from './TaskCard';
import CreateTaskDialog from './CreateTaskDialog';
import { useEffect, useState } from 'react';
import agent from '../../app/api/agent';
import { Task } from '../../app/Models/Task';
import { Box } from '@mui/material';
import EditTaskDialog from './EditTaskDialog';

export default function Tasks() {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [openCreateDialog, setOpenCreateDialog] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [editTask, setEditTask] = useState(false);
    const [selectedTask, setSelectedTask] = useState<Task>({
        _id: "",
        title: "",
        desc: "",
        status: false
    });
    useEffect(() => {
        if (isFetching) {
            try {
                agent.Tasks.list('test')
                    .then(data => {
                        setTasks(data)
                    })
                    .catch(err => console.error(err))
                    .finally(() => {
                        setIsFetching(false);
                    })
            } catch (err) {
                console.error(err);
            }
        }
    }, [isFetching])

    function handleOpenDialogClick() {
        setOpenCreateDialog(true);
    }
    function handleCloseDialog() {
        setOpenCreateDialog(false);
    }

    function handleOpenEditDialog(task: Task) {
        setSelectedTask(task);
        setEditTask(true);
    }
    function handleCloseEditDialog() {
        setEditTask(false);
    }




    function handleTaskCreated(task: Task) { //Update the local tasks
        setTasks((prevTasks) => {
            return [...prevTasks, task];
        });
    }

    async function handleTaskDeleted(taskId: string) {

        try {
            let response: Task;
            response = await agent.Tasks.deleteTask(taskId);
            setTasks((prevTasks) => {
                return prevTasks.filter((task) => {
                    return task._id !== taskId;
                })
            });
        } catch (err) {
            console.log("error trying to delete  task to server side" + err);
        }


    }

    function handleTaskEdited(updatedTask: Task) {
        setIsFetching(true);
    }
    return <>
        <Card sx={{ width: 345 }}>
            <CardHeader
                title="Todo List Example"
                titleTypographyProps={{
                    sx: { fontSize: 20 },
                }}
            />
            <Divider />

            <CardContent>
                {tasks.map((task) => (
                    <Box key={task._id}>
                        <TaskListBlock task={task} onDelete={handleTaskDeleted} onStartEdit={handleOpenEditDialog} onFinishEdit={handleCloseEditDialog} />
                    </Box>
                ))}

            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="Add new task" onClick={handleOpenDialogClick}>
                    <AddIcon fontSize='large' sx={{ color: 'secondary.main' }} />
                </IconButton>
            </CardActions>
            <CreateTaskDialog open={openCreateDialog} onClose={handleCloseDialog} handleTaskCreated={handleTaskCreated} />
            <EditTaskDialog open={editTask} task={selectedTask} onClose={handleCloseEditDialog} onEdit={handleTaskEdited} />

        </Card></>
}
