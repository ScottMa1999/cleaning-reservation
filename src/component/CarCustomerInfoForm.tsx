// Material UI
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Dayjs } from 'dayjs';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

// Contexts
import useCarServiceContext from "../hooks/useCarServiceContext";

// React Hooks
import { useState } from "react";

export default function CustomerInfoForm() {
  // states
  const {CarServiceData, handleChange, handleCarTypeSelection, setCarServiceData, handleCarLocationSelection} = useCarServiceContext();
  const [situationValue, setSituationValue] = useState<number | number[]>(CarServiceData.CarCurrentSituation)
  const [expectedDate, setExpectedDate] = useState<Dayjs | null>(CarServiceData.ExpectedCleanDate)
  const [formSubmitStatus, setFormSubmitStatus] = useState<'unfinished' | 'pending' | 'submitted'>('unfinished')


  // function expression
  const handleCarSituationChange = (event: Event, newValue: number | number[]) => {
    setSituationValue(newValue as number);
    setCarServiceData({
      ...CarServiceData,
      CarCurrentSituation: newValue
    })
  }

  const handleExpectedDateChange = (newValue: Dayjs | null) => {
    setExpectedDate(newValue);
    setCarServiceData({
      ...CarServiceData,
      ExpectedCleanDate: newValue
    })
  }


  const handleCarServiceReservation = async() => {
    setFormSubmitStatus('pending');

    // update estimated price
    
    // send a post request to /api/carServiceReservation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(CarServiceData)
    setFormSubmitStatus('submitted');
  }

  return (
    <section className="customer-information">
      {/* <img src={CustomerIcon} alt="customer-icon" id="customer-icon" /> */}

      {/* name, email, phoneNumber */}
      <Box
          component="form"
          sx={{
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start !important',
            alignItems: 'flex-start !important'
          }}
          >
          <Typography sx={{
          fontFamily: "Raleway",
          fontWeight: 300,
          fontSize: "15px",
          color: "white",
          }}>
            Please Enter Contact Information
          </Typography>
          <TextField
            label="name"
            variant="outlined"
            name="name"
            value={CarServiceData.CustomerName}
            onChange={(e) => handleChange(e, "name")}
            sx={{'& .MuiOutlinedInput-root': {
              backgroundColor: 'dark',
              '& fieldset': {
                borderColor: 'white', // Default border color
              },
              '&:hover fieldset': {
                borderColor: 'white', // Border color when hovered
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: 'white', // Change the text color here
              }},
              '& .MuiInputLabel-root': {
                color: 'white', // Change the label color shere
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'white', // Change the label color when focused
              }
            }}
            fullWidth
          />
          <TextField
            label="email"
            variant="outlined"
            name="email"
            value={CarServiceData.CustomerEmail}
            onChange={(e) => handleChange(e, "email")}
            sx={{'& .MuiOutlinedInput-root': {
              backgroundColor: 'dark',
              '& fieldset': {
                borderColor: 'white', // Default border color
              },
              '&:hover fieldset': {
                borderColor: 'white', // Border color when hovered
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: 'white', // Change the text color here
              }},
              '& .MuiInputLabel-root': {
                color: 'white', // Change the label color shere
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'white', // Change the label color when focused
              }
            }}
            fullWidth
          />
          <TextField
            label="phone number"
            variant="outlined"
            name="phone-number"
            value={CarServiceData.CustomerPhoneNumber}
            onChange={(e) => handleChange(e, "phoneNumber")}
            sx={{'& .MuiOutlinedInput-root': {
              backgroundColor: 'dark',
              '& fieldset': {
                borderColor: 'white', // Default border color
              },
              '&:hover fieldset': {
                borderColor: 'white', // Border color when hovered
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white', // Border color when focused
              },
              '& .MuiInputBase-input': {
                color: 'white', // Change the text color here
              }},
              '& .MuiInputLabel-root': {
                color: 'white', // Change the label color shere
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'white', // Change the label color when focused
              }
            }}
            fullWidth
          />
      </Box>
      
      {/* Choose your vehicles */}
      <Box sx={{
        display: "flex",
        flexDirection: 'column',
        justifyItems: 'left',
        gap: "0.5rem",
        alignItems: "center"
      }}>
        <Typography sx={{
          fontFamily: "Raleway",
          fontWeight: 300,
          fontSize: "15px",
          color: "white",
        }}>
            Choose Your Vehicles
        </Typography>
        <ToggleButtonGroup
          sx={{
            width: '100%',
            '& .MuiToggleButtonGroup-grouped': {
              borderColor: 'white', // Border color for the buttons
              color: 'white', // Font color for the button
              transition: 'all 0.2s ease',
              width: '100%',
              '&.Mui-selected': {
                borderColor: 'white !important', // Border color when selected
                color: 'black !important', // Font color when selected
                backgroundColor: 'white !important', // Background color when selected
              }
            },
          }}
          value={CarServiceData.CarType}
          exclusive
          onChange={handleCarTypeSelection}
          aria-label="Platform"
        >
          <ToggleButton value="Compact">Compact</ToggleButton>
          <ToggleButton value="SUV">SUV</ToggleButton>
          <ToggleButton value="Truck">Truck</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Choose your vehicle parking location */}
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        gap: "0.5rem",
        alignItems: "center"
      }}>
        <Typography sx={{
          fontFamily: "Raleway",
          fontWeight: 300,
          fontSize: "15px",
          color: "white"
        }}>
            Choose Your Parking Lot
        </Typography>
        <ToggleButtonGroup
          sx={{
            width: '100%',
            '& .MuiToggleButtonGroup-grouped': {
              borderColor: 'white', // Border color for the buttons
              color: 'white', // Font color for the button
              transition: 'all 0.2s ease',
              width: '100%',
              '&.Mui-selected': {
                borderColor: 'white !important', // Border color when selected
                color: 'black !important', // Font color when selected
                backgroundColor: 'white !important', // Background color when selected
              }
            },
          }}
          value={CarServiceData.ExpectedCleanLocation}
          exclusive
          onChange={handleCarLocationSelection}
          aria-label="Platform"
        >
          <ToggleButton value="Building-1">Building-1</ToggleButton>
          <ToggleButton value="Building-2">Building-2</ToggleButton>
          <ToggleButton value="Building-3">Building-3</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      
      {/* Slider */}
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        gap: "0.1rem",
        alignItems: "center"
      }}>
        <Typography sx={{
          fontFamily: "Raleway",
          fontWeight: 300,
          fontSize: "15px",
          color: "white"
        }}>
            Vehicles Current Clean Situation
        </Typography>
        <Stack spacing={1} direction="row" sx={{ width: "100%", color: "white" }} alignItems="center">
          <Typography sx={{ width:'fit-content !important' }}>Clean</Typography>
          <Slider aria-label="Volume" value={situationValue} onChange={handleCarSituationChange} />
          <Typography>Dirty</Typography>
        </Stack>
      </Box>

      {/* Choose your expected clean date */}
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <Typography sx={{
          fontFamily: "Raleway",
          fontWeight: 300,
          fontSize: "15px",
          color: "white"
        }}>
           Expected Clean Date
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']} sx={{ width: "100%" }}>
            <DateTimePicker value={expectedDate} onChange={handleExpectedDateChange} sx={{
              '& .MuiInputBase-root': {
                color: 'white', // Font color
                backgroundColor: 'transparant', // Background color
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white', // Border color
                },
                '&:hover fieldset': {
                  borderColor: 'white', // Border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white', // Border color when focused
                },
              },
              '& .MuiSvgIcon-root': {
                color: 'white', // Calendar icon color
              },
            }}/>
          </DemoContainer>
        </LocalizationProvider>
      </Box>

      {
        formSubmitStatus === 'unfinished' && <Button variant="contained" onClick={handleCarServiceReservation} sx={{ marginTop: "1rem !important" }}>Make a Reservation</Button>
      }
      {
        formSubmitStatus === 'pending' && <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
        sx={{
          backgroundColor: '#1976d2 !important',
          border: '1px solid #1976d2',
          color: 'white !important',
          marginTop: "1rem !important",
          '& .MuiLoadingButton-loadingIndicator': {
            color: 'white',  // Change spinner (loading icon) color
          }
        }}
      >
        Make a Reservation
      </LoadingButton>
      }
      {
        formSubmitStatus === 'submitted' && <Button variant="contained" disabled sx={{
          marginTop: "1rem !important",
          '&:disabled': {
            backgroundColor: 'green',  // Ensure background stays green when disabled/loading
            color: 'white',
          },
        }}>Reserved! Please check your email</Button>
      }
    </section>
  )
}