import React from 'react';
import Searchbar from "material-ui-search-bar";

const SearchBar=(props)=>(
    <Searchbar {...props} style={styles.searchbarStyle}/>
)
const styles ={
    searchbarStyle:{
        backgroundColor:"rgba(44,54,94,0.1)",
        borderRadius: "20px",
        margin: "0 auto",
        maxWidth: 600,
        padding: 7,
        boxShadow: '1px 3px 6px 2px rgba(44,54,94,0.6)'  
      }
}
export {SearchBar}
