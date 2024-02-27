import axios from 'axios';
import './App.css';
import logo from './logo.svg';
import { useEffect } from 'react';

function App() {
    const API_SERVER = process.env.REACT_APP_API_SERVER;
    useEffect(() => {
        axios({
            method: 'get',
            url: API_SERVER + '/test',
        })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>app 경로로 진입</h1>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
