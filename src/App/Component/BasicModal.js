import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Textarea from './Textarea';
import Preventchar from './Preventcharacter';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const buttonStyle = {
  backgroundColor: "black",
  color: "white",
}

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addItems = props.additems;
  const charcount = props.charcount;

  return (
    <div>
      <Button style={buttonStyle} onClick={handleOpen}>Create List</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Textarea inputData={props.inputData} setInputdata={props.setInputdata} onKeyUp={props.charcount} />
          <button onClick={addItems}>Save</button> <button onClick={handleClose}>Cancel</button>  
        <Preventchar inputData={props.inputData}/>
        </Box>
      

      </Modal>
    </div>
  );
}
