import React from 'react';
import Apartment from "../apartment/[id]";
import Land from "../land/[id]";
import House from "../house/[id]";
import ResidentialComplex from "../residential-complex/[id]";

const Viewing = () => {

    const type='apartment'

    const searchTypeObject =(type:string)=>{
        switch (type) {
            case 'apartment' :return <Apartment/>
            // case 'house' :return <House/>
            // case 'complex' :return <ResidentialComplex/>
            // case 'land' :return <Land  />
            default:return <Apartment/>
        }
    }

    return (
        <div>
            viewing
        </div>
    );
};

export default Viewing;