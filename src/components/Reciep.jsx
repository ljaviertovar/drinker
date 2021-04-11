import React, { useContext, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

// import { ModalConsumer } from '../context/ModalContext';
import { ModalContext } from '../context/ModalContext';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Reciep = ({ reciep }) => {

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { setIdReciep, detailReciep, setDetailReciep } = useContext(ModalContext);

    return (

        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{reciep.strDrink}</h2>

                <img className="card-img-top" src={reciep.strDrinkThumb} alt={`Image of ${reciep.strDrink}`} />

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setIdReciep(reciep.idDrink);
                            handleOpen();
                        }}
                    >
                        View Reciep
                    </button>

                    <Modal
                        open={open}
                        onClose={() => {
                            setIdReciep(null);
                            setDetailReciep({});
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{detailReciep.strDrink}</h2>
                            <h3 className="mt-4">Instructions</h3>
                            <p>
                                {detailReciep.strInstructions}
                            </p>
                            <img className="img-fluid my-4" src={detailReciep.strDrinkThumb} alt={`Image of ${detailReciep.strDrink}`}/>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>

    );
}

export default Reciep;