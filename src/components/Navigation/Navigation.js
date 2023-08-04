import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

export default function Navigation() {
    return (
    <nav>
        <ul className= "nav-bar">
            <li>
                <NavLink style={({isActive}) => {return {color: isActive?'blue':''}}}
                to="/" className="about-me">About Me</NavLink> 
            </li>
            <li>
                <NavLink style={({isActive}) => {return {color: isActive?'blue':''}}}
                to="/portfolio" className="portfolio">Portfolio</NavLink>
            </li>
            <li>
                <NavLink style={({isActive}) => {return {color: isActive?'blue':''}}}
                to="/resume" className="resume">Resume</NavLink>
            </li>
            <li>
                <NavLink style={({isActive}) => {return {color: isActive?'blue':''}}}
                to="/contact" className="contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
    );
}