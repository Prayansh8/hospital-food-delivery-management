import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';

const PantryManagement = () => {
  const [pantry, setPantry] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [staffData, setStaffData] = useState({ name: '', contact: '', location: '' });

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);
  const handleInputChange = (e) => setStaffData({ ...staffData, [e.target.name]: e.target.value });

  const handleAssignTask = () => {
    setPantry([...pantry, staffData]);
    handleCloseDialog();
  };

  return (
    <div>
      <Typography variant="h6">Manage Pantry Staff</Typography>
      <Button variant="contained" color="secondary" onClick={handleOpenDialog}>
        Add Pantry Staff
      </Button>
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Add Staff Details</DialogTitle>
        <DialogContent>
          <TextField name="name" label="Staff Name" fullWidth margin="dense" onChange={handleInputChange} />
          <TextField name="contact" label="Contact Info" fullWidth margin="dense" onChange={handleInputChange} />
          <TextField name="location" label="Location" fullWidth margin="dense" onChange={handleInputChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Cancel</Button>
          <Button onClick={handleAssignTask} color="primary">Assign Task</Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pantry.map((staff, index) => (
              <TableRow key={index}>
                <TableCell>{staff.name}</TableCell>
                <TableCell>{staff.contact}</TableCell>
                <TableCell>{staff.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PantryManagement;