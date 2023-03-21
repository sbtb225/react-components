import React,{useState} from "react";
import Button from "@mui/material/Button";
import { useRecordWebcam } from "react-record-webcam";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";

import { Box, Paper } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function VideoRecording(props) {
  const recordWebcam = useRecordWebcam({ frameRate: 60 });

  const saveFile = async () => {
    const blob = await recordWebcam.getRecording();
  };
   
  const [isenable, setIsEnable] = useState(false)

  const buttons = (status)=>{
    setIsEnable(true)
    recordWebcam.open()
  }
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid Item md={3} xs={6}>
            <p>Camera status: {recordWebcam.status}</p>
          </Grid>
          <Grid Item md={1} xs={3}>
          <Button variant="contained" onClick={buttons} component="label">
            ON
          </Button>
           
          </Grid>
          <Grid Item md={1} xs={3}>
          <Button variant="contained" onClick={recordWebcam.close} component="label" disabled={!isenable}>
            OFF
          </Button>
          </Grid>
        </Grid>
        
        {/* this will effect preview */}

        <Grid
          container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
          spacing={1}
        >
          <Grid Item md={6} xs={12} className="mb">
            <Paper className="ml" style={{ padding: "30px 50px" }}>
              <video
                style={{ width: "100%", height: "70%" }}
                ref={recordWebcam.webcamRef}
                autoPlay
                muted
              />
            </Paper>
          </Grid>
          <Grid Item md={6} xs={12} className="mb">
            <Paper className="ml" style={{ padding: "30px 50px" }}>
              <video
                ref={recordWebcam.previewRef}
                autoPlay
                muted
                controls
                style={{ width: "100%", height: "70%" }}
              />
            </Paper>
          </Grid>
        </Grid>

        {/* this will efffect buttons */}
        <Grid container md={6.5} xs={12} flex justifyContent={"space-between"}>
          <Button onClick={recordWebcam.start} variant="contained" disabled={!isenable}>
            Start recording
          </Button>

          <Button onClick={recordWebcam.stop} variant="contained" disabled={!isenable}>
            Stop recording
          </Button>

          <Button onClick={recordWebcam.retake} variant="contained" disabled={!isenable}>
            Retake
          </Button>

          <Button variant="contained" onClick={saveFile} component="label" disabled={!isenable}>
            Upload
          </Button>
          
        </Grid>
      </Box>
    </>
  );
}
