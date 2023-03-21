import React from 'react'
import { Card, Grid, CardContent, Typography } from "@mui/material";


export default function InterviewInstructions() {
  return (
    <Grid container spacing={1}>
      <Grid xs={12} md={8} className="m">
        <Card>
          <CardContent>
            <Typography variant="h5" textAlign={"left"}>
              Video Interview Instructions
            </Typography>
            <ul>
              <li>
                Make yourslef look professional as the video is shown to the
                company
              </li>
              <li>Various tenders received from relevant subcontractors</li>
              <li>Values of tenders against scope of works</li>
              <li>
                Different types of pricing details e.g. schedule of rates or
                lump sum price{" "}
              </li>
              <li>Systematic reporting</li>
              <li>
                A further breakdown of the selected subcontractors incorporating
                contingencies and any further allowances and exclusions{" "}
              </li>
            </ul>
            This task aims to assess your ability to read and interpret tenders
            and to familiarise you with subcontractor comparisons.
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} md={4} className="m">
        <Card height={"500px"}>
          <CardContent>
            <Typography variant="h5" textAlign={"left"}>
              Instructions Video
            </Typography>
            <iframe
              height={"200px"}
              width={"100%"}
              src="https://www.youtube.com/embed/Yjc8gPbx46c"
              title="Stunning Pluto Images Show Something Unusual Is Going On There"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </CardContent>
        </Card>
      </Grid>
      
    </Grid>
  )
}
