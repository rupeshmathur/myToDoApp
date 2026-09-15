import * as React from 'react';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({taskPriority, onPriorityChange}) {


  return (
    <Box sx={{ minWidth: 120 }}>
           <DemoItem   variant="h6"
            sx={{ mb: 2, fontWeight: 600 }}>Task Priority</DemoItem>
      <FormControl fullWidth>
  
        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={taskPriority}
          label="Priority"
          onChange={onPriorityChange}
        >
          <MenuItem value={"LOW"}>Low</MenuItem>
          <MenuItem value={"MEDIUM"}>Medium</MenuItem>
          <MenuItem value={"HIGH"}>High</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
