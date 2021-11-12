import React, {FC, useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import css from './AnchorLine.module.scss'
import Typography from "../../Typography/Typography";
import FavoriteIcon from "../../../icons/Favorite/Favorite";

const line = ['Об объекте','Особенности','Архитектура','Квартиры','Инфраструктура','Застройщик',]

type TabsWrappedLabelType = {

}

export const TabsWrappedLabel :FC<TabsWrappedLabelType> = () => {
    const [value, setValue] = useState(line[0]);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className={css.menu}>
            <div className={css.margin}>
                <Box sx={{ width: '100%'}}>
                    <Tabs
                        value={value}
                        textColor='primary'
                        onChange={handleChange}
                        aria-label="wrapped label tabs example"
                        TabIndicatorProps={{style: {
                                backgroundColor:'#C5A28E',
                                width:'50px',
                                marginLeft:'30px',
                            }}}
                    >
                        {
                            line.map((l,index)=>(
                              <Tab
                                key={index}
                                value={index}
                                style={{textTransform: 'none'}}
                                label={
                                    <Typography  color="accent"   > {l}</Typography>
                                    // <div className={css.label}>{l}</div>
                                }
                                />


                            ))
                        }
                    </Tabs>
                </Box>
            </div>
            <hr color={'#CAD1DA'} className={css.hr}/>
        </div>

    );
}