import React, { useEffect,useState} from 'react'

const getValue = (key,initialValue) =>{
    let value = JSON.parse(localStorage.getItem(key))
    if (value){
        return value
    }else{
        return initialValue
    }

}

export default function useLocalStorage(key,initialValue) {
    const [value, setValue] = useState(getValue(key,initialValue))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])
    

    return[value, setValue]
    
}
