import React, { Component } from 'react';
import List from './List';

class App extends Component {
   constructor(props){
      super(props)
      this.state ={
         films:[]
      }
      this.getFilms = this.getFilms.bind(this);
     
   }
    

    getFilms(){
        fetch('https://swapi.co/api/films/')
        .then((response) => {
          return response.json()})
         .then((response) => {
            console.log(response.results)
            this.setState({films:response.results})})
      
      }
        
   
           
         
    componentDidMount(){
       this.getFilms()
    }
   
    
    render() { 
       const {films} = this.state;
       console.log({films})
       return(
        <div className="App">
              <div className="container">
                  <h1 className="display-1 text-justify text-center text-info">StarWars</h1>
              </div>
           <List films={films}/>
       </div> 
       );
    }
    
}


export default App ;