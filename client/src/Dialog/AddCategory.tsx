import React,{FC,useState,ChangeEvent} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Prop{
  open:boolean,
  handleClose:()=>void,
  handleConfirm:(name:string)=>void
}

const AddCategory:FC<Prop>=({open,handleClose,handleConfirm})=>{

  const [category,setCategory]=useState<string>('')

  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
      setCategory(e.target.value)
  } 
  return (
    <div>
     
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            insert your category name here
          </DialogContentText>
          <TextField
          value={category}
          onChange={handleChange}
            autoFocus
            margin="dense"
          
            label="Category"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>handleConfirm(category)} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddCategory