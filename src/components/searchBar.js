import React from 'react';
import SearchBar from "material-ui-search-bar";

const searchBar=(props)=>(
    <SearchBar {...props} style={styles.searchbarStyle}/>
)
const styles ={
    searchbarStyle:{
        margin: "0 auto",
        maxWidth: 600,
        padding: 7,
        boxShadow: '1px 3px 6px 2px rgba(44,54,94,0.6)'  
      }
}
export default searchBar
