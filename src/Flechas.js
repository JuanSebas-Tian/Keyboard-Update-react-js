import React, { Component } from 'react'
import './flechas.css';
import $ from 'jquery';
import ArrowKeysReact from 'arrow-keys-react';
  
export default class Flechas extends Component{
    constructor(props){
        super(props)
        this.state = {
            lugar: 2,
            seconds: 0,
        }
        
        ArrowKeysReact.config({
            left: () => {
                this.handelLeft(this)
            },
            right: () => {
                this.handelRight(this)
            }
        });
    }

    handelLeft(){
        const {lugar} = this.state
        if (lugar<2) {
            $('.f1').html($('.dedo'))
        }else {
            $('.f'+lugar).html($('.dedo'))
            this.setState(state => ({ 
                lugar: state.lugar-1
            }))
        }
    }

    handelRight(){
        const {lugar} = this.state
        if (lugar>12) {
            $('.f12').html($('.dedo'))
        }else {
            $('.f'+lugar).html($('.dedo'))
            this.setState(state => ({ 
                lugar: state.lugar+1
            }))
        }
    }
    
    tick() {
        this.setState(state => ({
          seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => {this.handelLeft(); this.handelRight()}, 0.01);
        this.interval = setInterval(() => this.tick(), 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }

    render(){
        return(
            <div>
                <div className="contenido">
                    <div {...ArrowKeysReact.events} className="arrowKey" tabIndex="1">
                        <div className="row empareja">
                            <div className="row mainCol">
                                <div className="col cont f1"><div className="dedo" ></div></div>
                                <div className="col cont f2"></div>
                                <div className="col cont f3"></div>
                                <div className="col cont f4"></div>
                                <div className="col cont f5"></div>
                                <div className="col cont f6"></div>
                                <div className="col cont f7"></div>
                                <div className="col cont f8"></div>
                                <div className="col cont f9"></div>
                                <div className="col cont f10"></div>
                                <div className="col cont f11"></div>
                                <div className="col cont f12"></div>
                            </div>
                            <div className="row mainCol">
                                <div className="col comp" ></div>
                                <div className="col comp" ></div>
                                <div className="col comp" ></div>
                                <div className="col comp" ></div>
                                <div className="col comp" ></div>
                                <div className="col comp" ></div>
                                <div className="col comp" ></div>
                                <div className="col comp" ></div>
                                <div className="col comp" ></div>
                                <div className="col comp" ></div>
                                <div className="col comp" ></div>
                                <div className="col comp" ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={style.contenido}>
                    Seconds: {this.state.seconds}
                </div>
            </div>
        )
    }
}

const style = {
    contenido: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        margin: '10vmin',
    }
}