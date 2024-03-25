import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

const PetCreateCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    petType: '',
    status: '',
    dob: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to create pet with formData
    console.log(formData); // Replace with API call
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>Create Pet</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Type"
            name="petType"
            value={formData.petType}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
         <TextField
            label="Date of Birth"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: true, // Make the input field read-only
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            Create Pet
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PetCreateCard;
