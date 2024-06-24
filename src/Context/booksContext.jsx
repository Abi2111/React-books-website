import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const storeContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [book, setBook] = useState(() => {
    const savedBook = localStorage.getItem('selectedBook');
    return savedBook ? JSON.parse(savedBook) : {};
  });

  useEffect(() => {
    localStorage.setItem('selectedBook', JSON.stringify(book));
  }, [book]);

  const contextValues = {
    book,
    setBook,
  };

  return (
    <storeContext.Provider value={contextValues}>
      {children}
    </storeContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreContextProvider;
