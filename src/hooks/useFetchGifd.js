import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifd = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(category)
            .then(imgs => {

                setTimeout(() => {

                    setState({
                        data: imgs,
                        loading: false
                    });

                }, 500); // 1/2 segundo
            })
    }, [category]);

    return state;
}
