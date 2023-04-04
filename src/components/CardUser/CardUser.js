import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";


const CardUser = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={data.image} alt="image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.phone}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardUser;
