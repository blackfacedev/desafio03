import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container, User, Info, Action,
} from './styles';

const Sidebar = props => (
  <Container>
    {props.users.map(user => (
      <User key={user.id}>
        <img src={user.avatar_url} alt="" />
        <Info>
          <strong>{user.name}</strong>
          <small>{user.login}</small>
        </Info>
        <Action>
          <span>
            <i style={{ color: '#D45454', marginRight: '20px' }} className="fa fa-minus-circle" />
          </span>
          <span>
            {' '}
            <i className="fa fa-angle-right" />
          </span>
        </Action>
      </User>
    ))}
  </Container>
);

Sidebar.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar_url: PropTypes.string,
      login: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

// minha duvida esta aqui !!!!!!
const mapDispatchToProps = dispatch => ({
  addUser: name => dispatch({ type: 'ADD_USER', payload: name }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
