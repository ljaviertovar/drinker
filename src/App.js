import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ReciepsList from './components/ReciepsList';

import CategoriesProvider from './context/CategoriesContext';
import ReciepProvider from './context/ReciepContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoriesProvider>
      <ReciepProvider>
        <ModalProvider>

          <Header />

          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
          </div>

          <ReciepsList />

        </ModalProvider>
      </ReciepProvider>
    </CategoriesProvider>
  );
}

export default App;
