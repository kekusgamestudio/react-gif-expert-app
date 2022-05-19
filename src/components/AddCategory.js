import React, { useState } from 'react'
import PropTypes from 'prop-types';


const AddCategory = ({ setCategoriesFunc }) => {

    const NEW_COMMAND = 'NEW:';
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            if (inputValue.substring(0, NEW_COMMAND.length) === NEW_COMMAND) {
                const auxInputValue = inputValue.substring(NEW_COMMAND.length).trim();
                if (auxInputValue.trim().length > 2) {
                    setCategoriesFunc((cats) => [auxInputValue]);
                }
            } else {
                setCategoriesFunc((cats) => [inputValue, ...cats]);
            }
            setInputValue('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p> {inputValue} </p>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
            <p className='help'>Utilice el prefijo "{NEW_COMMAND}" para limpiar la pantalla y comenzar de nuevo</p>
        </>
    )
}

AddCategory.propTypes = {
    setCategoriesFunc: PropTypes.func.isRequired
}


export default AddCategory
