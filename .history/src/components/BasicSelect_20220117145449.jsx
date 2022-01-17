import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function BasicSelect({number, setNumber}) {
   const handleChange = (event) => {
     setNumber({...number, number: event.target.value});
   };
   return (
     <Box sx={{ minWidth: 120}} >
       <FormControl fullWidth sx={{color: 'white'}}>
         <InputLabel id="demo-simple-select-label" sx={{color: 'white'}}>Number</InputLabel>
         <Select
           sx={{color: 'white', height: '50px'}}
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           value={number.number}
           label="1"
           onChange={handleChange}
         >
           <MenuItem value={10}>Ten</MenuItem>
           <MenuItem value={20}>Twenty</MenuItem>
           <MenuItem value={30}>Thirty</MenuItem>
         </Select>
       </FormControl>
     </Box>
   );
 }