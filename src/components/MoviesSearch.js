import React, {Component} from 'react';
import '../App.css';
import './movies-search.css';


class MoviesSearch extends Component{

    //Constructor
    constructor(){
        super();
        this.state = { 
            search: ''
        };

        //Bindeo de metodos y/o funciones
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
    }    

    //Metodos y/o funciones
    handleInput(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        }) 
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddfilter(this.state)
    }


    //Renderización
    render(){
        return(
            <form className="card-body" onSubmit={this.handleSubmit}>
                <div className="App">
                    <nav>          
                            <span className="badge badge-pill badge-light ml-2">
                                Movies & Series
                            </span>
                        <div className="container h-100">
                            <div className="d-flex justify-content-center h-100">
                                <div className="searchbar">
                                    <input className="search_input" type="search" name="search" onChange={this.handleInput} placeholder="Search ..."></input>
                                    <button type="submit" className="btn btn-primary search_icon">
                                        <i className="fas fa-search">
                                            Search
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" id="materialInline1" name="inlineMaterialRadiosExample1" onChange={this.handleInput}></input>
                            <label className="form-check-label" htmlFor="materialInline1">Movie</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" id="materialInline2" name="inlineMaterialRadiosExample1" onChange={this.handleInput}></input>
                            <label className="form-check-label" htmlFor="materialInline2">Serie</label>
                        </div>
                    </nav>
                </div>
            </form>
        )
    }
}

export default MoviesSearch