import React from 'react'
import Box from '@mui/material/Box';
import Navbar from '../../components/Navbar';
import Sidenav from '../../components/Sidenav';
import Internship_Stats from '../../components/Internship_Stats';
import All_Program from '../../components/All_Program';

export default function CompanyInternship() {
  return (
    <>
    <Navbar/>
    <Box height={70}/>
    <Box sx={{ display: 'flex' }} className="bgcolor">
    <Sidenav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Internship_Stats/>
    <All_Program/>
      </Box>
    </Box>
    </>
  )
}
