import React, { Component } from 'react'
import './Veggies.css'
import Message from './Message'
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
                <Message>
                    <h1>
                        VEG IN MY WEDGE
                     </h1>
                </Message>

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