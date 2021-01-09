import React, { Component } from 'react'
import './Egg.css'
import Egg1 from './Egg1.png'
import Egg2 from './Egg2.png'
import Message from './Message'
import { random } from './helpers'

class Eggs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eggs: [],
            eggImg: [Egg1, Egg2]
        }
    }

    handleClick = () => {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        const img = random(this.state.eggImg)
        this.setState(prevState => ({
            eggs: [...prevState.eggs, { x, y, img }]
        }));
    }

    render() {
        const eggs = this.state.eggs.map((egg, i) => (

            <img
                key={i}
                src={egg.img}
                className='Egg'
                style={{ top: `${egg.y}px`, left: `${egg.x}px` }}
                alt="Brown Egg"
            />
        ));
        return (
            < div className="Eggs">

                <h1>
                    EGG EGG EGG
                </h1>


                <button className="Egg-btn" onClick={this.handleClick}>{this.state.eggs.length} Eggs</button>
                {eggs}
            </div >
        )
    }
}

export default Eggs