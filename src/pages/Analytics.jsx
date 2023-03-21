import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import GeoChart from "../charts/GeoChart";
import { PieChart } from "../charts/PieChart";
import "../dash.css";

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CountUp from "react-countup";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HBarChart from "../charts/HBarChart";

export default function Analytics() {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
          <div className="bgcolor">
            <Navbar />
            <Box />
            <Box>
              <Sidenav />
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Grid container spacing={2}>
                  <Grid xs={12} md={5} className="paddingall">
                    <Stack spacing={2} direction="row">
                      <Card
                        sx={{ minWidth: 49 + "%", height: 150 }}
                        className="gradient"
                      >
                        <CardContent>
                          <div className="iconstyle">
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              sx={{ color: "white" }}
                            >
                              <CreditCardIcon
                                fontSize="40px"
                                style={{ marginRight: "20px" }}
                              />
                              <CountUp
                                delay={0.1}
                                start={100}
                                end={10}
                                duration={2}
                              />
                            </Typography>
                          </div>
                          <Typography
                            gutterBottom
                            variant="body2"
                            component="div"
                            sx={{ color: "#ccd1d1" }}
                          >
                            Assignment Under Review
                          </Typography>
                        </CardContent>
                      </Card>
                      <Card
                        sx={{ minWidth: 49 + "%", height: 150 }}
                        className="gradientlight"
                      >
                        <CardContent>
                          <div className="iconstyle">
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              sx={{ color: "white" }}
                            >
                              <ShoppingBagIcon
                                fontSize="40px"
                                style={{ marginRight: "20px" }}
                              />
                              <CountUp
                                delay={0.1}
                                start={100}
                                end={12}
                                duration={2}
                              />
                            </Typography>
                          </div>

                          <Typography
                            gutterBottom
                            variant="body2"
                            component="div"
                            sx={{ color: "#ccd1d1" }}
                          >
                            Company Viewed Your Profile
                          </Typography>
                        </CardContent>
                      </Card>
                    </Stack>
                    <Box height={10} />
                    <Stack spacing={2} direction="row">
                      <Card
                        sx={{ minWidth: 49 + "%", height: 150 }}
                        className="gradient"
                      >
                        <CardContent>
                          <div className="iconstyle">
                            {/* <CreditCardIcon /> */}
                          </div>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ color: "white" }}
                          >
                            $
                            <CountUp
                              delay={0.1}
                              start={0}
                              end={1000}
                              duration={2}
                            />
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
                        <CardContent>
                          <div className="iconstyle">
                            {/* <ShoppingBagIcon /> */}
                          </div>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ color: "white" }}
                          >
                            $
                            <CountUp
                              delay={0.1}
                              start={0}
                              end={900}
                              duration={2}
                            />
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

                  <Grid xs={12} md={6}className="paddingall">
                    <Card sx={{ height: 37 + "vh" }}>
                      <HBarChart />
                    </Card>
                  </Grid>
                </Grid>

                <Grid container spacing={2} className="paddingall">
                  <Grid xs={12} md={8} className="paddingall">
                    <Card sx={{ height: 50 + "vh" }}>
                      <CardContent>
                        <GeoChart />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid xs={12} md={4} className="paddingall">
                    <Card sx={{ height: 50 + "vh" }}>
                      <CardContent>
                        <PieChart />
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </div>
        </Box>
      </Box>
    </>
  );
}
