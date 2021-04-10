import React from 'react';
import Header from './components/Header';
import Form from './components/Form';

import CategoriesProvider from './context/CategoriesContext';
import ReciepProvider from './context/ReciepContext';

function App() {
  return (
    <CategoriesProvider>
      <ReciepProvider>

        <Header />

        <div className="container mt-5">
          <div className="row">
            <Form />
          </div>
        </div>

      </ReciepProvider>
    </CategoriesProvider>
  );
}

export default App;
