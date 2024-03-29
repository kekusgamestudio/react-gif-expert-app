import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['The Simpson'])


    return (
        <>
            <h2>Buscador de gif animados</h2>
            <AddCategory setCategoriesFunc={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category} />
                    )
                }
            </ol>
        </>
    )
}


export default GifExpertApp
