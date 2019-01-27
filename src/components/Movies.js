import React, { Component } from 'react';
import MoviesSearch from './MoviesSearch'
import axios from 'axios';
import Popup from "reactjs-popup";
  

class Movies extends Component {
  constructor(){
    super();

    this.state ={
        todo: "",
        ratings:[],      
        filter:""
    }

    // Bindeo de metodos
    this.handleAddfilter = this.handleAddfilter.bind(this);  

         //Llamado a la API    
         axios.get("http://www.omdbapi.com/?t=matrix&apikey=6c43c325")         
         .then(response => {
             this.setState({
                 todo: response.data,
                 ratings: response.data.Ratings[0]
             })
         })
         .catch(error =>{
            console.log(error)
         })
    
    }  

    //Metodos y/o funciones

    handleAddfilter(search){
        this.setState({
            filter: search
        })
        console.log(this.filter)
    }

    //Renderización
    render(){
        if(this.state.todo.Title !== null && this.state.todo.Title !== ""){
            return(
                <div>
                    <MoviesSearch onAddfilter={this.handleAddfilter}></MoviesSearch>
                        <Popup trigger={                            
                            <div className="container center" align="center">
                                <table width="20%">
                                    <table className="table table-striped table-dark">
                                        <tbody>
                                            <tr>
                                                <td align="center"><img src={this.state.todo.Poster}></img></td>
                                            </tr>
                                            <tr>
                                                <td align="center"><h2>{this.state.todo.Title}</h2></td>
                                            </tr>
                                            <tr>
                                                <td align="center"><h3>{this.state.todo.Year}</h3></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </table>
                            </div>                       
                        }modal closeOnDocumentClick>
                            <div className="container center">
                                <table className="table table-striped table-dark">
                                        <tbody>
                                            <tr>
                                                <td rowSpan="7" align="center"><img src={this.state.todo.Poster}></img></td>
                                            </tr>
                                            <tr>
                                                <td align="center"><h2>{this.state.todo.Title}</h2></td>
                                            </tr>
                                            <tr>
                                                <td align="left"><h3>{this.state.todo.Year}</h3></td>
                                            </tr>
                                            <tr>
                                                <td align="left"><h3>{this.state.ratings.Value}</h3></td>
                                            </tr>
                                            <tr>
                                                <td align="left"><h3>{this.state.todo.Genre}</h3></td>
                                            </tr>
                                            <tr>
                                                <td align="left"><h3>{this.state.todo.Actors}</h3></td>
                                            </tr>
                                            <tr>
                                                <td align="left"><h3>{this.state.todo.Plot}</h3></td>
                                            </tr>
                                        </tbody>
                                </table>
                            </div>      
                        </Popup>
                </div>            
            )
        }return(
                <MoviesSearch></MoviesSearch>
                )
    }
}


export default Movies;