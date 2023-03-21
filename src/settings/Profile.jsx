import React from 'react'
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";

export default function Profile() {
  return (
    <Grid container spacing={2} className="">
      <Grid xs={12} md={4} className="m">
        <Card sx={{ height: 50 + "vh" }}>
          <CardContent></CardContent>
        </Card>
      </Grid>
      <Grid xs={12} md={8} className="m">
        <Card sx={{ height: 50 + "vh" }}>
          <CardContent></CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
