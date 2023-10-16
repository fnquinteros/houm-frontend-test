import React, { Component } from 'react';
import styled from 'styled-components';
import { orange, beige } from '../constants/constants';

class PokemonInfo extends Component {
  render() {
    const { 
      pokemonAbilities,
      pokemonFormatedName,
      pokemonImageLink,
      pokemonName,
      pokemonSelected,
      pokemonTypes,
    } = this.props;
    const onlyName = pokemonName;
    return (
      <Info>
        {
          pokemonSelected ? (
            <InfoCardContainer>
              <NameAndImageContainer>
                <ImageContainer>
                  <Image src={ pokemonImageLink } />
                </ImageContainer>
                <BackgroundImageContainer>
                  {<BackgroundImage src='https://i.pinimg.com/originals/ca/e0/1a/cae01ab5cce960db0d7819cc96e97ce8.png'/>}
                </BackgroundImageContainer>
                <Title>{ pokemonFormatedName }</Title>
              </NameAndImageContainer>
              <AttributesContainer className="attributes-container">
                <AttributeRow>
                  <AttributeTitle>Name: 
                  </AttributeTitle>
                  <AttributeText>
                    { 
                      onlyName.replace(onlyName[0], onlyName[0].toUpperCase())
                    }
                  </AttributeText>
                </AttributeRow>
                <AttributeRow>
                  <AttributeTitle>Type: </AttributeTitle>
                    {
                      pokemonTypes.map(
                        (typeObject, i) => {
                          const rawText = typeObject.type.name;
                          const formatedText = rawText.replace(rawText[0], rawText[0].toUpperCase())
                          return (
                            <AttributeText key={i}>
                              {formatedText}
                            </AttributeText>
                          );
                        }
                      )
                    }
                </AttributeRow>
                <AttributeRow>
                  <AttributeTitle>Abilities: </AttributeTitle>
                  {
                      pokemonAbilities.map(
                        (typeObject, i) => {
                          const rawText = typeObject.ability.name;
                          const formatedText = rawText.replace(rawText[0], rawText[0].toUpperCase())
                          return (
                            <AttributeText key={i}>
                              {formatedText}
                            </AttributeText>
                          );
                        }
                      )
                    }
                </AttributeRow>
              </AttributesContainer>
            </InfoCardContainer>
          ) : (
            null
          )
        }
      </Info>
    )
  }
}

const AttributeRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  margin-bottom: 7px;
  width: 100%;
`;

const AttributeText = styled.p`
  color: black;
  font-size: 32px;
  margin-bottom: 0;
  padding-left: 10px;
`;

const AttributeTitle = styled.h1`
  color: ${ orange };
  font-family: Helvetica;
  margin-bottom: 0;
`;

const AttributesContainer = styled.div`
  background-color: ${ beige };
  border-radius: 0 0 10px 10px;
  border-bottom: 1px solid #ddd;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  height: 60%;
  margin-top: 8px;
  overflow-y: auto;
  padding: 10px;
  @media screen and (max-width: 1000px) {
    border-radius: 0 10px 10px 0;
    height: 36.1vh;
    width: 60%;
    margin-top: 0;
  }
`;

const BackgroundImage = styled.img`
  height: auto;
  image-rendering: pixelated;
  left: 50%;
  max-height: 1150px;
  max-width: 1800px;
  position: absolute;
  top: 100%;
  transform: translate(-60%, -100%);
  width: 360%;
  z-index: 0;
  -ms-transform: translate(-60%,-100%);
  -webkit-transform: translate(-60%,-100%);
`;

const BackgroundImageContainer = styled.div`
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

const Image = styled.img`
  height: auto;
  image-rendering: pixelated;
  left: 50%;
  max-height: 500px;
  max-width: 500px;
  min-width: 160px;
  min-height: 160px;
  position: absolute;
  top: 100%;
  transform: translate(-35%, -78%);
  width: 40vw;
  z-index: 1;
  -ms-transform: translate(-35%,-78%);
  -webkit-transform: translate(-35%,-78%);
  -webkit-filter: drop-shadow(5px 10px 5px #222);
  filter: drop-shadow(5px 10px 5px #222);
`;

const ImageContainer = styled.div`
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 80px;
`;

const InfoCardContainer = styled.div`
  height: 100%;
  border-radius: 0 0 10px 10px;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: row;
  }
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


const NameAndImageContainer = styled.div`
  align-items: center;
  border-radius: 10px 10px 0 0;
  display: flex;
  height: 40%;
  justify-content: flex-start;
  overflow: hidden;
  padding-left: 10px;
  position: relative;
  text-align: center;
  top: 1%;
  width: 100%;
  @media screen and (max-width: 1000px) {
    border-radius: 10px 0 0 10px;
    height: 36vh;
    left: 0;
    top: auto;
    width: 40%;
  }
`;

export default PokemonInfo