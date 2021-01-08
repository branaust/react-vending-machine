import React, { Component } from 'react'
import './VendingMachine.css'
import VendingMachineImg from './VendingMachine.jpg'

class VendingMachine extends Component {

    render() {
        return (

            <div
                className='VendingMachine'
                style={{ backgroundImage: `url(${VendingMachineImg})` }}
            >
                <h1
                    className="VendingMachine-p">WE GOT THE HEALTHIEST OF SNACKS #NOMNOMNOM
                </h1>

                <ul className="VendingMachine-links">
                    <li>Eggs</li>
                    <li>Sushi</li>
                    <li>Veggies</li>
                </ul>
            </div>
        )
    }
}

export default VendingMachine