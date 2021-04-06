import React, { Component } from 'react';



class FilmInfo extends Component {
    constructor(props) {
        super(props);

        this.state ={
            open:false,
        }


       this.openInfoBox = this.openInfoBox.bind(this);
       this.closeInfoBox = this.closeInfoBox.bind(this);
    }


    openInfoBox(){
        this.setState({open:!this.state.open })
    }

    closeInfoBox(){
        this.setState({open:!this.state.open })
    }

    render() { 
        const filmInfo = this.props.filmInfo;
        console.log(filmInfo)

        if(!this.state.open){
         return<p className = "btn btn-info mt-2 px-2 mb-3 ml-2" onClick ={ this.openInfoBox}>Show info</p>
         }
         return(
            <div className="p-1 mb-1 ml-2">
                <h5 className="font-weight-light">Title: {filmInfo.title}</h5>
                <h5 className="font-weight-light">Producer : {filmInfo.producer}</h5>
                <h5 className="font-weight-light">Episode : {filmInfo.episode_id}</h5>    
                <p className = "btn btn-info mt-2 px-2 mb-3 ml-2 " onClick ={ this.closeInfoBox}>Hide info</p> 
           </div>
            ) 
           
           
    };
       
     
}
export default FilmInfo ;