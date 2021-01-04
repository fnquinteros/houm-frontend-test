import React, { Component } from 'react';
import styled from 'styled-components';

class PokemonCard extends Component {
  handleClick = () => {
    const { name } = this.props;
    this.props.onClick(name);
  }

  render() {
    const { 
      pokemonImageLink,
      pokemonFormatedName,
    } = this.props
    return (
      <Container onClick={this.handleClick}>
        <TitleContainer>
          <ImageContainer>
            <Image src={pokemonImageLink} />
          </ImageContainer>
          <BackgroundImageContainer>
            <BackgroundImage src='https://i.pinimg.com/originals/ca/e0/1a/cae01ab5cce960db0d7819cc96e97ce8.png'/>
          </BackgroundImageContainer>
          <Title>{pokemonFormatedName}</Title>
        </TitleContainer>
      </Container>
    )
  }
}

const BackgroundImage = styled.img`
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

const BackgroundImageContainer = styled.div`
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid #eee;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 200px;
  min-width: 250px;
  margin: 10px;
`;

const Image = styled.img`
  height: auto;
  image-rendering: pixelated;
  left: 50%;
  position: absolute;
  top: 100%;
  transform: translate(-35%, -78%);
  width: 100%;
  z-index: 1;
  -ms-transform: translate(-35%,-78%);
  -webkit-transform: translate(-35%,-78%);
  -webkit-filter: drop-shadow(5px 10px 5px #222);
  filter: drop-shadow(5px 10px 5px #222);
  ${Container}:hover & {
    width: 120%;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

const Title = styled.h4`
  background-color: rgba(0,0,0,0.5);
  border-radius: 5px;
  color: white;
  font-family: Helvetica;
  margin-top: 5px;
  margin-right: 9px;
  padding: 5px;
  position: absolute;
  top: 0px;
  z-index: 2;
`;

const TitleContainer = styled.div`
  align-items: center;
  border-radius: 10px;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  overflow: hidden;
  padding-left: 10px;
  position: relative;
  text-align: center;
  top: 0%;
  width: 100%;
`;

export default PokemonCard