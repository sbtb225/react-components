import React from 'react'
import Box from '@mui/material/Box';

import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'
import ProductList from './products/ProductList';
import ProductsList01 from './products/ProductsList01';


export default function Products() {
  return (
    <>
    <div className="bgcolor">
    <Navbar/>
    <Box height={70}/>
    <Box sx={{ display: 'flex' }}>
    <Sidenav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <ProductList/>
      {/* <ProductsList01/> */}
      </Box>
    </Box>
    </div>
    </>
  )
}
