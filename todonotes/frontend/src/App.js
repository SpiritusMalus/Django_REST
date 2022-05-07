import React from 'react';
import './App.css';
import UserList from "./components/Users";
import ProjectList from "./components/Project";
import MenuItems from "./components/Menu";
import FooterItems from "./components/Footer";
import LoginForm from "./components/Auth";
import axios from "axios";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ToDoList from "./components/ToDo";
import Cookies from 'universal-cookie';
import ProjectForm from "./components/ProjectForm";
import ToDoForm from "./components/ToDoForm";




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'projects': [],
            'todos': [],
            'token':'',
            'auth': false,
        }
    }

    createProject(name, urls_rep, users){
        const headers = this.get_headers()
        const data = {name:name, urls_rep:urls_rep, users:[users]}
        axios.post('http://127.0.0.1:8000/api/project/', data, {headers}).then(response => {
            this.load_data()

        }).catch(error => console.log(error))
    }

    deleteProject(id){
        const headers = this.get_headers()
        axios.delete(`http://127.0.0.1:8000/api/project/${id}`, {headers}).then(response => {
            this.load_data()
        }).catch(error => console.log(error))
    }

    createToDo(text, is_active, project, users_name){
        const headers = this.get_headers()
        const data = {text:text, is_active:is_active, project:project, users_name:users_name}
        axios.post('http://127.0.0.1:8000/api/ToDo/', data, {headers}).then(response => {
            this.load_data()
        }).catch(error => console.log(error))
    }

    deleteToDo(id){
        const headers = this.get_headers()
        axios.delete(`http://127.0.0.1:8000/api/ToDo/${id}`, {headers}).then(response => {
            this.load_data()
        }).catch(error => console.log(error))
    }

    searchProject(name){
        const headers = this.get_headers()
        axios.get(`http://127.0.0.1:8000/api/project/?search=${name}`, {headers}).then(response => {
            this.setState(
                {
                    'projects': response.data
                }
            )
        }).catch(error => console.log(error))
    }

    load_data(){
        const headers = this.get_headers()
        axios.get("http://127.0.0.1:8000/api/users/", {headers}).then(response => {
            this.setState(
                {
                    'users': response.data
                }
            )
        }).catch(error => console.log(error))


        axios.get("http://127.0.0.1:8000/api/project/", {headers}).then(response => {
            this.setState(
                {
                    'projects': response.data
                }
            )
        }).catch(error => console.log(error))


        axios.get("http://127.0.0.1:8000/api/ToDo/", {headers}).then(response => {
            this.setState(
                {
                    'todos': response.data
                }
            )
        }).catch(error => console.log(error))
    }

    set_token(token){
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState(
            {'token':token}, ()=>this.load_data()
        )

    }

    is_auth(){
        this.setState({'auth': !!this.state.token})
        return this.state.auth
    }

    logout(){
        this.set_token('')
    }

    get_token_storage(){
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState(
            {'token':token}, ()=>this.load_data()
        )
    }
    get_headers() {
        let headers = {
            'Content-Type': 'application/json'
            }
            if (this.is_auth())
            {
                headers['Authorization'] = `Token ${this.state.token}`
            }
            return headers
    }

    get_token(username, password){
        axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password})
            .then(response => {
                this.set_token(response.data['token'])
            }).catch(error => alert('Неверный логин или пароль'))
        }

    componentDidMount() {
        this.get_token_storage()
    }

            render() {
                return (
                <div>
                    <BrowserRouter>
                        {/*Статус просто передаётся в фигурных, а функции с перенаправлением*/}
                        <MenuItems is_auth={this.state.auth} logout={() => this.logout()}/>
                            <Switch>
                                <Route exact path='/' component={() =>
                                    <UserList
                                        users={this.state.users}
                                    />}
                                />

                                <Route exact path='/project' component={() =>
                                    <ProjectList
                                        searchProject={(name)=> this.searchProject(name)}
                                        projects={this.state.projects}
                                        deleteProject={(id) => this.deleteProject(id)}
                                    />}
                                />

                                <Route exact path='/project/create' component={() =>
                                    <ProjectForm
                                        users={this.state.users}
                                        createProject={(name, urls_rep, users) => this.createProject(name, urls_rep, users)}
                                    />}
                                />

                                {/*<Route exact path='/project/search' component={() =>*/}
                                {/*    <SearchForm searchProject={(name)=> this.searchProject(name)}*/}
                                {/*    />}*/}
                                {/*/>*/}

                                <Route exact path='/ToDo' component={() =>
                                    <ToDoList
                                        todos={this.state.todos}
                                        deleteToDo={(id) => this.deleteToDo(id)}
                                    />}
                                />

                                <Route exact path='/ToDo/create' component={() =>
                                    <ToDoForm
                                        projects={this.state.projects}
                                        users={this.state.users}
                                        createToDo={(text, is_active, project, users_name) =>
                                            this.createToDo(text, is_active, project, users_name)}
                                    />}
                                />

                                <Route exact path='/login' component={() =>
                                    <LoginForm
                                        get_token={(username, password) => this.get_token(username, password)}
                                    />}
                                />
                            </Switch>
                        <FooterItems/>
                    </BrowserRouter>
                </div>
                );
            }
}

export default App;
