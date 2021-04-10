import React, { useContext, useState } from 'react';

import { CategoriesContext } from '../context/CategoriesContext';
import { ReciepContext } from '../context/ReciepContext';

const Form = () => {

    const [searching, setSearching] = useState({
        name: '',
        category: ''
    });

    const { categories } = useContext(CategoriesContext);
    const { setSearchRecieps, setConsult } = useContext(ReciepContext);

    const getDataReciep = e => {
        setSearching({
            ...searching,
            [e.target.name] : e.target.value
        })
    }

    return (

        <form
            className="col-12"
            onSubmit = { e => {
                e.preventDefault();
                setSearchRecieps(searching);
                setConsult(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Search by category or ingredients</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder="Search by Ingredients"
                        onChange= {getDataReciep}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                        onChange= {getDataReciep}
                    >
                        <option vlaiue="">-- Select category --</option>
                        {categories.map(category => (
                            <option
                                key={category.strCategory}
                                value={category.strCategory}
                            >
                                {category.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        className="btn btn-block btn-primary"
                        type="submit"
                        value="Search recieps"
                    />
                </div>
            </div>
        </form>

    );
}

export default Form;