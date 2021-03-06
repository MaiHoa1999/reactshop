import React, { useContext } from "react"
import {useState} from 'react'
let initalState = {
    default: localStorage.getItem('lang') || 'en',
    // en:{
    //     'hello':'xinchao'
    // }
    
}
let Context = React.createContext(initalState)

export default function TranslateProvider({children, translate}){
    let [state, setstate] = useState({...initalState, ...translate});
    function t(key){
        return state?.[state.default]?.[key] || key
    }
    function selectLang(lang){
        localStorage.setItem('lang',lang)
        setstate({
            ...state, 
            default: lang
        })
    }

    return <Context.Provider value={{ t, selectLang, lang: state.default}}>
        {children}
    </Context.Provider>
}

export function useTranslate(){
  let {t, selectLang, lang} = useContext(Context)
    return{
        t,
        selectLang,
        lang
    }
}