import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import TaskListBlock from './TaskListBlock';
import CreateTaskDialog from './CreateTaskDialog';
import { useEffect, useState } from 'react';
import agent from '../../app/api/agent';
import TasksList from './TasksList';
import { Task } from '../../app/Models/Task';
import { Box } from '@mui/material';

export default function Tasks() {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [openCreateDialog, setOpenCreateDialog] = useState(false);
    useEffect(() => {
        try {
            agent.Tasks.list('test')
                .then(data => {
                    setTasks(data)
                })
                .catch(err => console.error(err))
                .finally(() => {
                })
        } catch (err) {
            console.error(err);
        }

    }, [])

    function handleOpenDialogClick() {
        setOpenCreateDialog(true);
    }
    function handleCloseDialog() {
        setOpenCreateDialog(false);
    }

    function handleTaskCreated(task: Task) {
        console.log("the added task:" + task);
        setTasks((prevTask) => {
            return [...prevTask, task];
        });
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
                        <TaskListBlock task={task} />
                    </Box>
                ))}

            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="Add new task" onClick={handleOpenDialogClick}>
                    <AddIcon fontSize='large' sx={{ color: 'secondary.main' }} />
                </IconButton>
            </CardActions>
            <CreateTaskDialog open={openCreateDialog} onClose={handleCloseDialog} handleTaskCreated={handleTaskCreated} />
        </Card></>
}

// <Card sx={{ maxWidth: 345 }}>
//     <CardHeader
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//     />

//     <CardContent>
//         <Typography variant="body2" color="text.secondary">
//             This impressive paella is a perfect party dish and a fun meal to cook
//             together with your guests. Add 1 cup of frozen peas along with the mussels,
//             if you like.
//         </Typography>
//     </CardContent>
//     <CardActions disableSpacing>
//         {/* <IconButton aria-label="add to favorites">
//                     <FavoriteIcon />
//                 </IconButton> */}
//     </CardActions>
// </Card>