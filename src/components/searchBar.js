import React from 'react';
import Searchbar from "material-ui-search-bar";

const SearchBar=(props)=>{
    const styles ={
        searchbarStyle:{
            backgroundColor:props.invalid ? "rgba(255,89,65, .4)":"rgba(44,54,94,0.1)",
            borderRadius: "20px",
            margin: "0 auto",
            maxWidth: "360px",
            padding: 7,
            boxShadow: '1px 3px 6px 2px rgba(44,54,94,0.6)'  
          }
    }

    return <Searchbar {...props} style={styles.searchbarStyle}/>
}

export {SearchBar}
