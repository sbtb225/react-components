import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function Quizinstruction() {
  return (
   

      <Grid>
        <Card style={{ padding: "10px"}}>
          <Typography variant="h4" color="success">Instructions</Typography>
          <Typography variant="h5">Quiz is a time based</Typography>
          <ul>
            <li>This quiz has 8 questions which are multiple options</li>
            <li>
              You will be provided with the score after every question is
              answered
            </li>
            <li>Unlock the answers once you finish all quizzes</li>
          </ul>
          <Typography variant="h6">
            This task aims to assess your ability to quick aptitude
          </Typography>
        </Card>
      </Grid>
  );
}