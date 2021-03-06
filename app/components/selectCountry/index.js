import React from 'react';
import styled from 'styled-components';

import MapRo from './map-ro.png';
import MapWorld from './map-world.png';

const Map = styled.div`
  button {
    font-family: "Open Sans", sans-serif;
    color: #5f288d;
    cursor: pointer;
    display: block;
    text-align: center;
    width: 100%;
    white-space: nowrap;
    font-weight: 700;
  }

  .map-label,
  .map-icon {
    display: inline-block;
    padding: 5px;
    cursor: pointer;
  }

  .map-label {
    display: block;
  }
`;

const inactive = {
  opacity: '0.6',
  outline: 'none',
};

const active = {
  outline: 'none',
};

export default function SelectCountry(props) { // eslint-disable-line react/nostate
  return (
    <div className="row">
      <Map className="col-xs-6 map">
        <button style={props.active ? active : inactive} onClick={props.setActiveOption} data-name="country" >
          <img className="map-icon" height={40} src={MapRo} role="presentation" />
          <div className="map-label">În România</div>
        </button>
      </Map>
      <Map className="col-xs-6 map">
        <button style={props.active ? inactive : active} onClick={props.setActiveOption} data-name="abroad" >
          <img className="map-icon" height={40} src={MapWorld} role="presentation" />
          <div className="map-label">În diaspora</div>
        </button>
      </Map>
    </div>
  );
}

SelectCountry.propTypes = {
  active: React.PropTypes.bool,
  setActiveOption: React.PropTypes.func,
};
