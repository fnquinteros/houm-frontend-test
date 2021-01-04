import React, { Component } from "react";
import styled from 'styled-components';
import PokemonCard from '../components/PokemonCard';
import PokemonInfo from '../components/PokemonInfo';
 
class PokemonCatalog extends Component {
  render() {
    return (
      <MainContainer>
        <LeftPanel desktopHeight='calc(100vh - 56px)' mobileHeight1000='calc(60vh - 40px)'  mobileHeight600='calc(60vh - 40px)'>
          <CardRow>
            <PokemonCard pokemonName='Eevee' pokemonImageLink='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png'/>
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
          </CardRow>
        </LeftPanel>
        <RightPanel desktopHeight='calc(100vh - 56px)' mobileHeight1000='calc(40vh - 16px)'>
          <PokemonInfoContainer>
            <PokemonInfo />
          </PokemonInfoContainer>
        </RightPanel>
      </MainContainer>
    );
  }
}
  
const CardRow = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  overflow-y: scroll;
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 3;
  height: ${props => props.desktopHeight};
  @media screen and (max-width: 1000px) {
    width: 100vw !important;
    height: ${props => props.mobileHeight1000};
  }
  @media screen and (max-width: 600px) {
    width: 100vw !important;
    height: ${props => props.mobileHeight600};
  }
  z-index: 1;
`;

const MainContainer = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-areas: "property-lists property-map";
  grid-template-columns: 60% 40%;
`;

const PokemonInfoContainer = styled.div`
  height: 100vh;
  position: relative;
`;

const RightPanel = styled.div`
  background-color: green;
  bottom: 0;
  height: 100%;
  margin-top: 56px;
  min-width: 400px;
  padding: 10px;
  position: fixed;
  right: 0;
  top: 0;
  width: 40% !important;
  @media screen and (max-width: 1000px) {
    left: 0;
    top: auto;
    width: 100% !important;
    height: ${props => props.mobileHeight1000};
  }
  z-index: 0;
`;
 
export default PokemonCatalog;