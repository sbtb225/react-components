import React from 'react'
import {Typography,Box,Grid,Paper} from "@mui/material";




export default function Internship_Stats() {
  return (
    <>
    <Box className='paddingall mb'>
        <Grid container
        style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'space-around'
        }}
        spacing={1}
        >
            <Grid Item md={6} xs={12} className='mb'>
            <Paper className='ml' style={{padding:'30px 50px'}}>
              <Typography variant='h6'>Total Internship Hosted - 5</Typography>
              <Typography variant='h6'>Total Applicants - 200</Typography>
              <Typography variant='h6'>A+ Grade Submission- 10</Typography>
              <Typography variant='h6'>A Grade Submission - 30</Typography>
              <Typography variant='h6'>B,C Grade Submission - 160</Typography>
              </Paper>
            </Grid>
            <Grid Item md={6} xs={12} className='mb'>
            <Paper className='ml' style={{padding:'10px 50px'}}>
            <Typography variant='h4'>Rewards And Recognition</Typography>
            <Typography variant='h6'>Immersion hosted - 10</Typography>
              <Typography variant='h6'> Monetary reward - 10</Typography>
              <Typography variant='h6'>Pending Immersions - 20 </Typography>
              <Typography variant='h6'>Onsite Internships awarded - 5 </Typography>
              <Typography variant='h6'>Job Offers made - 5</Typography>
              </Paper>
            </Grid>
        </Grid>
    </Box>
    </>
  )
}
