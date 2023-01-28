import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import { height } from "@mui/system";
import TagsInput from "./TagInput";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Post
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Describe your post for Project Idea
          </DialogContentText>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={7}
            defaultValue="Type your Idea"
            autoFocus
            margin="dense"
            label="Project Idea"
            type="text"
            fullWidth
            // fullHeight
            variant="standard"
            style={{ width: "40vw", height: "40vh" }}
          />
          <TagsInput/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
