import React from 'react';
import players from '../data/players';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';

export default (props) => {
    const playerToDisplay = parseFloat(props.match.params.id);
    const player = players.find(player => player.id === playerToDisplay);
    return player ?
        <React.Fragment>
            <h2>Player</h2>
            <p>Name: {player.name}</p>
            <p>Level: {player.level}</p>
            <p>Bio: {player.bio}</p>
            <Link to='/'><RaisedButton>&larr; Back</RaisedButton></Link>
        </React.Fragment>
        :
        <p>No such player</p>

}