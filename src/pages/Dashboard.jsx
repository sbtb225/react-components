import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import AccordianDash from "../components/AccordianDash";

import "../dash.css";

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { color } from "@mui/system";
import BarChart from "../charts/BarChart";


export default function Dashboard() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={80} />
        <Box sx={{ display: "flex"}}>
          <Sidenav />
          <Box
            component="main"
            sx={{ flex: 1, p: 3}}
            className="paddingall"
          >
            <Box height={20}/>

            <Grid container spacing={2} >
              <Grid
              xs={12}
              md={8}
              >
                <Stack spacing={2} direction="row" >
                  <Card
                    sx={{ minWidth: 49 + "%", height: 150}}
                    className="gradient"
                  >
                    <CardContent>
                      <div className="iconstyle">
                        <CreditCardIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        $500.00
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Earnings
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 49 + "%", height: 150 }}
                    className="gradientlight"
                  >
                    <CardContent
                        xs={12}
                    >
                      <div className="iconstyle">
                        <ShoppingBagIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        $900.00
                      </Typography>

                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Orders
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>

              <Grid xs={12}
              md={4}
              >
                <Stack spacing={2} className="paddingall">
                  <Card sx={{ maxWidth: 345 }}
                  className="gradientlight">
                    <Stack spacing={2} direction="row">
                      <div className="iconstyle">
                        <StorefrontIcon />
                      </div>
                      <div className="paddingall">
                        <span className="pricetitle">$203K</span>
                        <br />
                        <span className="pricesubtitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                  <Card sx={{ maxWidth: 345 }}>
                    <Stack spacing={2} direction="row">
                      <div className="iconstyleblack">
                        <StorefrontIcon />
                      </div>
                      <div className="paddingall">
                        <span className="pricetitle">$203K</span>
                        <br />
                        <span className="pricesubtitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>

            </Grid>

            <Box height={5} />
            <Grid container spacing={2} className="paddingall" >
              <Grid xs={12} md={8}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <BarChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} md={4} className="mt">
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <div>
                      <span className="pricetitle">Popular Products</span>
                    </div>
                    <AccordianDash />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  )
}
