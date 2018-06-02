import React from 'react';
var styles={
	mainForm:{
		width:300,
		height:"auto",
		backgroundColor:'#f7f1f1',
		flex:5,

	},
	heading:{
		color:"#535377",
		textAlign:"center"

	},
	field:{
		color:"#5b5b8e",
		textShadow:"0.2px 0.2px 0.2px grey",
		marginRight:20

	},
	margin:{
		margin:30
	},
	addButton:{
		backgroundColor:"#6173cc",
		color:"#fff",
		width:70,
		height:30,
		marginLeft:50

	}
}
class Form extends React.Component{
	constructor(props){
		super(props);
	}

render(){
	let {ParentName,ParentYear,ParentGenre,ParentImage,changeFuncName,changeFuncYear,changeFuncGenre,changeFuncImage} = this.props
	return(
       <div style={styles.mainForm}>

           			<h1 style={styles.heading}> Movies</h1>
          			<div style={styles.margin}>
          				<span style={styles.field} >Movie Name:</span>
          				<input onChange={(event)=>changeFuncName(event.target.value)} value={ParentName}/>
          			</div>
            		 <div style={styles.margin}>
            		 	<span style={styles.field}> Year: </span>
            		 	<input onChange={(event)=>changeFuncYear(event.target.value)} value={ParentYear}/>
            		</div>
              		<div style={styles.margin} onChange={(event)=>changeFuncGenre(event.target.value)}>
              			<span style={styles.field}> Genre:</span>
              			<select value={ParentGenre}>
	              			<option value="SciFi">SciFi</option>
	              			<option value="Romentic">Romentic</option>
	              			<option value="Comedy">Comedy</option>
	              			<option value="Thriller">Thriller</option>
              			</select>
              		</div>
               		<div style={styles.margin}>
               			<span style={styles.field}> Cover Image:</span>
               			<input value={ParentImage} onChange={(event)=>changeFuncImage(event.target.value)}/>
               		</div>
              		<button style={styles.addButton} onClick={()=>this.props.addToFormButton({name:ParentName,year:ParentYear,genre:ParentGenre,image:ParentImage})}>Add</button>
           		
       </div>


		)
}
}
export default Form;