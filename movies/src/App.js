import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CompleteCard from "./Components/CompleteCard";
import MainCard from "./Components/MainCard";
import Caraousal from "./Components/Caraousal";
import Search from "./Components/Search";
import firebase from './Common/firebase';
const database = firebase.database();


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      MoviesTotal:{},
      genreArray:[
        "Sci-Fi",
        "Romantic",
        "Comedy",
        "Thriller",
        "RomCom",
        "Drama"
      ],
    
    }
    this.addFunction=this.addFunction.bind(this);

        }
          componentDidMount(){
               database.ref('/movies').on('value',(response)=>{
                   if(response.val())
                     this.setState({MoviesTotal:response.val()})
                   console.log("hey",this.state.MoviesTotal);
                })
            }
   
  
  addFunction(object){
    
    database.ref('/movies').push(object).then(()=>
    {
      alert("movie posted");
    })
  }
  render(){
    return(
      <div>
        {
          <div>
          {
          Object.entries(this.state.MoviesTotal).map((ind)=>{
            console.log(ind)
          })
         } 
          <CompleteCard addingToList={this.addFunction}></CompleteCard>
         

           </div>
        }
        <Caraousal mainArray={this.state.MoviesTotal}></Caraousal>
        
      </div>
    )
  }
}


export default App;

