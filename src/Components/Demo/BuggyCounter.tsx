import React, { Component } from "react";

interface IBuggyCounterProps{

}

interface IBuggyCounterState{
    counter:number;
}

export default class BuggyCounter extends Component<IBuggyCounterProps,IBuggyCounterState>{

    constructor(props:IBuggyCounterProps){
        super(props);

        this.state = { counter: 0 };
    }

    public render(){
        if(this.state.counter===5){
            throw new Error("Crashed!!!");
        }
        else
        {
            return (
                <React.Fragment>
                    <h2>{this.state.counter}</h2>
                    <button className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white" onClick={()=> this.setState({ counter:this.state.counter + 1 })}>Increment</button>
                </React.Fragment>
            )
        }
    }

}