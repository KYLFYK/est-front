import {useState} from "react";
import {IconOption} from "../Icons/Search/IconOption";

export const Search = () => {
    const [value,setValue]=useState<string>('')
    return(
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}} >
            <div style={{display:'flex',alignItems:'center'}}>
                <input style={{height:'34px'}} value={value} onChange={(e)=>setValue(e.currentTarget.value)} />
                <IconOption />
            </div>
            <button style={{height:'34px'}} >Добавить</button>
        </div>
    )
}