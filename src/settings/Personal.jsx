import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import InterviewInstructions from "../components/InterviewInstructions";
import VideoRecording from "../components/VideoRecording";

export default function Personal() {
  return (
    <Grid container spacing={2} className="">
      <Grid xs={12} md={12} className="m">
        <Card sx={{ height: 50 + "vh"}}>
          <CardContent>
            <InterviewInstructions/>
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} md={12} className="m">
        <Card sx={{ height: 50 + "vh"}}>
          <CardContent>
            <VideoRecording/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
