import * as React from "react";
import {Box,Paper} from "@mui/material";
import Profile from "../settings/Profile";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import VideoRecording from "../components/VideoRecording";
import InterviewInstructions from "../components/InterviewInstructions";

export default function List() {
  return (
    
    <>
    <Navbar/>
    <Box height={60}/>
    <Box sx={{ display: 'flex' }}>
    <Sidenav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }} className='bgcolor'>
    <Paper className="bgcolor paddingall" 
    style={{paddingTop:'100px'}}>
        <InterviewInstructions/>
        <VideoRecording/>
    </Paper>
      </Box>
    </Box>
    </>
  );
}
