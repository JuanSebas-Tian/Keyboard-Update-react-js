import React, { Component } from 'react'
import './contenido.css';

export default class Contenido extends Component{
    render(){
        return(
            <div className="contenido">
                <div className="row empareja">
                    <div className="col firstCol">
                        <div className="row empareFirstComp"></div>
                        <div className="row empareSecoComp"></div>
                        <div className="row empareTercComp"></div>                    
                    </div>
                    <div className="col SecondCol">
                        <div className="row empareFirstCompEnd"></div>
                        <div className="row empareSecoCompEnd"></div>
                        <div className="row empareTercCompEnd"></div>                    
                    </div>
                </div>
            </div>
        )
    }
}