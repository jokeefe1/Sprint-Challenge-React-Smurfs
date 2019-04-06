import axios from 'axios';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smurfs: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:3333/smurfs')
            .then(response => {
                this.setState({ smurfs: response.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="App">
            <Header />
            <Route exact path="/" render={props => (
              <Smurfs {...props} smurfs={this.state.smurfs} />
            )}
            />
                <Route
                    exact
                    path="/smurf"
                    render={props => (
                        <SmurfForm {...props} smurfs={this.state.smurfs} />
                    )}
                />
                <Route
                    exact
                    path="/smurfs"
                    render={props => (
                        <Smurfs {...props} smurfs={this.state.smurfs} />
                    )}
                />
            </div>
        );
    }
}

export default App;
