import {React,useEffect} from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";

import axios from "axios";
import data from "../Data";

export default function CompanyCard({}) {

  // const [enroll, setEnroll] = React.useState(null)
  // const [load, setLoad] = React.useState(true)
const baseURL = "https://api.joinuplyft.com";

  useEffect(() => {
    axios.post(baseURL + "/checkEnroll" , {
    }).then((res) => {
      console.log(res.data)

    }).catch(err => console.log(err))
  }, [])
  return (
    <>
      <Box height={30} />
      <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >
      {data.map((element) => {
        return (
          
            <Grid item xs={2} sm={4} md={12}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image={element.project_image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {element.company_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {element.project_field}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {element.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {element.eta}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    style={{ width: 100 + "%" }}
                  >
                    Apply
                  </Button>
                </CardActions>
              </Card>
            </Grid>
        );
      })}
          </Grid>
    </>
  );
}
