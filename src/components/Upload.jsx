import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import Button from "@material-ui/core/Button";
import DescriptionIcon from "@mui/icons-material/Description";
import Stack from "@mui/material/Stack";
export default function Upload() {
  return (
    <Box >
    {/* UPLOAD BUTTON 1 */}
      <Card className="paddingall">
        <Typography variant="h5" style={{ marginBottom: 50 }}>
          Submit Your Work
        </Typography>
        <Grid container md={12} xs={12} direction={"row"} spacing={3}>
          <Grid item md={6} xs={12} alignItems={"center"}>
            <Card
              variant="outlined"
              className="paddingall"
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "200px",
              }}
            >
              <Card
                style={{
                  borderRadius: "50%",
                  backgroundColor: "whitesmoke",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: "10px 50px",
                  cursor: "pointer",
                }}
              >
                <DescriptionIcon fontSize={"large"} />
                <Typography variant="h5">Upload</Typography>
              </Card>
            </Card>
          </Grid>
        </Grid>
      </Card>

    {/* UPLOAD BUTTON 2 */}

      {/* <Card className="paddingall">
        <Typography variant="h5" style={{ marginBottom: 50 }}>
          Submit Your Work
        </Typography>
        <Grid container md={12} xs={12} direction={"row"} spacing={3}>
          <Grid item md={6} xs={12} alignItems={"center"}>
            <Card
              variant="outlined"
              className="paddingall"
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "200px",
              }}
            >
              <Button
                variant="contained"
                style={{
                  borderRadius: "50%",
                  padding: "10px 50px",
                  
                }}
              >
              <Stack spacing={1} direction={"column"}>
                <DescriptionIcon fontSize={"large"} style={{
                  display:"block",
                  fontSize:'50px',
                  width:"100%"
                }}/>
                <Typography variant="h5">Upload</Typography>
                </Stack>
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Card> */}
    </Box>
  );
}
