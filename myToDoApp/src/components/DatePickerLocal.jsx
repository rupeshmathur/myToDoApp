import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import {Typography } from "@mui/material";


function DatePickerLocal({ selectedDate, onDateChange }) {
    return (
        <Typography
            variant="h6"
            sx={{ mb: 2, fontWeight: 600 }}
        >

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={[

                        'MobileDatePicker',

                    ]}
                >

                    <DemoItem>Selected Date
                        <MobileDatePicker  value={selectedDate} onChange={(newValue) => onDateChange(newValue)} />
                    </DemoItem>

                </DemoContainer>
            </LocalizationProvider>

        </Typography>

    );
}
export default DatePickerLocal;