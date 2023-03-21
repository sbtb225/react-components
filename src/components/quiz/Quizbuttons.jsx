import React from "react";
import { Typography, Box, Grid, Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import { width } from "@mui/system";
export default function Quizbuttons() {
  return (
    <Box>
      <Typography variant="h3">Quiz</Typography>
      <Grid display={'flex'} direction={'column'}
      style={{
        justifyContent:'center',
        alignItems:'center'
      }}>

        <Stack direction={"row"} justifyContent={'space-between'}
        style={{width:'100%',padding:"10px"}}>
          <Typography
            variant="h5"
            style={{
              borderRadius: "10px",
              backgroundColor: "skyblue",
              padding: "10px",
              cursor:'pointer'
            }}
          >
            4/8
          </Typography>
          <Typography
            variant="h5"
            style={{
              borderRadius: "10px",
              backgroundColor: "skyblue",
              padding: "10px",
              cursor:'pointer'
            }}
          >
            Unlock Answers
          </Typography>
        </Stack>

        <Typography
          variant="h5"
          style={{
            borderRadius: "25px",
            backgroundColor: "skyblue",
            padding: "10px 20px",
            marginTop:'10px',
            textAlign:'center',
            cursor:'pointer',
          }}
        >
          Start Quiz
        </Typography>
      </Grid>
    </Box>
  );
}