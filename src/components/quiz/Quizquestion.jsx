import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { display } from "@mui/system";

export default function Quizquestion() {
  return (
    <Grid>
      <Card style={{ padding: "10px" }}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h4" color="success">
            Knowledge check
          </Typography>
          <Typography variant="h5">Q 7 of 8</Typography>
        </Stack>
        <Typography variant="h6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          expedita obcaecati placeat tenetur, neque reiciendis, fugiat eos
          similique ut quis dolores nulla voluptatum sed! Inventore,Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ipsam expedita obcaecati
          placeat tenetur, neque reiciendis, fugiat eos similique ut quis
          dolores nulla voluptatum sed! Inventore
        </Typography>
        <Stack spacing={2} direction="column" width={"100px"}>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
        </Stack>
        <Card
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:'none',
            margin:'10px'
          }}
        >
          <Button variant="contained">Contained</Button>
        </Card>
      </Card>
    </Grid>
  );
}