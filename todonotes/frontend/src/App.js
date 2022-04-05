import React from 'react';
import './App.css';
import UserList from "./components/Users";
import ProjectList from "./components/Project";
import MenuItems from "./components/Menu";
import FooterItems from "./components/Footer";
import axios from "axios";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import ToDoList from "./components/ToDo";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'projects': [],
            'todos': []
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/users/").then(response => {
            this.setState(
                {
                    'users': response.data
                }
            )
        }).catch(error => console.log(error))


        axios.get("http://127.0.0.1:8000/api/project/").then(response => {
            this.setState(
                {
                    'projects': response.data
                }
            )
        }).catch(error => console.log(error))


        axios.get("http://127.0.0.1:8000/api/ToDo/").then(response => {
            this.setState(
                {
                    'todos': response.data
                }
            )
        }).catch(error => console.log(error))
    }

            render() {
                return (
                <div>
                    <BrowserRouter>
                        <MenuItems/>
                            <Switch>
                                <Route exact path='/' component={() => <UserList users={this.state.users} />} />
                                <Route exact path='/project' component={() => <ProjectList projects={this.state.projects} />} />
                                <Route exact path='/ToDo' component={() => <ToDoList todos={this.state.todos} />} />
                            </Switch>
                        <FooterItems/>
                    </BrowserRouter>
                </div>
                );
            }
}


export default App;
