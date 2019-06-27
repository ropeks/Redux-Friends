import React from 'react';

function Friend(props) {
    return (
        <div>
            <strong>{props.friend.name}, </strong>
            <span>{props.friend.age} - </span>
            <span>{props.friend.email}</span>
        </div>
    )
}

export default Friend;