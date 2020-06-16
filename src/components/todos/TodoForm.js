import React, { Component } from 'react';

class TodoForm extends Component {
    state = { todosName: '', complete: false }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // this.setState({ todoName: ''})
        this.props.addTodo(this.state)
        this.setState({ todosName: '' })
    }

    render(){
        const { todosName } = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    name="todosName"
                    value={todosName}
                    onChange={this.handleChange}


                    required
                />
                <input type='submit' />
            </form>
        )
    }
}

export default TodoForm;