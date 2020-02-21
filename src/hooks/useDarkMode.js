import React, { useEffect } from "react";

import {useLocalStorage} from "./useLocalStorage"

const useDarkMode = (key) =>{

    const [value, setValue] = useLocalStorage('isDarkModeEnable')
    
    useEffect(()=>{
        value ? document.querySelector(body).classList.add('.dark-mode') : document.querySelector(body).classList.remove('.dark-mode')
    },[value])
    return [value, setValue]

}