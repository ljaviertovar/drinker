import React, {useContext} from 'react';
import ModalProvider, { ModalContext } from '../context/ModalContext';

const Reciep = ({ reciep }) => {

    const { setIdReciep } = useContext(ModalProvider);

    return (

        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{reciep.strDrink}</h2>

                <img className="card-img-top" src={reciep.strDrinkThumb} alt={`Image of ${reciep.strDrink}`} />

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick = {() => {
                            setIdReciep(reciep.idDrink);
                        }} 
                    >
                        View Reciep
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Reciep;