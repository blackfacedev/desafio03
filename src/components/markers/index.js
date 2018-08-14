import React from 'react';
import { Marker } from 'react-map-gl';
import { connect } from 'react-redux';

const Markers = props => (
  <div>
    {props.users.map(user => (
      <Marker latitude={user.latitude} key={user.id} longitude={user.longitude}>
        <img
          style={{
            borderRadius: 100,
            width: 48,
            height: 48,
          }}
          src={user.avatar_url}
          alt="avatar"
        />
      </Marker>
    ))}
  </div>
);
const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(Markers);
