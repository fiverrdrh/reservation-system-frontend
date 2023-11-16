import { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  },
  {
    value: 'los-angeles',
    label: 'Los Angeles'
  }
];

export const AccountProfileDetails = () => {
  const [values, setValues] = useState({
    Restaurant_Name: '',
    Description: '',
    Available_slots_AM: '',
    Available_slots_PM: '',
  });

  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );

  const handleLogoUpload = useCallback(
    (event) => {
      // Handle logo upload logic here
      // You can use FileReader to read the file and set it in the state
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setValues((prevState) => ({
            ...prevState,
            logo: reader.result
          }));
        };
        reader.readAsDataURL(file);
      }
    },
    []
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      // Add logic to handle form submission
    },
    []
  );

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Restaurant Profile" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Restaurant Name"
                  name="Restaurant_Name"
                  onChange={handleChange}
                  required
                  value={values.Restaurant_Name}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Description"
                  name="Description"
                  multiline
                  rows={4}
                  onChange={handleChange}
                  value={values.Description}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Restaurant Address"
                  name="Restaurant_Address"
                  onChange={handleChange}
                  required
                  value={values.Restaurant_Address}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="City"
                  name="City"
                  onChange={handleChange}
                  required
                  value={values.City}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Telephone"
                  name="Telephone"
                  onChange={handleChange}
                  required
                  value={values.Telephone}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Zip Code"
                  name="Zip"
                  onChange={handleChange}
                  required
                  value={values.Zip}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.country}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Select State"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                >
                  {states.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Longitude"
                  name="Longitude"
                  onChange={handleChange}
                  value={values.Longitude}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Latitude"
                  name="Latitude"
                  onChange={handleChange}
                  value={values.Latitude}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  type="file"
                  label="Upload Logo"
                  name="logo"
                  onChange={handleLogoUpload}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
