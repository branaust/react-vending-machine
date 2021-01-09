import React, { Component } from 'react'
import './VendingMachine.css'
import Message from './Message'
import VendingMachineImg from './VendingMachine.jpg'
import { Link } from 'react-router-dom'

class VendingMachine extends Component {

    render() {
        return (

            <div
                className='VendingMachine'
                style={{ backgroundImage: `url(${VendingMachineImg})` }}
            >

                <h1 className="VendingMachine-p">WE GOT THE HEALTHIEST OF SNACKS #NOMNOMNOM</h1>


                <Message>
                    <ul className="VendingMachine-links">
                        <li ><Link to="/Eggs" className="link">Eggs</Link></li>
                        <li><Link to="/Sushi" className="link">Sushi</Link></li>
                        <li><Link to="/Veggies" className="link">Veggies</Link></li>
                    </ul>
                </Message>
            </div>
        )
    }
}

export default VendingMachine