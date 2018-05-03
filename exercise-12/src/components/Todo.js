import React from 'react';


class Todo extends React.Component {

    render() {
        const {name, isFinished} = this.props;
        return (
            <ul>
                <li>{name} {isFinished}</li>
            </ul>
        )
    }

}

export default Todo