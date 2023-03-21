import React from 'react'
import Box from '@mui/material/Box';

import Navbar from '../../components/Navbar'
import Sidenav from '../../components/Sidenav'
import TableExport from '../../components/TableExport';
import Table from '../../components/Table';

export default function TableList() {
  return (
    <>
    <Navbar/>
    <Box height={60}/>
    <Box sx={{ display: 'flex' }} className='bgcolor paddingall'>
    <Sidenav/>
    {/* <ResponsiveDrawer/> */}
    <Box component="main" >
    <TableExport/>
    <Box height={60}/>

    <Table/>
      </Box>
    </Box>
    </>
  )
}
