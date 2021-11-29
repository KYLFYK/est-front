import React, { FC, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import css from './HorizontalTabs.module.scss'
import Typography from "../Typography/Typography";

interface ITabItem {
    title: string,
    Component?: JSX.Element,
    onClick?: () => void;
}
interface Props {
    tabs: ITabItem[]
}
export const HorizontalTabs: FC<Props> = ({ tabs }) => {
    const [selectedTabIdx, setSelectedTabIdx] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedTabIdx(newValue);
    };

    return (
        <div>
            <div className={css.menu}>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={selectedTabIdx}
                        textColor='primary'
                        onChange={handleChange}
                        aria-label="wrapped label tabs"
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: '#C5A28E',
                                width: '50px',
                                marginLeft: '30px',
                            }
                        }}
                    >
                        {
                            tabs.map((tab, index) => (
                                <Tab
                                    key={index}
                                    value={index}
                                    style={{ textTransform: 'none' }}
                                    onClick={tab.onClick}
                                    label={
                                        <Typography color={
                                            (tab.Component && index === selectedTabIdx) ?
                                                'nude' : tab.Component ?
                                                    'tertiary' : 'accent'}
                                        > {tab.title}</Typography>
                                    }
                                />
                            ))
                        }
                    </Tabs>
                </Box>
                <hr color={'#F2F2F2'} className={css.hr} />
            </div>
            {tabs[selectedTabIdx].Component && (
                <div>
                    {tabs[selectedTabIdx].Component}
                </div>
            )}
        </div>

    );
}