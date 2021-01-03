import React, { Component } from "react";
import styled from 'styled-components';
import PokemonCard from '../components/PokemonCard';
import PokemonInfo from '../components/PokemonInfo';
 
class PokemonCatalog extends Component {
  render() {
    return (
      <MainContainer>
        <LeftPanel height='calc(100vh - 56px)'>
          <CardRow>
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
        <RightPanel>
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
  justify-content: flex-start;
  padding: 10px;
  overflow-y: scroll;
  flex-wrap: wrap;
`;

const LeftPanel = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: column;
  flex-grow: 3;
  height: ${props => props.height};
`;

const MainContainer = styled.div`
  background-color: red;
  display: grid;
  grid-template-areas: "property-lists property-map";
  grid-template-columns: 60% 40%;
  flex-direction: row;
`;

const PokemonInfoContainer = styled.div`
  position: relative;
  height: 100vh;
`;

const RightPanel = styled.div`
  background-color: green;
  height: 100%;
  margin-top: 56px;
  padding: 10px;
  position: fixed;
  grid-area: property-map;
  width: 40% !important;
  right: 0;
  top: 0;
  bottom: 0;
`;
 
export default PokemonCatalog;