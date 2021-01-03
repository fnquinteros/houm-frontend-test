import React, { Component } from "react";
import styled from 'styled-components';
import PokemonCard from '../components/PokemonCard';
 
class Stuff extends Component {
  render() {
    return (
      <MainContainer>
        <LeftPanel>
          <Row>
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
          </Row>
          <Row>
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
          </Row>
          <Row>
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
          </Row>
          <Row>
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
          </Row>
        </LeftPanel>
        <RightPanel>
          <Row>
            <PokemonCard />
          </Row>
        </RightPanel>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  background-color: red;
  flex-direction: row;
`;

const LeftPanel = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  margin-right: 35%;
  overflow: auto;
  width: 65%;
`;

const RightPanel = styled.div`
  background-color: green;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 2;
  height: 100%;
  margin-top: 56px;
  padding: 10px;
  position: fixed;
  right: 0;
  top: 0;
  width: 35%;
`;

const Row = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
`;
 
export default Stuff;