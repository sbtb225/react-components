import React from "react";
import Navbar from "../../components/Navbar";
import Sidenav from "../../components/Sidenav";
import { styled } from "@mui/material/styles";

import { Typography, Box, Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import { width } from "@mui/system";
import ResponsiveAppBar from "../../components/ResNav";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function InternshipStudent() {
  return (
    <>
        <Navbar />
        <Box sx={{ display: "flex" }} className="bgcolor">
          <Sidenav />
          <Box 
          component="main" 
          sx={{ flexGrow: 1, p: 3 }}>
        <Box height={80} />
            
            <Grid container spacing={2}>
                <Grid xs={12} md={4}>
                  <Item style={{ padding: "10px 5px" }}>
                    <img
                      src="https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs"
                      alt="Loading"
                      style={{
                        borderRadius: "50%",
                        backgroundColor: "black",
                        padding: "5px",
                        height: "100px",
                        width: "100px",
                      }}
                    />
                    <Typography variant="h6">Rohit Jagtap</Typography>
                    <Typography>Student</Typography>
                    <Typography variant="h6">Mob No : 882807571</Typography>
                    <Typography variant="h6">
                      Email:prjagtap90@gmail.com
                    </Typography>
                  </Item>
                </Grid>
                <Grid xs={12} md={8}>
                  <Item style={{ padding: "30px 5px" }}>
                    <Typography variant="h5" textAlign={"left"}>
                      Student Summary
                    </Typography>
                    <Typography textAlign={"left"}>
                      Current Location : Kerala
                    </Typography>
                    <Typography textAlign={"left"}>
                      Prefereed Location : Anywhere in India
                    </Typography>

                    <Stack spacing={2} direction="row">
                      <Grid md={6} xs={6}>
                        <Item>College:IIT, Palakkad</Item>
                      </Grid>
                      <Grid md={6} xs={6}>
                        <Item>Course:BTech, Civil</Item>
                      </Grid>
                    </Stack>

                    <Stack spacing={2} direction="row">
                      <Grid md={6} xs={6}>
                        <Item>Year of Passing:2024</Item>
                      </Grid>
                      <Grid md={6} xs={6}>
                        <Item>Career Interest: Structural Design</Item>
                      </Grid>
                    </Stack>
                  </Item>
                </Grid>
                <Grid xs={12} md={7}>
                  <Item style={{ padding: "10px 5px" }}>
                    <Typography variant="h4">
                      Internship Program Summary
                    </Typography>
                    <Typography variant="h6" align="left">
                      Program: Freeze Thaw Design
                    </Typography>
                    <Typography variant="h6" align="left">
                      Grade: A+
                    </Typography>
                    <Typography variant="h6" align="left">
                      Video Interview : <Link>Interview Link</Link>
                    </Typography>
                    <Typography variant="h6" align="left">
                      Assessment Quiz Score: 9/10
                    </Typography>
                  </Item>
                </Grid>

                <Grid xs={12} md={5}>
                  <Item style={{ padding: "10px 5px" }}>
                    <Typography variant="h4">Prospects Summary</Typography>
                    <Typography variant="h6" align="left">
                      Eligible Immersion: 3
                    </Typography>
                    <Typography variant="h6" align="left">
                      Salary Excpectation: 20,000 per month
                    </Typography>
                    <Typography variant="h6" align="left">
                      Availability OnSite: May-July 2023
                    </Typography>
                    <Typography variant="h6" align="left">
                      Live Internship: Anytime
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
          </Box>
        </Box>
    </>
  );
}
