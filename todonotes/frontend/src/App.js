import React from 'react';
import './App.css';
import UserList from "./components/Users";
import MenuItems from "./components/Menu";
import FooterItems from "./components/Footer";
import axios from "axios";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': []
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/users").then(response => {
            this.setState(
                {
            'users': response.data
        }
            )}).catch(error => console.log(error))
            }


            render() {
                return (
                <div>
                    {/*Тут я не понял как подцеплять, ведь без аргументов функция*/}
                    <MenuItems/>
                    <UserList users={this.state.users}/>
                    <FooterItems/>
                </div>
                );
            }
}

export default App;
