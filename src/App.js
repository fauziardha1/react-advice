import React, { Component } from 'react'
import axios from 'axios'

import './App.css'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            advice:'hello'
        }
        this.fetchAdvice = this.fetchAdvice.bind(this)
    }

    componentDidMount(){
        this.fetchAdvice()
    }
    
    fetchAdvice(){
        axios.get('https://api.adviceslip.com/advice')
            .then((response)=>{
                // const {advices} = response.data.slip
                this.setState(state=>({
                    advice : response.data.slip.advice
                })) // karena nama variable disini sama dengan nama property class maka cukup satu
            })
            .catch((error)=>{
                console.log(error)
            })
        
    }
    render() {
        // destructuring it
        const {advice} = this.state
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading"> {advice} </h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>Give Me an Advice!</span>
                    </button>
                </div>
            </div>
        )
    }
}
