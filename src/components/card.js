import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Card, CardMedia, CardContent, 
  CardActions,Collapse,IconButton, 
  Typography } from "@material-ui/core"

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Rating from "@material-ui/lab/Rating"

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 450,
    borderRadius:"7px",
    marginBottom: 40,
    margin:"0 auto",
    padding:0,
    textAlign:"left",
    fontFamily:"Fira Sans, sans-serif",
    boxShadow:"0px 2px 10px 1px rgba(44, 54, 94, 0.4)"
  },
  cardContent:{
    marginBottom:0,
    paddingBottom:0
  },
  collapseSectionHeader:{
    fontWeight:"bold",
    marginBottom:"10px",
    color:"#fff"
  },
  media: {
    borderRadius:"7px",
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
  expandedArea:{
    backgroundColor:"rgb(44,54,94)",
    color:"#fffffa",
  },
  expandedAreaLabel:{
    marginRight:10,
    padding:1,
    width:100
  },
  expandedAreaResults:{
    textAlign:"right"
  },
  avatar: {
    backgroundColor: "#FF5941",
  },
  footer:{
    margin:0,
    padding:0,
  },
  icon:{
      color:"#fffffa",
  },
  labelStyles:{
    fontSize:"16px",
    textTransform:"capitalize", 
    color:"#2C365E",
    width:"130px"
  },
  resultsText:{
    fontWeight:"bold",
    fontFamily:'Fira Sans, sans-serif',
    color:"#2C365E",
    fontSize:18,
    paddingLeft:10
  }
}));

const ReviewCard=(props)=>{
  const { postal_code, city,country,province,street_number } = props.data.addressData
  const { name, landlord_review } = props.data.landlord_bio;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick=()=>{
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="/static/imgs/mapView.jpg"
        title="map view image"
      />
      <CardContent className={classes.cardContent}>
        <Typography  style={{display:"flex"}}>
          <span className={classes.labelStyles}>Postal Code:</span>
          <span className={classes.resultsText}>
            {postal_code}
          </span>
        </Typography>
        {/* street address */}
        <Typography  style={{display:"flex"}}>
          <span className={classes.labelStyles}>Street Address:</span>
          <span className={classes.resultsText} style={{color:"#FF5941"}}>
            {street_number}
          </span>
        </Typography>
        <Typography style={{display:"flex"}}>
          <span className={classes.labelStyles}>City:</span>
          <span className={classes.resultsText}>
            {city}
          </span>
        </Typography>
      </CardContent>
      <CardActions className={classes.footer} >
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
        <CardContent className={classes.expandedArea}>
          <Typography className={classes.collapseSectionHeader}>About Landlord</Typography>
          <Typography style={{display:"flex"}}>
          <span className={classes.expandedAreaLabel}>Name: </span>
          <span className={classes.expandedAreaResults} style={{color:"#FF5941"}}>
            {name}
          </span>
        </Typography>
        <Typography style={{display:"flex"}}>
          <span className={classes.expandedAreaLabel}>Feedback: </span>
          <span className={classes.expandedAreaResults}>
            {landlord_review}
          </span>
        </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export { ReviewCard }