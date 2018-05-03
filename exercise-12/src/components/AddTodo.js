import React from 'react';

class AddTodo extends React.Component {
    state = {
            todo: ''
        }

      handleChange = (e) => {
        this.setState({
          todo: e.target.value
        })
      }

      onSubmit = () => {
               this.props.onAdded(this.state.todo);
          };


    render() {

        return <React.Fragment>
            <input type="text" onChange={this.handleChange} />
            <button onClick={this.onSubmit}>Add</button>
        </React.Fragment>
    }
}

export default AddTodo