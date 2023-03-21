import React from 'react'
import Box from '@mui/material/Box';

import Navbar from '../../components/Navbar'
import Sidenav from '../../components/Sidenav'
import Table from '../../components/table/Table';
import TableExport from '../../components/table/Table';


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
