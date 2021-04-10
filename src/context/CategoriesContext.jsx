import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear el Context 
export const CategoriesContext = createContext();

// Provider es donde se encuentran las funciones y state 
const CategoriesProvaider = (props) => {

    // crear el estate del context 
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        
        const getCategories = async () => {

            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const resp = await axios.get(url);

            setCategories(resp.data.drinks);

        }
       
        getCategories();

    }, [])

    return (
        <CategoriesContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    );
}

export default CategoriesProvaider;