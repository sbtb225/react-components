
import React from 'react'
import Box from '@mui/material/Box';

import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'
import ResponsiveDrawer from '../components/ResSide';
import CompanyCard from '../components/CompanyCard';
import Upload from '../components/Upload';
import Download from '../components/Download';
export default function Home() {
  return (
    
    <>
    <Navbar/>
    <Box height={60}/>
    <Box sx={{ display: 'flex' }} className='bgcolor paddingall'>
    <Sidenav/>
    {/* <ResponsiveDrawer/> */}
    <Box component="main" >
      {/* <h1>Soon Dashboard will be here</h1> */}
      <CompanyCard/>
      {/* <Upload/>
      <Download/> */}
      </Box>
    </Box>
    </>
  );
}
