import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Navbar from '../../components/Navbar'
import Sidenav from '../../components/Sidenav';
import NewCalendar from '../../components/calendar/NewCalendar';

export default function Calendar_01() {
    const [value, onChange] = useState(new Date());
  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }} className="bgcolor paddingall">
        <Sidenav />
        <Box>
          <Grid container >
            <Grid md={12} xs={12}>
              <Calendar onChange={onChange} value={value} />
            </Grid>
            <Grid md={12} xs={12} style={{marginTop:'100px'}}>
              <NewCalendar />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
