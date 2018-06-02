import React from 'react';
import MainCard from './MainCard';
class Caraousal extends React.Component{
	constructor(props){
		super(props);

	}
	render(){
		return(
			<div style={{display:'flex',flexDirection:'row',flexWrap:'no-wrap',overflowX:"scroll",maxWidth:"100vw"}}>
	          	{
	          		Object.entries(this.props.mainArray).map((ind,index)=>{
		              	return(
		                	<MainCard key={ind.name+index} name={ind.name} year={ind.year} genre={ind.genre} image={ind.image} ></MainCard>
		             	)
	         		})
	       		}
          </div>
		)
	}
}
export default Caraousal;