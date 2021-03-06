import React from 'react';
import { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Markers = props => (
  <div>
    {props.users.map(user => (
      <Marker latitude={user.latitude} key={user.id} longitude={user.longitude}>
        <img
          style={{
            borderRadius: 100,
            width: 48,
            height: 48,
            borderColor: '#7159C1',
            borderWidth: 4,
            borderStyle: 'solid',
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

Markers.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(Markers);
