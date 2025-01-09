import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Toolbar, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { fetchPatients, savePatient } from '../services/api';

const PatientManagement = () => {
  const [patients, setPatients] = useState([]);
  const [open, setOpen] = useState(false);
  const [patientData, setPatientData] = useState({ name: '', disease: '', allergies: '', room: '', bed: '', floor: '', age: '', gender: '', contact: '', emergencyContact: '' });

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const data = await fetchPatients();
        setPatients(data);
      } catch (error) {
        console.error('Failed to fetch patients', error);
      }
    };
    loadPatients();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => setPatientData({ ...patientData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      await savePatient(patientData);
      setPatients([...patients, patientData]);
      handleClose();
    } catch (error) {
      console.error('Failed to save patient', error);
    }
  };

  return (
    <div>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Manage Patients</Typography>
        <IconButton color="primary" onClick={handleOpen}>
          <AddIcon />
        </IconButton>
      </Toolbar>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Patient Details</DialogTitle>
        <DialogContent>
          <TextField name="name" label="Patient Name" fullWidth margin="dense" onChange={handleChange} />
          <TextField name="disease" label="Diseases" fullWidth margin="dense" onChange={handleChange} />
          <TextField name="allergies" label="Allergies" fullWidth margin="dense" onChange={handleChange} />
          <TextField name="room" label="Room Number" fullWidth margin="dense" onChange={handleChange} />
          <TextField name="bed" label="Bed Number" fullWidth margin="dense" onChange={handleChange} />
          <TextField name="floor" label="Floor Number" fullWidth margin="dense" onChange={handleChange} />
          <TextField name="age" label="Age" fullWidth margin="dense" onChange={handleChange} />
          <TextField name="gender" label="Gender" fullWidth margin="dense" onChange={handleChange} />
          <TextField name="contact" label="Contact Information" fullWidth margin="dense" onChange={handleChange} />
          <TextField name="emergencyContact" label="Emergency Contact" fullWidth margin="dense" onChange={handleChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleSubmit} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Disease</TableCell>
              <TableCell>Allergies</TableCell>
              <TableCell>Room</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient, index) => (
              <TableRow key={index}>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.disease}</TableCell>
                <TableCell>{patient.allergies}</TableCell>
                <TableCell>{patient.room}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PatientManagement;