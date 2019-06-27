import React from 'react';
import Friend from './Friend';

function FriendsList() {
    const testArray = [1, 2, 3];

    return (
        <div>
            {
                testArray.map(() => {
                    return <Friend />;
                })
            }
        </div>
    )
}

export default FriendsList;