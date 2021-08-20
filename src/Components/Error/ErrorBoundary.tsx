import React, { Component } from "react";
import { DisplayError } from "./DisplayError";

interface IErrorBoundaryProps{

}

interface IErrorBoundaryState{
    Error:string | null;
    ErrorInfo:any
}

export default class ErrorBoundary extends Component<IErrorBoundaryProps,IErrorBoundaryState>{

    constructor(props:IErrorBoundaryProps){
        super(props);

        this.state={
            Error:null,
            ErrorInfo:null
        };
    }

    componentDidCatch(error:any,errorInfo:any){
        this.setState({
            Error:error,
            ErrorInfo:errorInfo
        });
    }

    public render(){
        if(this.state.ErrorInfo){
            return <DisplayError Error={this.state.Error} ErrorInfo={this.state.ErrorInfo}></DisplayError>
        }
        else
        {
            return this.props.children;
        }
    }

}