import Link from "next/link"
import React,{Children} from "react"
const link =(props)=>{
    const active = props.currentPath === props.href ? "active" : " " 
    return (
     <React.Fragment>
        <Link className={active} style={styles.link}>{Children.only(props.children)}</Link>
        <style jsx>
            {`
                .active {
                    color:red
                }
            `}
        </style>
    </React.Fragment> 
  )}

const styles ={
    link:{
        fontFamily: 'Poppins, sans-serif',
        fontWeight:900,
        color: "#fffffa",
        textDecoration:"none",
        marginLeft:"15px"
      }
}


export default link