import React, { Component } from 'react';
import styled from 'styled-components';

class PokemonCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card />
    )
  }
}

const Card = styled.div`
  border: 1px solid grey;
  border-radius: 10px;
  height: 400px;
  min-width: 250px;
  margin: 10px;
`;

export default PokemonCard