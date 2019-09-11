import React from 'react';
import Searchbar from "material-ui-search-bar";
import {makeStyles} from "@material-ui/core"


const styles = makeStyles({
    searchbarStyle:{
        backgroundColor:"transparent",
        borderRadius: "3px",
        margin: "0 auto",
        maxWidth: "360px",
        padding: 3,
        boxShadow: '0px 1px 3px 1px rgba(44,54,94,0.6)'  
      },
      step:{
        "& $active": {
        color: "pink"
      },
      },
      active:{}
})
const SearchBar=(props)=>{
    const classes = styles()
    return <Searchbar {...props} className={classes.searchbarStyle}/>
}

export {SearchBar}
