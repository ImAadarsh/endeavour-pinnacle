import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ReadMore({_id}) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({caseid : _id, email : ''});
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    submit();
  };

  const setValue = (e) => {
    setData((pre)=>{
        return {
            ...pre,
            [e.target.name] : e.target.value.trim()
        }
    })
  }

  const submit = async () => {
    console.log(data);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify(data);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
      
    await fetch(`${process.env.REACT_APP_URL}/user/send`, requestOptions)
        .then(response => response.json())
        .then((result)=>{
          return result;
        })
        .catch(error => console.log('error', error));
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Read More
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Download Full Case Study</DialogTitle>
        <DialogContent>
          <DialogContentText>
             Enter Email Address to receive the case study
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            name='email'
            onChange={setValue}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}