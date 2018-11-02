import React, { Component, lazy, Suspense } from 'react';
import './App.sass';
const PokedexContainer = lazy(() => import('./containers/PokedexContainer'));

const App = () => {
    return (
    <div className="App">
      <Suspense fallback={<div>Loading</div>}>
        <PokedexContainer />
      </Suspense>
    </div>
  );
}

export default App;
