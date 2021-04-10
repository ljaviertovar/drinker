import React, { createContext, useState } from 'react';

export const ReciepContext  = createContext();

const ReciepProvider = (props) => {

    const [recieps, setRecieps] = useState([]);
    const [searchRecieps, setSearchRecieps] = useState({
        name: '',
        category: ''
    });

    return (

        <ReciepContext.Provider
            value={{
                setSearchRecieps
            }}
        >
            {props.children}
        </ReciepContext.Provider>

    )

}

export default ReciepProvider;