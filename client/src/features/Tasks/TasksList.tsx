import { Box } from "@mui/material";
import { Task } from "../../app/Models/Task";
import TaskListBlock from "./TaskListBlock";

interface Props {
    tasks: Task[];
}
export default function TasksList({ tasks }: Props) {



    return <>
        {
            tasks.map((task: Task) => {
                <Box key={task.taskId}><TaskListBlock task={task} /></Box>
            })
        }</>

}

// {
//     tasks.map((task: Task) => (
//         <TaskListBlock task={task} />
//     ))
// }
