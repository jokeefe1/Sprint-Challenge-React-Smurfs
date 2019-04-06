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
            .then(res => this.setState({ smurfs: res.data }))
            .catch(err => console.log(err));
    }

    handleAdd = data => {
        this.setState({ smurfs: data });
    };

    handleDelete = id => {
        axios
            .delete(`http://localhost:3333/smurfs/${id}`)
            .then(res => this.setState({ smurfs: res.data }))
            .catch(err => console.log(err));
    };

    handleUpdate = (id) => {
       console.log('HandleUpdate was clicked with id:', id)
    };

    render() {
        return (
            <div className="App">
                <Header />
                <Route
                    exact
                    path="/"
                    render={props => (
                        <Smurfs
                            {...props}
                            smurfs={this.state.smurfs}
                            handleDelete={this.handleDelete}
                            handleUpdate={this.handleUpdate}
                        />
                    )}
                />
                <Route
                    path="/smurf-form"
                    render={props => (
                        <SmurfForm
                            {...props}
                            smurfs={this.state.smurfs}
                            handleAdd={this.handleAdd}
                        />
                    )}
                />
                <Route
                    path="/smurfs"
                    render={props => (
                        <Smurfs
                            {...props}
                            smurfs={this.state.smurfs}
                            handleDelete={this.handleDelete}
                            handleUpdate={this.handleUpdate}
                        />
                    )}
                />
            </div>
        );
    }
}

export default App;
