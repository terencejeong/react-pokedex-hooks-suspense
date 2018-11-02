import React, { Suspense } from 'react';
import Pokedex from '../components/Pokedex';

const PokedexContainer = () => (
  <Suspense fallback={<div>Loading</div>}>
    <Pokedex />
  </Suspense>
);

export default PokedexContainer;
