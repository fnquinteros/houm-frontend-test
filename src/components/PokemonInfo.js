import React, { Component } from 'react';
import styled from 'styled-components';

class PokemonInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Info />
    )
  }
}

const Info = styled.div`
  width: 100% !important;
  height: 100% !important;
`;

export default PokemonInfo