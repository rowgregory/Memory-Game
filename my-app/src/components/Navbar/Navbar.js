import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div class="container">
        <div class="row">
            <nav>
            <ul>
                <div id="brand">{props.title}</div>
                <div id="rightOrWrong">{props.rightOrWrong}</div>
                <div id="current_score">Current Score: {props.score}</div>
                <div id="topScore">Top Score: {props.topScore}</div>
            </ul>
            </nav>
        </div>
    </div>
    
);

export default Navbar;