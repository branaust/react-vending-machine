import React, { Component } from 'react'
import './Sushi.css'
import Sushi1 from './Sushi1.png'
import Sushi2 from './Sushi2.png'

class Sushi extends Component {
    render() {
        return (
            < div className="Sushi">
                <h1>
                    SUSHHHH
                </h1>
                <img
                    className="Sushi1-img"
                    src={Sushi1}
                    alt="Sushi"
                />
                <img
                    className="Sushi2-img"
                    src={Sushi2}
                    alt="Sushi"
                />
            </div >
        )
    }
}

export default Sushi