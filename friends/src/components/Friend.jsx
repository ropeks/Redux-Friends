import React from 'react';

function Friend(props) {
    return (
        <div>
            <strong>{props.friend.name}</strong>
        </div>
    )
}

export default Friend;