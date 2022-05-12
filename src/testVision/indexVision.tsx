import React, {useEffect, useState} from 'react';
import css from './index.module.scss'
const width=[50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000,1050,1100,1150,1200,1250,1300,1350,1400,1450,1500,1550,1600,1650,1700,1750,1800,1850,1900,1950,2000,2050]
const height=[50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000]

const IndexVision1 = () => {

    const [width1,setWidth]=useState(0)
    const [height1,setHeight1]=useState(0)

    useEffect(()=>{
        setWidth(window.innerWidth)
        setHeight1(window.innerHeight)
    },[])

    return (
        <div >
            <div style={{display:"flex",boxSizing:'border-box'}} className={css.width}>
                {
                    width.map((w,index)=>(
                        <div
                            key={index}
                            style={{display:width1 > index*50?"flex": "none",marginLeft:index === 0?'':"50px",
                                width:'0px',borderRight:`1px solid ${index % 2 === 0 ?'black':'orange'}`,

                                height:'1000px',boxSizing:'border-box'}}
                            title={w.toString()}>
                            |{index*50}
                        </div>
                    ))
                }
            </div>
            <div style={{display:"block",position:'relative'}} className={css.height}>
                {
                    height.map((w,index)=>(
                        // <div key={index} style={{marginTop:index === 0?'-1008px':"50px",marginLeft:"10px",height:'0px',display:height1 > index*50?"flex": "none",}} title={w.toString()}>
                        <div key={index} style={{marginTop:index === 0?'-1009px':"50px",marginLeft:"10px",height:'0px',display:"flex"}} title={w.toString()}>
                            -{index*50}
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default IndexVision1;