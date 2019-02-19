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
                        <zoom-button ref="elem" id="customElement"></zoom-button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
