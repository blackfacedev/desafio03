import React, { Component } from 'react';
import MapGL from 'react-map-gl';
import { connect } from 'react-redux';
import Sidebar from '../../components/sidebar';
import Modal from '../../components/modal';
import api from '../../services/api';
import Markers from '../../components/markers';

import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
    showModal: false,
    inputUser: '',
    loading: false,
    latitude: 0,
    longitude: 0,
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  // ja está pegando a coordenadas dos clicks
  handleMapClick = (e) => {
    const [latitude, longitude] = e.lngLat;

    this.setState({
      showModal: true,
      latitude,
      longitude,
    });
  };

  handleCloseModal = (e) => {
    this.setState({ showModal: false });
  };

  handleDeleteUser = (e) => {
    alert('Deleta User');
    this.setState({ showModal: false });
  };

  handleAddUser = async (e) => {
    e.preventDefault();
    const { latitude, longitude } = this.state;

    this.setState({
      loading: true,
      showModal: false,
    });

    try {
      const response = await api.get(`/users/${this.state.inputUser}`);
      this.props.addUser(response.data, latitude, longitude);

      console.log(response);
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({
        inputUser: '',
        loading: false,
      });
    }
  };

  handleInputUser = (e) => {
    this.setState({ inputUser: e.target.value });
  };

  render() {
    return (
      <div>
        <MapGL
          styles={{ zIndex: 1 }}
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <Markers onClick={this.handleMapClick} captureClick />
          <Modal
            showModal={this.state.showModal}
            handleMapClick={this.handleMapClick}
            handleCloseModal={this.handleCloseModal}
            handleInputUser={this.handleInputUser}
            handleAddUser={this.handleAddUser}
          />
        </MapGL>
        <Sidebar
          userInput={this.state.userInput}
          handleChangeInput={this.handleChangeInput}
          handleAddUser={this.handleAddUser}
          handleDeleteUser={this.handleDeleteUser}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addUser: (data, latitude, longitude) => dispatch({
    type: 'ADD_USER',
    payload: { user: data, latitude, longitude },
  }),
});

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
