import React, { Component } from 'react';
import FilmInfo from './Filminfo.js';


class List extends Component {
  
    render() { 

        const films = this.props.films;
        //console.log(films)
        return(
         <div>
         {
           films.map((f) => { 
           //console.log(f)  
           //console.log(f.title) 
           //console.log(f.episode_id)
           return(
               <div className="px-2 bg-light rounded " key={f.episode_id}>
                 <h2 className="mt-3 mb-4 pt-3 ml-1 text-info">{f.title}</h2>
                 <FilmInfo filmInfo={f}/>
               </div>
               
           )         
          })
         }
        </div> 
        );
     }

}
export default List;