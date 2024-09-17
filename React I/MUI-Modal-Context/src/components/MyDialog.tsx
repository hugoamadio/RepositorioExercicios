import { useContext } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { ModalContext } from '../context/ModalContext';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function MyDialog() {
  const modalContext = useContext(ModalContext)
  if(!modalContext){
    return null;
  }

  const {data, open, setOpen} = modalContext


  return (
    <>
      <BootstrapDialog
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open || false}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {data?.title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            {data?.content}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)}>
            {data?.label}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}

export default MyDialog