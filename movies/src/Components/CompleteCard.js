import React from "react";
import MainCard from "./MainCard";
import Form from "./Form";
var styles={
  mainBox:{
    display:"flex",
    flexDirection:"row",
    border:"1px solid #d6cdcd",
  },
  leftCard:{
    flex:2,
    backgroundColor:'#f7f1f1',
    borderRight:"1px solid #d6cdcd",

  }
}
class CompleteCard extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name:"",
			year:"",
			genre:"",
			image:""
		}
		this.changeName = this.changeName.bind(this);
		this.changeYear = this.changeYear.bind(this);
		this.changeGenre = this.changeGenre.bind(this);
		this.changeImage = this.changeImage.bind(this);
	}
	changeName(valueFromChild){
		this.setState({name:valueFromChild})
	}
	changeYear(value){
		this.setState({
          year:value
		})
	}
	changeGenre(value){
		this.setState({
			genre:value
		})
	}
	changeImage(value){
		this.setState({
			image:value
		})
	}
	render(){
		return(
		<div style={styles.mainBox}>
    		<div style={styles.leftCard}>
    			<MainCard  name={this.state.name} image={this.state.image} genre={this.state.genre} year={this.state.year}></MainCard>
    		</div>
    		<Form addToFormButton={this.props.addingToList} changeFuncImage={this.changeImage} changeFuncGenre={this.changeGenre} changeFuncName={this.changeName} changeFuncYear={this.changeYear} ParentName={this.state.name} ParentYear={this.state.year} ParentGenre={this.state.genre} ParentImage={this.state.image}  />
    	</div>
    )
	}
}

export default CompleteCard;