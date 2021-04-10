import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ReciepContext = createContext();

const ReciepProvider = (props) => {

    const [recieps, setRecieps] = useState([]);
    const [searchRecieps, setSearchRecieps] = useState({
        name: '',
        category: ''
    });
    const [consult, setConsult] = useState(false);

    const { name, category } = searchRecieps;

    useEffect(() => {

        if (consult) {
            const getRecieps = async () => {

                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
                const resp = await axios.get(url);
                
                setRecieps(resp.data.drinks);

            }
            getRecieps();

        }

    }, [searchRecieps])

    return (

        <ReciepContext.Provider
            value={{
                setSearchRecieps,
                setConsult
            }}
        >
            {props.children}
        </ReciepContext.Provider>

    )

}

export default ReciepProvider;