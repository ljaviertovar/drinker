import React, { useContext } from 'react';
import { CategoriesContext } from '../context/CategoriesContext';

const Form = () => {

    const { categories } = useContext(CategoriesContext);


    return (

        <form
            className="col-12"
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
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
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