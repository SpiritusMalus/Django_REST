import React from "react";


class ToDoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'text':'',
            'is_active':true,
            'project':props.projects[0].id,
            'users_name':props.users[0].id
        }
    }

    handleSubmit(event){
        this.props.createToDo(this.state.text, this.state.is_active, this.state.project, this.state.users_name)
        event.preventDefault()
    };


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
                <div>
                    <label for="text">text</label>
                    <input type="text" name='text' value={this.state.text} placeholder='text'
                       onChange={(event) => this.handleChange(event)} />
                </div>

                <div>
                    <label for="project">project</label>
                    <select name="project"
                        onChange={(event)=>this.handleChange(event)}>
                        {this.props.projects.map((item)=><option
                        value={item.id}>{item.name}</option>)}
                    </select>
                </div>

                <div>
                    <label for="users">user</label>
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

export default ToDoForm