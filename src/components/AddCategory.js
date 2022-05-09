import React, { useState } from 'react'
import PropTypes from 'prop-types';


const AddCategory = ({ setCategoriesFunc }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            if (inputValue.substring(0, 4) === 'NEW:') {
                setCategoriesFunc((cats) => [inputValue.substring(4).trim()]);
            } else {
                setCategoriesFunc((cats) => [inputValue, ...cats]);
            }

            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p> {inputValue} </p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


export default AddCategory
