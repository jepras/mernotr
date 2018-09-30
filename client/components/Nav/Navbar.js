import React from 'react';
/* import styles from "../../css/global.css"; */

export default class Navbar extends React.Component {
    
    render() {
        
        return (
        <div>
            
            <nav>
                <ul>
                    <li><a href="/auth/logout">Log out</a></li>
                    <li><a href="/auth/login">Login</a></li>
                    <li><a href="/app">Homepage</a></li>
                    <li><a href="/profile">Profile</a></li>
                </ul>
            </nav>
        </div>
        );
    }
}