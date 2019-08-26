import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Card, CardHeader, CardMedia, CardContent, 
  CardActions,Collapse, Avatar,IconButton, 
  Typography } from "@material-ui/core"

import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Rating from "@material-ui/lab/Rating"

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500,
    marginBottom: 40,
    margin:"0 auto",
    
  },
  cardHeader:{
    backgroundColor:"#2C365E",
    color:"#fffffa",
    fontWeight:"bold",
    textTransform:"capitalize",
    fontFamily:'Fira Sans, sans-serif',
  },
  media: {
    margin:10,
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "#FF5941",
  },
  footer:{
      backgroundColor:"#2C365E"
  },
  icon:{
      color:"#fffffa",
  },
  resultsText:{
    fontFamily:'Fira Sans, sans-serif',
    color:"#fffffa",
    fontSize:20,
  }
}));

const ReviewCard=(props)=>{
    const { postal_code, address, landlord_bio, comment } = props.data;
const { first_name, last_name } = landlord_bio;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick=()=>{
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar aria-label="review" className={classes.avatar}>
            ?
          </Avatar>
        }
        title={`Street Address: ${address.street_number || "n/a"}`}
        subheader={`Apartment Number: ${address.apartment_number || "n/a"}`}
      >
     </CardHeader>
      <CardMedia
        className={classes.media}
        image="/static/imgs/toronto.jpeg"
        title="toronto sketch"
      />
      <CardActions className={classes.footer} disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon className={classes.icon}/>
        </IconButton>
        <Typography style={{textTransform:"capitalize", color:"#cdcdcd"}}>Landlord Name: <span style={{color:"#fffffa"}}>{first_name} {last_name}</span></Typography>
        <Rating value={props.data.rating? props.data.rating : 0} readOnly style={{color:"#FF5941", marginLeft: 20}}/>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon style={{color:"#FF5941"}}/>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
          {comment}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export { ReviewCard }