import React, { Component } from 'react';
import styled from 'styled-components';

class PokemonCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { pokemonName, pokemonImageLink } = this.props
    return (
      <CardContainer>
        <CardTitleContainer>
          <CardImageContainer>
            <CardImage src={pokemonImageLink} />
          </CardImageContainer>
          <CardBackgroundImageContainer>
            <CardBackgroundImage src='https://i.pinimg.com/originals/ca/e0/1a/cae01ab5cce960db0d7819cc96e97ce8.png'/>
          </CardBackgroundImageContainer>
          <CardTitle>{pokemonName}</CardTitle>
        </CardTitleContainer>
        <CardAttributesContainer>

        </CardAttributesContainer>
      </CardContainer>
    )
  }
}

const CardAttributesContainer = styled.div`
  border-radius: 0px 0px 10px 10px;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  height: 60%;
`;

const CardBackgroundImage = styled.img`
  height: auto;
  image-rendering: pixelated;
  left: 50%;
  position: absolute;
  top: 100%;
  transform: translate(-60%, -100%);
  width: 350%;
  z-index: 0;
  -ms-transform: translate(-60%,-100%);
  -webkit-transform: translate(-60%,-100%);
`;

const CardBackgroundImageContainer = styled.div`
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

const CardImage = styled.img`
  height: auto;
  image-rendering: pixelated;
  left: 50%;
  position: absolute;
  top: 100%;
  transform: translate(-50%, -68%);
  width: 150%;
  z-index: 1;
  -ms-transform: translate(-50%,-68%);
  -webkit-transform: translate(-50%,-68%);
  -webkit-filter: drop-shadow(5px 10px 5px #222);
  filter: drop-shadow(5px 10px 5px #222);
`;

const CardImageContainer = styled.div`
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

const CardContainer = styled.div`
  background-color: white;
  border-bottom: 1px solid grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 400px;
  min-width: 250px;
  margin: 10px;
`;

const CardTitle = styled.h2`
  font-family: Helvetica;
  margin-top: 5px;
  position: absolute;
  text-shadow: 
    2px 0 0 #fff, 
    -2px 0 0 #fff, 
    0 2px 0 #fff, 
    0 -2px 0 #fff, 
    1px 1px #fff, 
    -1px -1px 0 #fff, 
    1px -1px 0 #fff, 
    -1px 1px 0 #fff;
  top: 0px;
  z-index: 2;
`;

const CardTitleContainer = styled.div`
  align-items: center;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  height: 40%;
  justify-content: flex-start;
  overflow: hidden;
  padding-left: 10px;
  position: relative;
  text-align: center;
  top: 0%;
  width: 100%;
`;

export default PokemonCard