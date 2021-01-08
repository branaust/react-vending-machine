import React, { Component } from 'react'
import './Veggies.css'
import Carrot from './Carrot.svg'
import './Veggies.css'

class Veggies extends Component {
    render() {
        return (
            < div className="Veggies">
                <img
                    className="Carrot1-img"
                    src={Carrot}
                    alt="Carrot"
                />
                <h1>
                    VEG IN MY WEDGE
                </h1>
                <img
                    className="Carrot1-img"
                    src={Carrot}
                    alt="Carrot"
                />
            </div >
        )
    }
}

export default Veggies