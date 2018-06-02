import React, {Component} from 'react';
import axios from 'axios';
import MainCard from './MainCard';
class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchContent:"",
			searchresponse:[]
		}
		this.searchData = this.searchData.bind(this);
	}
	searchData(){
		console.log("I'm Searching")
		const url = "http://www.omdbapi.com/?apikey=c1d51b40&t="+this.state.searchContent;
		axios.get(url).then((response)=>{
			//console.log(response.data);
			this.setState({searchresponse:response.data})
		}).catch((err)=>{
			console.log(err);
		})
	}
	render(){
		return(
			<div>
				<input onChange={(event)=>{this.setState({searchContent:event.target.value})}} type="text" value={this.state.searchContent}/>
				<button onClick={this.searchData}>Search</button>
				<br/>
				{
					(this.state.searchresponse.length==0) ?
					(<h1>No Data to Show</h1>) :
					(
						<MainCard image={this.state.searchresponse[0].Poster ? this.state.searchresponse[0].Poster : "" } genre={this.state.searchresponse.Genre} year={this.state.searchresponse.Year} name={this.state.searchresponse.Title}/>
					)
				}
			</div>
		)
	}
}
export default Search;
