import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Navbar from '../components/Navbar'
import Sidenav from '../components/Sidenav'
import List from '../settings/List';

export default function Settings() {
  return (
    <>
    <Navbar/>
    <Box height={70}/>
    <Box sx={{ display: 'flex' }} className="bgcolor">
    <Sidenav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <List/>
      </Box>
    </Box>
    </>
  )
}
