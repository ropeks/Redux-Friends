import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions/actionCreators';

function FriendForm(props) {
    const onAddFriend = (e) => {
        e.preventDefault();

        const name = e.target['name'];
        const age = e.target['age'];
        const email = e.target['email'];

        const newFriend = {
            name: name,
            age: age,
            email: email
        }

        name.value &&
        age.value &&
        email.value &&
        props.addFriend(newFriend);

        name.value = '';
        age.value = '';
        email.value = '';
    }

    return (
        <div>
            <form onSubmit={onAddFriend}>
                <input name="name" placeholder="Name" />
                <input name="age" placeholder="Age" />
                <input name="email" placeholder="Email" />
                <button type="submit">Add Friend</button>
            </form>
        </div>
    )
}

export default connect(
    null, 
    { addFriend }
  )(FriendForm);