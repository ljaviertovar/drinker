import React, { useContext } from 'react';
import Reciep from './Reciep';

import { ReciepContext } from '../context/ReciepContext'

const ReciepsList = () => {

    const { recieps } = useContext(ReciepContext);

    return (

        <div className="row mt-5">
            {recieps.map(reciep => (
                <Reciep
                    key={reciep.idDrink}
                    reciep={reciep}
                />
            ))}
        </div>

    );
}

export default ReciepsList;