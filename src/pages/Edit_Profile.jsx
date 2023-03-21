import React from "react";
import { Box, Paper } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import { Grid, Typography, Stack, Button, TextField } from "@mui/material";
import "../../src/dash.css";
import profilepic from "../assets/blankprofile.webp";

export default function Edit_Profile() {
  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="bgcolor">
          <Paper style={{ padding: "10px 50px" }}>
            <Grid item md={12} sx={12}>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography variant="h4">Edit Profile</Typography>
                <img
                  src={profilepic}
                  alt="Loading.."
                  style={{
                    height: "100px",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                />
              </Stack>
            </Grid>
            <Grid container style={{ padding: "0px 20%" }}>
              <Grid item md={12} sx={12}>
                <Stack
                  direction={"row"}
                  justifyContent={"space-evenly"}
                  spacing={2}
                >
                  <Grid direction={"column"} md={6} sx={12} className="mb">
                    <Typography variant="h6">First Name</Typography>
                    <TextField
                      id="outlined-basic"
                      label="name"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid direction={"column"} md={6} sx={12} className="mb">
                    <Typography variant="h6">Last Name</Typography>
                    <TextField
                      id="outlined-basic"
                      label="Last Name"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                </Stack>
              </Grid>
              <Grid md={12} sx={12} className="mb">
                <Typography variant="h6">Email</Typography>
                <TextField
                  id="outlined-basic"
                  label="User@xyz.com"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid md={12} sx={12} className="mb">
                <Typography variant="h6">Address</Typography>
                <TextField
                  id="outlined-basic"
                  label="Permanant Address"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid md={12} sx={12} className="mb">
                <Typography variant="h6">Contact No</Typography>
                <TextField
                  id="outlined-basic"
                  label="Number"
                  variant="outlined"
                  type={"number"}
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item md={12} sx={12}>
                <Stack
                  direction={"row"}
                  justifyContent={"space-evenly"}
                  spacing={2}
                >
                  <Grid direction={"column"} md={6} sx={12} className="mb">
                    <Typography variant="h6">City</Typography>
                    <TextField
                      id="outlined-basic"
                      label="City"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid direction={"column"} md={6} sx={12} className="mb">
                    <Typography variant="h6">State</Typography>
                    <TextField
                      id="outlined-basic"
                      label="State"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                </Stack>
              </Grid>

              <Grid item md={12} sx={12} className="mb">
                <Stack
                  direction={"row"}
                  justifyContent={"space-evenly"}
                  spacing={2}
                >
                  <Grid direction={"column"} md={6} sx={12} className="mb">
                    <Typography variant="h6">Prefered City</Typography>
                    <TextField
                      id="outlined-basic"
                      label="Prefered City"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid direction={"column"} md={6} sx={12} className="mb">
                    <Typography variant="h6">Undergrad Degree</Typography>
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                </Stack>
              </Grid>

              <Grid md={12} sx={12} className="mb">
                <Typography variant="h6">Password</Typography>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  type={"password"}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Stack spacing={2} direction="row" style={{ marginTop: "10px" }}>
                <Button variant="outlined">Cancel</Button>
                <Button variant="contained">Save</Button>
              </Stack>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </>
  );
}
