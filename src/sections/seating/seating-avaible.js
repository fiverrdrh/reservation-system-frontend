import React, { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
} from '@mui/material';

const states = [
  { value: 'alabama', label: 'Alabama' },
  { value: 'new-york', label: 'New York' },
  { value: 'san-francisco', label: 'San Francisco' },
  { value: 'los-angeles', label: 'Los Angeles' },
];

export const SeatingAvaible = () => {
  const [values, setValues] = useState({
    Seating:"",
    Dates:"",
    AM_Slots: [], // array to store multiple values for AM slots
    PM_Slots: [], // array to store multiple values for PM slots
  });

  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    },
    []
  );

  const handleAddSlot = useCallback(
    (slotType) => {
      setValues((prevState) => ({
        ...prevState,
        [`${slotType}_Slots`]: [...prevState[`${slotType}_Slots`], ''], // add an empty slot
      }));
    },
    []
  );

  const handleSlotChange = useCallback(
    (event, index, slotType) => {
      const newSlots = [...values[`${slotType}_Slots`]];
      newSlots[index] = event.target.value;
      setValues((prevState) => ({
        ...prevState,
        [`${slotType}_Slots`]: newSlots,
      }));
    },
    [values]
  );

  const handleLogoUpload = useCallback(
    (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setValues((prevState) => ({
            ...prevState,
            logo: reader.result,
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
              {/* ... (other fields) */}
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Seating"
                  name="Seating"
                  onChange={handleChange}
                  value={values.Seating}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Dates"
                  name="Dates"
                  onChange={handleChange}
                  value={values.Dates}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Available slots: AM"
                  name="AM_Slots"
                  onChange={(event) => handleSlotChange(event, 0, 'AM')}
                  value={values.AM_Slots[0]}
                />
                {values.AM_Slots.slice(1).map((slot, index) => (
                  <TextField
                    key={index}
                    fullWidth
                    label=""
                    name="AM_Slots"
                    onChange={(event) => handleSlotChange(event, index + 1, 'AM')}
                    value={slot}
                  />
                ))}
                <Button
                  variant="outlined"
                  onClick={() => handleAddSlot('AM')}
                  sx={{ mt: 2 }}
                >
                  Add AM Slot
                </Button>
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Available slots: PM"
                  name="PM_Slots"
                  onChange={(event) => handleSlotChange(event, 0, 'PM')}
                  value={values.PM_Slots[0]}
                />
                {values.PM_Slots.slice(1).map((slot, index) => (
                  <TextField
                    key={index}
                    fullWidth
                    label=""
                    name="PM_Slots"
                    onChange={(event) => handleSlotChange(event, index + 1, 'PM')}
                    value={slot}
                  />
                ))}
                <Button
                  variant="outlined"
                  onClick={() => handleAddSlot('PM')}
                  sx={{ mt: 2 }}
                >
                  Add PM Slot
                </Button>
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
