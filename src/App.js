import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="react">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </header>
                    <div className="angular">
                        <custom-button ref="elem" id="hola"></custom-button>
                        <custom-button ref="elem" id="hola2"></custom-button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
