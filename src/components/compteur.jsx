import React,{Component} from 'react';
import Valeur from './valeur.jsx';
import './compteur.css';


export default class Compteur extends Component{
    constructor(props){
        super(props);
        this.Incrementer=this.Incrementer.bind(this);
        this.Decrementer=this.Decrementer.bind(this);
        this.Initialiser=this.Initialiser.bind(this);
    }
    state={
        compteur:0,
        pasI:1,
        pasD:1
    }

    Incrementer(){
        this.setState({compteur:(this.state.compteur + this.state.pasI)})
    }
    Decrementer(){
        this.setState({compteur:(this.state.compteur - this.state.pasD)})
    }
    Initialiser(){
        this.setState({compteur:0})
    }

    


    render(){
        return <div id='container'>

            <Valeur p={this.state.compteur}/>
            
            <div className='btns'>
                <button onClick={this.Incrementer}>Incrementer</button>
                <button onClick={this.Decrementer}>Decrementer</button>
                <button onClick={this.Initialiser}>Initialiser</button>
            </div>

            <fieldset className='btns' >
                <legend>Pas d'incrementation</legend>
                <button onClick={() => this.setState({pasI:1})} disabled={this.state.pasI===1}>1</button>
                <button onClick={() => this.setState({pasI:2})} disabled={this.state.pasI===2}>2</button>
                <button onClick={() => this.setState({pasI:3})} disabled={this.state.pasI===3}>3</button>
                <button onClick={() => this.setState({pasI:4})} disabled={this.state.pasI===4}>4</button>
            </fieldset> 

            <fieldset className='btns'>
                <legend>Pas decrementation</legend>
                <button onClick={() => this.setState({pasD:1})} disabled={this.state.pasD===1}>1</button>
                <button onClick={() => this.setState({pasD:2})} disabled={this.state.pasD===2}>2</button>
                <button onClick={() => this.setState({pasD:3})} disabled={this.state.pasD===3}>3</button>
                <button onClick={() => this.setState({pasD:4})} disabled={this.state.pasD===4}>4</button>
            </fieldset> 


        </div>
    }
}