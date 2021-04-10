import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [idReciep, setIdReciep] = useState(null);
    const [detailReciep, setDetailReciep] = useState({});

    useEffect(() => {

        const getDetailReciep = async () => {

            if (!idReciep) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReciep}`;
            const resp = await axios.get(url);

            setDetailReciep(resp.data.drinks[0]);

        }

        getDetailReciep();

    }, [idReciep])

    return (

        <ModalContext.Provider
            value={{
                setIdReciep
            }}
        >
            {props.children}
        </ModalContext.Provider>

    );
}

export default ModalProvider;