import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React from "react";

export default function TodoDetails({
  todoDetails, // Fixed name
  openDialog,
  setOpenDialog,
  setTodoDetails
}) {
  return (
    <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
      <DialogTitle>{todoDetails?.todo}</DialogTitle>
      <DialogActions>
        <Button onClick={() =>{ 
          setTodoDetails(null)
          setOpenDialog(false)}}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
