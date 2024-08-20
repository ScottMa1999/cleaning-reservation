// Material UI
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { StepIconProps } from '@mui/material/StepIcon';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Check from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Dayjs } from 'dayjs';

// hook
import useResidentialServiceContext from '../hooks/useResidentialServiceContext';

// React
import { useState } from 'react';
import { useNavigate } from 'react-router';

// Stepper Icon
const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: 'orange',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: 'green',
      zIndex: 1,
      fontSize: 18
    },
    '& .QontoStepIcon-circle': {
      width: 15,
      height: 15,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
      marginLeft: '4.5px',
    },
  }),
);

// Stepper Connector
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'green',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'green',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

export default function ResidentialCustomerInfoForm() {
  // states
  const { ResidentialServiceData, setResidentialServiceData, handleResidentialTypeSelection, handleResidentialApartmentTypeSelection, handleChange } = useResidentialServiceContext();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [expectedDate, setExpectedDate] = useState<Dayjs | null>(ResidentialServiceData.ExpectedCleanDate);
  const navigate = useNavigate();

  // function expression
  const showResidentialCleaningTypeContinueButton = () => {
    // Apartment Selection
    if (ResidentialServiceData.residentialType === 'Apartment' && ResidentialServiceData.apartmentType) return true;
    if (ResidentialServiceData.residentialType === 'House') return true;
    if (ResidentialServiceData.residentialType === 'Business') return true;
    return false;
  }

  const showCustomerInformationContinueButton = () => {
    if (ResidentialServiceData.name && ResidentialServiceData.email && ResidentialServiceData.phoneNumber) return true;
    return false;
  }

  const showExpectedCleanDateContinueButton = () => {
    if (ResidentialServiceData.ExpectedCleanDate !== null) return true;
    return false;
  }

  const handleContinueOnClick = () => setActiveStep(pre => pre + 1);

  const handleBackOnClick = () => setActiveStep(pre => pre - 1);

  const handleFinishOnClick = () => {
    // increment the active step
    setActiveStep(pre => pre + 1);

    // send a post request to the API and let the user know if reservation has been successfully made
    setTimeout(() => alert("Reserved Successfully, Please check your email!"), 2000);
    console.log(ResidentialServiceData);

    // navigate the customer to the home page
    navigate('/');
  }

  const handleExpectedDateChange = (newValue: Dayjs | null) => {
    setExpectedDate(newValue);
    setResidentialServiceData({
      ...ResidentialServiceData,
      ExpectedCleanDate: newValue
    })
  }


  return (
    <section className="ResidentialCustomerInfoForm">
      <Box sx={{
        width: "80%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: "4rem"
      }}>
        <Stepper activeStep={activeStep} orientation='vertical' connector={<QontoConnector />}>
          {
            ResidentialServiceData.steps && ResidentialServiceData.steps.map((step, index) => (
              <Step key={step.label} sx={{
                color: 'white !important',
                  fontWeight: 'bold !important',
                  '& .MuiStepLabel-label': {
                    color: 'white !important', // Ensures the label text is white
                    fontWeight: 'bold !important',
                  },
                  '& .Mui-active': {
                    color: 'orange !important', // Color when active
                    fontWeight: 'bold !important'
                  },
              }}>
                {/* step label */}
                <StepLabel StepIconComponent={QontoStepIcon}>{step.label}</StepLabel>

                {/* step content */}
                <StepContent>
                  {
                    step.label === 'Please Select residential cleaning types' && (
                      <Box sx={{
                        width: "fit-content",
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        gap: "0.5rem",
                        alignItems: "flex-start"
                      }}>
                        <Typography sx={{
                          fontFamily: "Raleway",
                          fontWeight: 300,
                          fontSize: "15px",
                          color: "white",
                          width: "100%",
                        }}>
                            Choose Your Residential Cleaning Type
                        </Typography>
                        <ToggleButtonGroup
                          sx={{
                            // width: '100%',
                            left: '0',
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
                          value={ResidentialServiceData.residentialType}
                          exclusive
                          onChange={handleResidentialTypeSelection}
                          aria-label="Platform"
                        >
                          <ToggleButton value="Apartment">Apartment</ToggleButton>
                          <ToggleButton value="House">House</ToggleButton>
                          <ToggleButton value="Business">Business</ToggleButton>
                        </ToggleButtonGroup>
                        {
                          ResidentialServiceData.residentialType && ResidentialServiceData.residentialType === 'Apartment' && (
                            <Box sx={{
                              width: "fit-content",
                              display: "flex",
                              flexDirection: 'column',
                              justifyContent: 'flex-start',
                              gap: "0.5rem",
                              alignItems: "center"
                            }}>
                              <Typography sx={{
                                fontFamily: "Raleway",
                                fontWeight: 300,
                                fontSize: "15px",
                                color: "white",
                              }}>
                                  Choose Apartment Type
                              </Typography>
                              <ToggleButtonGroup
                                sx={{
                                  // width: '100%',
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
                                value={ResidentialServiceData.apartmentType}
                                exclusive
                                onChange={handleResidentialApartmentTypeSelection}
                                aria-label="Platform"
                              >
                                <ToggleButton value="Studio">Studio</ToggleButton>
                                <ToggleButton value="One Bedroom">One Bedroom</ToggleButton>
                                <ToggleButton value="Two Bedrooms">Two Bedrooms</ToggleButton>
                                <ToggleButton value="Three Bedrooms">Three Bedrooms</ToggleButton>
                              </ToggleButtonGroup>
                            </Box>
                          )
                        }
                        {
                          showResidentialCleaningTypeContinueButton() && (
                            <Box sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "flex-start",
                              marginTop: "0.5rem",
                            }}>
                              <div>
                                <Button
                                  variant="contained" 
                                  onClick={handleContinueOnClick}
                                >{index === ResidentialServiceData.steps.length - 1 ? 'Finish' : 'Continue'}</Button>
                                <Button
                                  variant="contained"
                                  disabled={index === 0}
                                  onClick={handleBackOnClick}
                                >Back</Button>
                              </div>
                            </Box>
                          )
                        }
                      </Box>
                    )
                  }
                  {
                    step.label === 'Please Enter Contact Information' && (
                      <div>
                        <Box
                          component="form"
                          sx={{
                            width: 'fit-content',
                          }}
                          >
                          <TextField
                            label="name"
                            variant="outlined"
                            name="name"
                            value={ResidentialServiceData.name || ''}
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
                            value={ResidentialServiceData.email || ''}
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
                            value={ResidentialServiceData.phoneNumber || ''}
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
                      {
                        showCustomerInformationContinueButton() && (
                          <Box sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            marginTop: "0.5rem",
                          }}>
                            <div>
                              <Button
                                variant="contained" 
                                onClick={handleContinueOnClick}
                              >{index === ResidentialServiceData.steps.length - 1 ? 'Finish' : 'Continue'}</Button>
                              <Button
                                disabled={index === 0}
                                onClick={handleBackOnClick}
                              >Back</Button>
                            </div>
                          </Box>
                        )
                      }
                    </div>
                    )
                  }
                  {
                    step.label === 'Please Select expected cleaning date' && (
                      <div>
                        <Box sx={{
                          width: "fit-content",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start"
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
                          showExpectedCleanDateContinueButton() && (
                            <Box sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "flex-start",
                              marginTop: "0.5rem",
                            }}>
                              <div>
                                <Button
                                  variant="contained" 
                                  onClick={handleFinishOnClick}
                                >{index === ResidentialServiceData.steps.length - 1 ? 'Make Reservation' : 'Continue'}</Button>
                                <Button
                                  disabled={index === 0}
                                  onClick={handleBackOnClick}
                                >Back</Button>
                              </div>
                            </Box>
                          )
                        }
                      </div>
                    )
                  }
                </StepContent>
              </Step>
            ))
          }
        </Stepper>
      </Box>
    </section>
  )
}