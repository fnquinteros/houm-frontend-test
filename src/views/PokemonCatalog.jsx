import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pokedex from "pokedex-promise-v2";

import { orange, salmon } from "../constants/constants";
import PokemonCard from "../components/PokemonCard";
import PokemonInfo from "../components/PokemonInfo";

const PokemonCatalog = () => {
  const pokedexFetched = new Pokedex();
  const [filteredPokemonNamesAndInfo, setFilteredPokemonNamesAndInfo] =
    useState();
  const [loadedInfo, setLoadedInfo] = useState(false);
  const [loadedList, setLoadedList] = useState(false);
  const [pokemonNamesAndInfo, setPokemonNamesAndInfo] = useState();
  const [pokemonSelected, setPokemonSelected] = useState();
  const [selectedTypes, setSelectedTypes] = useState();
  const [selectedAbilities, setSelectedAbilities] = useState();
  const [selectedSpriteUrl, setSelectedSpriteUrl] = useState();
  const [selectedFormatedName, setSelectedFormatedName] = useState();
  const [selectedName, setSelectedName] = useState();

  useEffect(() => {
    getPokemonList();
  });

  const handleCardClick = (cardClicked) => {
    setPokemonSelected(cardClicked);
    getPokemonInfo();
  };

  const handleInputChange = (event) => {
    const filteredPokemonNamesAndInfo = pokemonNamesAndInfo.filter(
      (pokemonObject, i) => {
        return (
          pokemonObject.name.includes(event.target.value) ||
          (i + 1).toString().includes(event.target.value)
        );
      }
    );
    setFilteredPokemonNamesAndInfo(filteredPokemonNamesAndInfo);
  };

  const getPokemonInfo = () => {
    pokedexFetched.getPokemonByName(pokemonSelected).then((response) => {
      const { abilities, id, name, types, sprites } = response;
      const shownId = id.toString().padStart(3, "0");
      const formatedName = `#${shownId}  ${name.replace(
        name[0],
        name[0].toUpperCase()
      )}`;
      setSelectedTypes(types);
      setSelectedAbilities(abilities);
      setSelectedSpriteUrl(sprites.front_default);
      setSelectedFormatedName(formatedName);
      setSelectedName(name);
      setLoadedInfo(true);
    });
  };

  const getPokemonList = () => {
    pokedexFetched.getPokemonSpeciesList().then((response) => {
      const pokemonNamesAndInfo = response.results.map(
        (pokemonListElement) => pokemonListElement
      );
      setFilteredPokemonNamesAndInfo(pokemonNamesAndInfo);
      setPokemonNamesAndInfo(pokemonNamesAndInfo);
      setLoadedList(true);
    });
  };

  const missingnoAmount = 16;
  return (
    <MainContainer>
      <LeftPanelContainer
        desktopHeight="calc(100vh - 116px)"
        mobileHeight="calc(60vh - 100px)"
      >
        <FilterBarContainer>
          <FilterBar>
            <TextInput
              placeholder="Pokemon name or id..."
              onChange={handleInputChange}
            />
          </FilterBar>
        </FilterBarContainer>
        <LeftPanel>
          <CardRow>
            {loadedList ? (
              filteredPokemonNamesAndInfo.map((pokemonObject) => {
                const { name, url } = pokemonObject;
                const id = pokemonNamesAndInfo.indexOf(pokemonObject) + 1;
                const shownId = id.toString().padStart(3, "0");
                const pokemonFormatedName = `#${shownId}  ${name.replace(
                  name[0],
                  name[0].toUpperCase()
                )}`;
                const pokemonImageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                console.log(url);
                return (
                  <PokemonCard
                    id={id}
                    key={id}
                    name={name}
                    onClick={handleCardClick}
                    pokemonFormatedName={pokemonFormatedName}
                    pokemonImageLink={pokemonImageLink}
                    url={url}
                  />
                );
              })
            ) : (
              <>
                {[...Array(missingnoAmount)].map((e, i) => {
                  return (
                    <PokemonCard
                      key={i}
                      pokemonFormatedName="Missing no."
                      pokemonImageLink="https://www.pngkey.com/png/full/343-3434526_missingno-missingno-sprite.png"
                    />
                  );
                })}
              </>
            )}
          </CardRow>
        </LeftPanel>
      </LeftPanelContainer>
      <RightPanelContainer>
        <RightPanel
          desktopHeight="calc(100vh - 56px)"
          mobileHeight="calc(40vh - 16px)"
        >
          {loadedInfo ? (
            <PokemonInfoContainer>
              <PokemonInfo
                pokemonSelected={pokemonSelected}
                pokemonImageLink={selectedSpriteUrl}
                pokemonFormatedName={selectedFormatedName}
                pokemonTypes={selectedTypes}
                pokemonAbilities={selectedAbilities}
                pokemonName={selectedName}
              />
            </PokemonInfoContainer>
          ) : null}
        </RightPanel>
      </RightPanelContainer>
    </MainContainer>
  );
};

const CardRow = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
  overflow-y: auto;
`;

const TextInput = styled.input`
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  padding: 10px;
  width: 35%;
  &:hover {
    border: 1px solid black;
  }
  &:focus {
    border: 1px solid ${orange} !important;
    outline: none;
  }
`;

const FilterBar = styled.div`
  background-color: ${salmon};
  border-radius: 5px;
  height: 100%;
  line-height: 20px;
  padding: 5px;
  width: 100%;
`;

const FilterBarContainer = styled.div`
  height: 60px;
  padding: 5px 35px 5px 5px;
  width: 100%;
`;

const LeftPanel = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const LeftPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${(props) => props.desktopHeight};
  width: 100%;
  @media screen and (max-width: 1000px) {
    width: 100vw !important;
    height: ${(props) => props.mobileHeight};
  }
`;

const MainContainer = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-columns: 60% 40%;
  @media screen and (max-width: 1000px) {
    width: 100vw !important;
    height: ${(props) => props.mobileHeight};
  }
`;

const PokemonInfoContainer = styled.div`
  height: 100vh;
  position: relative;
`;

const RightPanel = styled.div`
  background-color: white;
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
    border-top: 1px solid #ddd;
    left: 0;
    top: auto;
    width: 100% !important;
    height: ${(props) => props.mobileHeight};
  }
  z-index: 0;
`;

const RightPanelContainer = styled.div`
  height: 100%;
`;

export default PokemonCatalog;
