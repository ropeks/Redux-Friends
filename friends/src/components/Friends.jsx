import React from 'react';
import { connect } from 'react-redux';
import Friend from './Friend';
import FriendForm from './FriendForm';
import { getFriends } from '../actions/actionCreators';


class FriendsList extends React.Component {
    // state = { friends: [] }

    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <div>
                {
                    this.props.friends.map(friend => (
                        <Friend
                            key={friend.id}
                            friend={friend}
                        />
                    ))
                }
                <FriendForm />
            </div>
        )
    }
}

function mapStateToProps(reducers) {
    return { friends: reducers.friends };
}

export default connect(
    mapStateToProps,
    { getFriends }
)(FriendsList);