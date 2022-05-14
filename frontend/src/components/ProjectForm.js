import React from "react";


class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'name':'',
            'urls_rep':'',
            'users': props.users[0].id
        }
    }

    handleSubmit(event){
        this.props.createProject(this.state.name, this.state.urls_rep, this.state.users)
        event.preventDefault()
    }


    handleChange(event)
    {
        this.setState(
            {
                [event.target.name]:event.target.value
            }

        );
        console.log(event.target.name, event.target.value)
    }


    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label for="name">name</label>
                    <input  type="text" name='name' value={this.state.name} placeholder='name'
                       onChange={(event) => this.handleChange(event)} />
                </div>

                <div className="form-group">
                    <label for="urls_rep">urls_rep</label>
                    <input  type="url" name='urls_rep' value={this.state.urls_rep} placeholder='urls_rep'
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label for="users">users</label>
                    <select name="users"
                        onChange={(event)=>this.handleChange(event)}>
                        {this.props.users.map((item)=><option
                        value={item.id}>{item.username}</option>)}
                    </select>
                </div>

                <input type="submit" value='Create'/>
            </form>
        )
}}

export default ProjectForm