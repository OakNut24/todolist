import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import { Grid } from '@mui/material';
import { FieldValues, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import AppTextInput from '../../app/components/AppTextInput';

export interface Props {
    open: boolean;
    // onClose: (value?: string) => void;
    // onAdd: () => void;
    // handleTaskAdded: () => void;
}

export default function CreateTaskDialog(props: Props) {
    const { control, reset, watch, setError, handleSubmit, formState: { errors } } = useForm({
    });
    const { open, ...other } = props;

    const handleCancel = () => {
        reset({
            name: "",
            genre: "",
            rating: 0,
            file: null,
        });
    };


    function handleSubmitData(data: FieldValues) {
        console.log(data);
    }

    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: 320 } }}
            maxWidth="xs"
            open={open}
            {...other}
        >
            <form onSubmit={handleSubmit(handleSubmitData)}>
                <DialogTitle>Create A Task</DialogTitle>
                <DialogContent dividers sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <AppTextInput control={control} name='title' label='Task Title' />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <AppTextInput control={control} name='desc' label='Task Description' />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button type='submit'>ADD</Button>
                </DialogActions>
            </form>
        </Dialog >
    );
}
