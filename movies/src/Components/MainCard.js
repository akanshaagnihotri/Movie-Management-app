
import React from "react";

var styles={
	mainCard:{
		backgroundColor:'#ffff',
		minWidth:300,
		maxWidth:300,
		height:300,
		margin:40,
		border:"1px solid #d6cdcd",
		display:"flex",
		flexDirection:"column",
		


	},
	imageCard:{
		flex:4
	},
	contentCard:{
		flex:1,
		borderTop:"1px solid #d6cdcd"

	},
	info:{
		color:"#3c3642;",
		margin:7,

	}
}
const MainCard=(props)=>{
	let{name,year,genre,image}=props; 
	return(
	<div style={styles.mainCard}>
	      <div style={styles.imageCard}>
	      {
	      	(image.length==0) ? (<div></div>) : (<img width={300} height={250} src={image}/>)
	      }
	      </div>
	      <center>
	       <div style={styles.contentCard}>
	           <div style={styles.info}>Name:{name}</div>
	           <div style={styles.info}>Year:{year}</div>
	           <div style={styles.info}>Genre:{genre}</div>
	       </div>
	    </center>
	 </div>
	)
}
export default MainCard;
